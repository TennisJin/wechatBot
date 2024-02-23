/**
 * WechatBot
 *  - https://github.com/gengchen528/wechatBot
 */
const schedule = require("node-schedule");
const { getPrice, fetchStock, fetchExchangeUSDPrice } = require("./index");
const { MyBot } = require("./bot");
const { rooms, people, keyWords } = require("../config");
const completion = require("./openai");
const { initChatGpt, conversation } = require("./chatgpt");
const { getTodayImportantPic } = require("./getTodayImportantPic");
const path = require("path");
const fs = require("fs");

let chatApi, fileBoxHelper;
(async () => {
  const { FileBox } = await import("file-box");
  fileBoxHelper = FileBox;
})();
const workDayRemind = (botInstance) => {
  const run = () => {
    let promises = [getPrice("hf_XAU"), getPrice("hf_CL")];
    Promise.all(promises).then((res) => {
      const hjPrice = res[0];
      const oilPrice = res[1];
      const remindWords = `黄金: ${hjPrice}\n原油: ${oilPrice}`;
      const roomList = [rooms.wajue, rooms.jiaoyi];
      roomList.forEach((room) => {
        botInstance.chatInRoom(room, remindWords);
      });
    });
  };
  // run();

  /**
    *    *    *    *    *    *
    ┬    ┬    ┬    ┬    ┬    ┬
    │    │    │    │    │    │
    │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
    │    │    │    │    └───── month (1 - 12)
    │    │    │    └────────── day of month (1 - 31)
    │    │    └─────────────── hour (0 - 23)
    │    └──────────────────── minute (0 - 59)
    └───────────────────────── second (0 - 59, OPTIONAL)
   */
  // 工作日8点到17点58分提示价格
  schedule.scheduleJob("00 59 8-17 * * 1-5", function () {
    run();
  });

  // 每15分钟更新数据图片

  schedule.scheduleJob("*/15 * * * *", () => {
    // 执行任务
    getTodayImportantPic();
  });

  // 测试
  // setTimeout(() => {
  //   getPrice("hf_XAU").then(async (res) => {
  //     let contact = await botInstance.bot.Contact.find({
  //       name: "吐丝",
  //     });
  //     botInstance.chatInRoom(rooms.wajue, res, contact);
  //   });
  //   getPrice("hf_CL").then(async (res) => {
  //     let contact = await botInstance.bot.Contact.find({
  //       name: "李嘉琪",
  //     });
  //     botInstance.chatInRoom(rooms.wajue, res, contact);
  //   });
  // }, 1000);
};

// 监听对话
async function onMessage(botInstance, msg) {
  const contact = msg.talker(); // 发消息人
  const content = msg.text().trim(); // 消息内容
  const room = msg.room(); // 是否是群消息
  const alias = (await contact.alias()) || (await contact.name()); // 发消息人备注
  const isText = msg.type() === botInstance.bot.Message.Type.Text;

  if (msg.self()) {
    return;
  }

  if (isText) {
    const text = msg.text();
    console.log("内容:" + text);
    // if (text === "创建群聊") {
    //   // let contactTusi = await botInstance.bot.Contact.find({ name: "吐丝" });
    //   let contactA = await botInstance.bot.Contact.find({ name: "李嘉琪" });
    //   let contactB = await botInstance.bot.Contact.find({ name: "Robd" });
    //   const contactList = [contactB, contactA];
    //   const newRoom = await botInstance.bot.Room.create(contactList, "aaa");
    //   // await newRoom.add(contact);
    //   await newRoom.say("欢迎加入新群聊！");
    // }
    if (room) {
      // 如果是群消息
      const topic = await room.topic();
      console.log(
        `群名: ${topic} 发消息人: ${contact.name()} 内容: ${content}`
      );
      let self = await msg.to();
      // console.log({ self });
      // console.log({ selfName: self.name() });
      // 获取消息内容，拿到整个消息文本，去掉 @+名字并转为小写
      let sendText =
        content
          .replace("@" + self.name(), "")
          .trim()
          .toLowerCase() || "";
      // console.log({ sendText });
      // 使用await判断太慢，改为文字判断
      // const mentionSelf = await msg.mentionSelf();
      const mentionSelf = content.indexOf("@" + self.name()) !== -1;
      // 外汇逻辑
      if (
        topic == rooms.wajue ||
        topic.startsWith("~") ||
        topic.startsWith("*") ||
        topic.startsWith("⭐️")
      ) {
        // 判断字符串a是否以数组b中的某一个值开头，是则返回b中命中的值
        function getMatchingValue(a, b) {
          for (var i = 0; i < b.length; i++) {
            if (a.startsWith(b[i])) {
              return b[i];
            }
          }
          return null;
        }

        const matchedValue = getMatchingValue(sendText, Object.keys(keyWords));
        const code = keyWords[matchedValue];
        if (code) {
          if (["hf_XAU", "hf_CL"].includes(code)) {
            getPrice(code).then((res) => {
              room.say(res);
            });
          } else if (["JD", "NVDA", "TSLA"].includes(code)) {
            room.say("不聊股票哦");
            // fetchStock(code).then((res) => {
            //   room.say(res);
            // });
          } else if (["BTC", "ETH", "GBP", "EUR"].includes(code)) {
            fetchExchangeUSDPrice(code).then((res) => {
              room.say(res);
            });
          } else if (["DATA", "CASE", "ALL"].includes(code)) {
            // 频率限制
            // 1、数据一般是00，15，30，45发布，所以非节点的时间15分钟之内不用重复截图
            // 获取当前时间和缓存的图片做对比
            const nowDate = new Date();
            const nowHour = nowDate.getHours();
            const nowMinute = nowDate.getMinutes();

            // 需要获取新的图片
            let needNewPic = false;
            try {
              let pic = fs.statSync(
                path.join(path.resolve(__dirname), `./data/${code}.png`)
              );
              const picDate = pic.birthtime;
              const picHour = picDate.getHours();
              const picMinute = picDate.getMinutes();
              // 不同的小时内
              console.log({ picHour, picMinute, nowHour, nowMinute });
              if (picHour != nowHour) {
                needNewPic = true;
              }
              // 不同属于同一个时间quarter
              if (Math.floor(nowMinute / 15) !== Math.floor(picMinute / 15)) {
                needNewPic = true;
              }
            } catch (e) {
              // 图片不存在
              needNewPic = true;
            }

            // 从本地图片数据创建
            needNewPic && (await getTodayImportantPic(code));
            setTimeout(() => {
              const image = fileBoxHelper.fromFile(
                path.join(path.resolve(__dirname), `./data/${code}.png`)
              );
              room.say(image);
            }, 500);
          }
        }
      }
      // 测试群聊
      if (room.id == rooms.ceshiId) {
        if (sendText == "加群") {
          let person = await botInstance.bot.Contact.find({ name: "李嘉琪" });
          await room.add(person);
        }
      }
      // openai逻辑
      if (mentionSelf) {
        // 群聊开启
        if (sendText == botInstance.config.room.startOpenAiKeyWord) {
          botInstance.config.room.openedRoom.includes(topic) ||
            botInstance.config.room.openedRoom.push(topic);
          room.say("开启成功");
        } else if (sendText == botInstance.config.room.closeOpenAiKeyWord) {
          // 群聊关闭
          botInstance.config.room.openedRoom =
            botInstance.config.room.openedRoom.filter((item) => item !== topic);
          room.say("关闭成功");
        } else {
          // 已开启
          if (botInstance.config.room.openedRoom.includes(topic)) {
            // 通过conversationuuid记录当前所有人的对话id，完成连续对话功能
            conversation(
              chatApi,
              sendText,
              botInstance.conversationuuid[topic + contact.name()]
                ?.conversationid,
              botInstance.conversationuuid[topic + contact.name()]?.id
            )
              .then((res) => {
                // room.say(res.data.choices[0].text.trim());
                let { conversationId, id } = res;
                botInstance.conversationuuid[topic + contact.name()] = {};
                botInstance.conversationuuid[
                  topic + contact.name()
                ].conversationId = conversationId;
                botInstance.conversationuuid[topic + contact.name()].id = id;
                room.say(res.text.trim());
              })
              .catch((e) => {
                console.log({ e });
                room.say("哦豁，出错了");
              });
          }
        }
      }
    } else {
      // chatgpt对话取消
      return false;
      // 如果非群消息 目前只处理文字消息
      console.log(`发消息人: ${contact.name()} 消息内容: ${content}`);
      // 获取消息内容，拿到整个消息文本，去掉 @+名字并转为小写
      let sendText = content.trim().toLowerCase() || "";
      console.log({ chatApi });
      conversation(
        chatApi,
        sendText,
        botInstance.conversationuuid["alone" + contact.name()]?.conversationid,
        botInstance.conversationuuid["alone" + contact.name()]?.id
      )
        .then((res) => {
          // room.say(res.data.choices[0].text.trim());
          let { conversationId, id } = res;
          botInstance.conversationuuid["alone" + contact.name()] = {};
          botInstance.conversationuuid[
            "alone" + contact.name()
          ].conversationId = conversationId;
          botInstance.conversationuuid["alone" + contact.name()].id = id;
          botInstance.findOne(contact.name(), res.text.trim());
        })
        .catch((e) => {
          console.log({ e });
          botInstance.findOne(contact.name(), "哦豁，没听清楚，请再说一次");
        });
    }
  }
}

/**
 * @description: 创建微信机器人
 * @return {*} 机器人实例
 */
let wechatBot = new MyBot(workDayRemind, onMessage);
wechatBot.startBot();
global.wechatBot = wechatBot;

initChatGpt().then((res) => {
  chatApi = res;
});

module.exports = {
  wechatBot,
};

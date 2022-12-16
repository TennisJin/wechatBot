/**
 * WechatBot
 *  - https://github.com/gengchen528/wechatBot
 */
const schedule = require("node-schedule");
const { getPrice } = require("./axios/index");
const { MyBot } = require("./utils/bot");
const { rooms } = require("./config");
const completion = require("./utils/openai");

const workDayRemind = (botInstance) => {
  // 测试时间;
  // schedule.scheduleJob("00 * 9-22 * * 1-7", function () {
  // getPrice("hf_XAU").then(async (res) => {
  //   let contact = await botInstance.bot.Contact.find({ name: "吐丝" });
  //   botInstance.chatInRoom(botInstance.bot, rooms.ceshi, res, contact);
  // });
  // getPrice("hf_CL").then(async (res) => {
  //   let contact = await botInstance.bot.Contact.find({ name: "百万目标还差一百二十万" });
  //   botInstance.chatInRoom(botInstance.bot, rooms.wajue, res, contact);
  // });
  // });

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
  // 工作日8点到22点58分提示价格
  schedule.scheduleJob("00 58 8-21 * * 1-5", function () {
    getPrice("hf_XAU", 1668775141).then(async (res) => {
      let contact = await botInstance.bot.Contact.find({ name: "吐丝" });
      botInstance.chatInRoom(botInstance.bot, rooms.ceshi, res, contact);
    });
    getPrice("hf_CL").then(async (res) => {
      let contact = await botInstance.bot.Contact.find({
        name: "百万目标还差一百二十万",
      });
      botInstance.chatInRoom(botInstance.bot, rooms.wajue, res, contact);
    });
  });
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
    if (room) {
      // 如果是群消息
      const topic = await room.topic();
      console.log(
        `群名: ${topic} 发消息人: ${contact.name()} 内容: ${content}`
      );
      const mentionSelf = await msg.mentionSelf();
      let self = await msg.to();
      // 获取消息内容，拿到整个消息文本，去掉 @+名字并转为小写
      let sendText =
        content
          .replace("@" + self.name(), "")
          .trim()
          .toLowerCase() || "";
      // 外汇逻辑
      if (topic == rooms.wajue) {
        if (
          sendText.startsWith("hj") ||
          sendText.startsWith("黄金") ||
          sendText.startsWith("gold")
        ) {
          getPrice("hf_XAU").then((res) => {
            room.say(res);
          });
        } else if (
          sendText.startsWith("oil") ||
          sendText.startsWith("wti") ||
          sendText.startsWith("油")
        ) {
          getPrice("hf_CL").then((res) => {
            room.say(res);
          });
        }
      }
      // openai逻辑
      if (mentionSelf) {
        console.log(botInstance.config.room.openedRoom);
        // 群聊开启
        if (sendText == botInstance.config.room.startOpenAiKeyWord) {
          botInstance.config.room.openedRoom.includes(topic) ||
            botInstance.config.room.openedRoom.push(topic);
          console.log(botInstance.config.room.openedRoom);
          room.say("开启成功");
        } else if (sendText == botInstance.config.room.closeOpenAiKeyWord) {
          // 群聊关闭
          botInstance.config.room.openedRoom =
            botInstance.config.room.openedRoom.filter((item) => item !== topic);
          console.log(botInstance.config.room.openedRoom);
          room.say("关闭成功");
        } else {
          // 已开启
          if (botInstance.config.room.openedRoom.includes(topic)) {
            completion(sendText)
              .then((res) => {
                room.say(res.data.choices[0].text.trim());
              })
              .catch((e) => {
                console.log({ e });
                room.say("哦豁，出错了");
              });
          }
        }
      }
    } else {
      // 如果非群消息 目前只处理文字消息
      console.log(`发消息人: ${contact.name()} 消息内容: ${content}`);
      // 获取消息内容，拿到整个消息文本，去掉 @+名字并转为小写
      let sendText = content.trim().toLowerCase() || "";
      completion(sendText)
        .then((res) => {
          botInstance.findOne(contact.name(), res.data.choices[0].text.trim());
        })
        .catch((e) => {
          console.log({ e });
          botInstance.findOne(contact.name(), "哦豁，出错了");
        });
    }
  }
}

/**
 * @description: 创建微信机器人
 * @return {*} 机器人实例
 */
let myBot = new MyBot(workDayRemind, onMessage);
myBot.startBot();

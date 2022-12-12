/**
 * WechatBot
 *  - https://github.com/gengchen528/wechatBot
 */
const { WechatyBuilder, log } = require("wechaty");
const schedule = require("node-schedule");
const { getPrice } = require("./axios/index");
const { chatInRoom, findOne, showAllList } = require("./utils/bot");
const { rooms, people } = require("./config");

// 二维码生成
function onScan(qrcode, status) {
  require("qrcode-terminal").generate(qrcode); // 在console端显示二维码
  const qrcodeImageUrl = [
    "https://api.qrserver.com/v1/create-qr-code/?data=",
    encodeURIComponent(qrcode),
  ].join("");

  console.log(qrcodeImageUrl);
}

// 登录
async function onLogin(user) {
  console.log(`贴心小助理${user}登录了`);
  const date = new Date();
  console.log(`当前容器时间:${date}`);
  setTimeout(async () => {
    // chatInRoom(bot, rooms.ceshi, "hello");
    let contact = await bot.Contact.find({ name: "吐丝" });
    console.log({ contact });
    workDayRemind(bot);
  }, 2000);
}

// 登出
function onLogout(user) {
  console.log(`小助手${user} 已经登出`);
}

// 监听对话
async function onMessage(msg) {
  const contact = msg.talker(); // 发消息人
  const content = msg.text().trim(); // 消息内容
  const room = msg.room(); // 是否是群消息
  const alias = (await contact.alias()) || (await contact.name()); // 发消息人备注
  const isText = msg.type() === bot.Message.Type.Text;
  if (msg.self()) {
    return;
  }

  if (room && isText) {
    // 如果是群消息
    const topic = await room.topic();
    console.log(`群名: ${topic} 发消息人: ${contact.name()} 内容: ${content}`);
    const mentionSelf = await msg.mentionSelf();
    let self = await msg.to();
    // 获取消息内容，拿到整个消息文本，去掉 @+名字并转为小写
    let sendText = content
      .replace("@" + self.name(), "")
      .trim()
      .toLowerCase();
    if (mentionSelf || topic == rooms.wajue) {
      if (
        sendText.startsWith("hj") != -1 ||
        sendText.startsWith("黄金") != -1 ||
        sendText.startsWith("gold") != -1
      ) {
        getPrice("hf_XAU").then((res) => {
          room.say(res);
        });
      } else if (
        sendText.startsWith("oil") != -1 ||
        sendText.startsWith("wti") != -1 ||
        sendText.startsWith("油") != -1
      ) {
        getPrice("hf_CL").then((res) => {
          room.say(res);
        });
      }
    }
  } else if (isText) {
    // 如果非群消息 目前只处理文字消息
    console.log(`发消息人: ${alias} 消息内容: ${content}`);
  }
}

const bot = WechatyBuilder.build({
  name: "WechatDealRemind",
  puppet: "wechaty-puppet-wechat", // 如果有token，记得更换对应的puppet
  puppetOptions: {
    uos: true,
  },
});

bot.on("scan", onScan);
bot.on("login", onLogin);
bot.on("logout", onLogout);
bot.on("message", onMessage);
bot
  .start()
  .then(() => console.log("开始登陆微信"))
  .catch((e) => console.error(e));

const workDayRemind = (bot) => {
  // 测试时间;
  // schedule.scheduleJob("00 * 9-22 * * 1-7", function () {
  // getPrice("hf_XAU").then(async (res) => {
  //   let contact = await bot.Contact.find({ name: "吐丝" });
  //   chatInRoom(bot, rooms.ceshi, res, contact);
  // });
  // getPrice("hf_CL").then(async (res) => {
  //   let contact = await bot.Contact.find({ name: "百万目标还差一百二十万" });
  //   chatInRoom(bot, rooms.wajue, res, contact);
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
      let contact = await bot.Contact.find({ name: "吐丝" });
      chatInRoom(bot, rooms.ceshi, res, contact);
    });
    getPrice("hf_CL").then(async (res) => {
      let contact = await bot.Contact.find({ name: "百万目标还差一百二十万" });
      chatInRoom(bot, rooms.wajue, res, contact);
    });
  });
};

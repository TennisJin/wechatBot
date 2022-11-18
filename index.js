/**
 * WechatBot
 *  - https://github.com/gengchen528/wechatBot
 */
const { WechatyBuilder } = require("wechaty");
const schedule = require("./schedule/index");
const config = require("./config/index");
const untils = require("./utils/index");
const { getPrice } = require("./axios/index");

// 延时函数，防止检测出类似机器人行为操作
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
    // 获取消息内容，拿到整个消息文本，去掉 @+名字
    let sendText = content.replace("@" + self.name(), "").trim();
    if (mentionSelf) {
      console.log({ sendText });
      if (sendText.indexOf("hj") != -1 || sendText.indexOf("黄金") != -1) {
        getPrice("hf_XAU").then((res) => {
          room.say(res);
        });
      } else if (
        sendText.indexOf("oil") != -1 ||
        sendText.indexOf("wti") != -1
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
  name: "WechatEveryDay",
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

const { WechatyBuilder } = require("wechaty");

class MyBot {
  loginHook;
  messageHook;
  bot;
  config;
  constructor(loginHook, messageHook) {
    this.loginHook = loginHook;
    this.messageHook = messageHook;
    this.conversationuuid = {
      example: {
        conversationid: "",
        id: "",
      },
    };
    this.config = {
      room: {
        openedRoom: [],
        startOpenAiKeyWord: "开启openai",
        closeOpenAiKeyWord: "关闭openai",
      },
    };
    this.init();
  }

  init() {
    this.bot = WechatyBuilder.build({
      name: "WechatGold",
      puppet: "wechaty-puppet-wechat", // 如果有token，记得更换对应的puppet
      puppetOptions: {
        uos: true,
      },
    });
  }

  startBot() {
    this.bot.on("scan", this.onScan);
    this.bot.on("login", (user) => this.onLogin(user));
    this.bot.on("logout", this.onLogout);
    this.bot.on("message", (msg) => this.onMessage(msg));
    this.bot
      .start()
      .then(() => console.log("开始登陆微信"))
      .catch((e) => console.error(e));
  }

  // 二维码生成
  onScan(qrcode, status) {
    require("qrcode-terminal").generate(qrcode); // 在console端显示二维码
    const qrcodeImageUrl = [
      "https://api.qrserver.com/v1/create-qr-code/?data=",
      encodeURIComponent(qrcode),
    ].join("");

    console.log(qrcodeImageUrl);
  }

  onLogin(user) {
    console.log(`贴心小助理${user}登录了`);
    const date = new Date();
    console.log(`当前容器时间:${date}`);

    // this.showAllList();

    setTimeout(async () => {
      // let contact = await this.bot.Contact.find({ name: "吐丝" });
      // console.log({ contact });
      this.loginHook(this);
    }, 2000);
  }

  onLogout(user) {
    console.log(`小助手${user} 已经登出`);
  }

  onMessage(msg) {
    this.messageHook(this, msg);
  }

  async chatInRoom(
    name = "测试群聊",
    message = "hello",
    metionContact = undefined
  ) {
    try {
      console.log(name, message, metionContact);
      const room = await this.bot.Room.find({ topic: name });
      if (metionContact) {
        room.say(message, metionContact);
      } else {
        room.say(message);
      }
    } catch (e) {
      console.log({ e });
    }
  }

  async findOne(name = "吐丝", message = "你在干嘛") {
    // find by name:
    try {
      const filehelper = await this.bot.Contact.find(name);
      filehelper.say(message);
    } catch (e) {
      console.log({ e });
    }
  }

  /**
   * @description: 显示所有联系人信息
   * @return {*}
   */
  async showAllList() {
    console.log("showAllList");
    try {
      const contactList = await this.bot.Contact.findAll();
      console.info("Total number of contacts:", contactList.length);

      for (const contact of contactList) {
        console.info("Id:", contact.id);
        console.info("Name:", contact.name());

        // const type = contact.type();
        // console.info("Type:", Contact.Type[type]);
      }
    } catch (e) {
      console.log({ e });
    }
  }
}

module.exports = {
  MyBot,
};

// // 二维码生成
// function onScan(qrcode, status) {
//   require("qrcode-terminal").generate(qrcode); // 在console端显示二维码
//   const qrcodeImageUrl = [
//     "https://api.qrserver.com/v1/create-qr-code/?data=",
//     encodeURIComponent(qrcode),
//   ].join("");

//   console.log(qrcodeImageUrl);
// }

// // 登录
// async function onLogin(user, loginHook) {
//   console.log(`贴心小助理${user}登录了`);
//   console.log({ loginHook });
//   const date = new Date();
//   console.log(`当前容器时间:${date}`);
//   setTimeout(async () => {
//     // chatInRoom(bot, rooms.ceshi, "hello");
//     let contact = await bot.Contact.find({ name: "吐丝" });
//     console.log({ contact });
//     // workDayRemind(bot);
//   }, 2000);
// }

// // 登出
// function onLogout(user) {
//   console.log(`小助手${user} 已经登出`);
// }

// // 监听对话
// async function onMessage(msg) {
//   const contact = msg.talker(); // 发消息人
//   const content = msg.text().trim(); // 消息内容
//   const room = msg.room(); // 是否是群消息
//   const alias = (await contact.alias()) || (await contact.name()); // 发消息人备注
//   const isText = msg.type() === bot.Message.Type.Text;
//   if (msg.self()) {
//     return;
//   }

//   if (room && isText) {
//     // 如果是群消息
//     const topic = await room.topic();
//     console.log(`群名: ${topic} 发消息人: ${contact.name()} 内容: ${content}`);
//     const mentionSelf = await msg.mentionSelf();
//     let self = await msg.to();
//     // 获取消息内容，拿到整个消息文本，去掉 @+名字并转为小写
//     let sendText =
//       content
//         .replace("@" + self.name(), "")
//         .trim()
//         .toLowerCase() || "";
//     if (mentionSelf || topic == rooms.wajue) {
//       if (
//         sendText.startsWith("hj") ||
//         sendText.startsWith("黄金") ||
//         sendText.startsWith("gold")
//       ) {
//         getPrice("hf_XAU").then((res) => {
//           room.say(res);
//         });
//       } else if (
//         sendText.startsWith("oil") ||
//         sendText.startsWith("wti") ||
//         sendText.startsWith("油")
//       ) {
//         getPrice("hf_CL").then((res) => {
//           room.say(res);
//         });
//       }
//     }
//   } else if (isText) {
//     // 如果非群消息 目前只处理文字消息
//     console.log(`发消息人: ${alias} 消息内容: ${content}`);
//     // 获取消息内容，拿到整个消息文本，去掉 @+名字并转为小写
//     let sendText = content.trim().toLowerCase() || "";
//     completion(sendText)
//       .then((res) => {
//         findOne(bot, alias, res.data.choices[0].text);
//       })
//       .catch((e) => {
//         console.log({ e });
//         findOne(bot, alias, "哦豁，出错了");
//       });
//   }
// }

// /**
//  * @description: 获取所有信息
//  * @param {*} bot
//  * @return {*}
//  */
// const showAllList = async (bot) => {
//   const contactList = await bot.Contact.findAll();
//   // console.info('Total number of contacts:', contactList.length)

//   for (const contact of contactList) {
//     console.info("Id:", contact.id);
//     console.info("Name:", contact.name());

//     const type = contact.type();
//     // console.info("Type:", Contact.Type[type]);
//   }
// };

// // @机器人
// const mentionMessage = async (message) => {
//   const boo = await message.mentionSelf();
//   if (boo) {
//     const room = message.room();

//     console.log(room);
//     if (!room) {
//       throw new Error(
//         "Should never reach here: a mention message must in a room"
//       );
//     }

//     console.info(message.text());
//     // "@bot Hello"
//     console.info(await message.mentionList());
//     // [bot]
//     console.info(await message.mentionText());
//     // "Hello"

//     const talker = message.talker();
//     await room.say`${talker} ${message.text()}`;
//   }
// };

// /**
//  * @description: 查找某个人私聊
//  * @param {*} bot 机器人
//  * @param {*} name 聊天室名字
//  * @param {*} message 聊天消息
//  * @return {*}
//  */
// const findOne = async (bot, name = "吐丝", message = "你在干嘛") => {
//   // find by id:
//   const filehelper = await bot.Contact.find(name);
//   //  console.info('name:', filehelper)
//   filehelper.say(message);
// };

// /**
//  * @description: 群内聊
//  * @param {*} bot 机器人
//  * @param {*} name 聊天室名字
//  * @param {*} message 聊天消息
//  * @param {*} metionContact 提醒人员
//  * @return {*}
//  */
// const chatInRoom = async (
//   bot,
//   name = "测试群聊",
//   message = "hello",
//   metionContact = {}
// ) => {
//   try {
//     const room = await bot.Room.find({ topic: name });
//     room.say(message, metionContact);
//   } catch (e) {
//     console.log({ e });
//   }
// };

// const bot = WechatyBuilder.build({
//   name: "WechatDealRemind",
//   puppet: "wechaty-puppet-wechat", // 如果有token，记得更换对应的puppet
//   puppetOptions: {
//     uos: true,
//   },
// });

// const startBot = () => {
//   bot.on("scan", onScan);
//   bot.on("login", (user) => onLogin(user));
//   bot.on("logout", (user) => onLogout(user));
//   bot.on("message", (msg) => onMessage(msg));
//   bot
//     .start()
//     .then(() => console.log("开始登陆微信"))
//     .catch((e) => console.error(e));
// };

/**
 * @description: 获取所有信息
 * @param {*} bot
 * @return {*}
 */
const showAllList = async (bot) => {
  const contactList = await bot.Contact.findAll();
  // console.info('Total number of contacts:', contactList.length)

  for (const contact of contactList) {
    console.info("Id:", contact.id);
    console.info("Name:", contact.name());

    const type = contact.type();
    // console.info("Type:", Contact.Type[type]);
  }
};

// @机器人
const mentionMessage = async (message) => {
  const boo = await message.mentionSelf();
  if (boo) {
    const room = message.room();

    console.log(room);
    if (!room) {
      throw new Error(
        "Should never reach here: a mention message must in a room"
      );
    }

    console.info(message.text());
    // "@bot Hello"
    console.info(await message.mentionList());
    // [bot]
    console.info(await message.mentionText());
    // "Hello"

    const talker = message.talker();
    await room.say`${talker} ${message.text()}`;
  }
};

/**
 * @description: 查找某个人私聊
 * @param {*} bot 机器人
 * @param {*} name 聊天室名字
 * @param {*} message 聊天消息
 * @return {*}
 */
const findOne = async (bot, name = "吐丝", message = "你在干嘛") => {
  // find by id:
  const filehelper = await bot.Contact.find(name);
  //  console.info('name:', filehelper)
  filehelper.say(message);
};

/**
 * @description: 群内聊
 * @param {*} bot 机器人
 * @param {*} name 聊天室名字
 * @param {*} message 聊天消息
 * @param {*} metionContact 提醒人员
 * @return {*}
 */
const chatInRoom = async (
  bot,
  name = "测试群聊",
  message = "hello",
  metionContact = {}
) => {
  try {
    const room = await bot.Room.find({ topic: name });
    room.say(message, metionContact);
  } catch (e) {
    console.log({ e });
  }
};

module.exports = {
  showAllList,
  mentionMessage,
  findOne,
  chatInRoom,
};

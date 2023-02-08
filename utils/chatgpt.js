async function initChatGpt() {
  const { ChatGPTAPI } = await import("chatgpt");

  return new ChatGPTAPI({ apiKey: process.env.OPENAI_API_KEY });
}

/**
 * @description:
 * @param {*} chatApi chatApi实例
 * @param {*} message 消息
 * @param {*} conversationId 对话id
 * @param {*} id 上一次对话id
 * @return {*}
 */
async function conversation(chatApi, message, conversationId, id) {
  console.log({ chatApi });
  return chatApi.sendMessage(message, {
    conversationId: conversationId,
    parentMessageId: id,
  });
}
module.exports = { initChatGpt, conversation };

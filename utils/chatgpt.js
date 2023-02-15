import { ChatGPTAPI } from "chatgpt";

const chatApi = new ChatGPTAPI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * @description:
 * @param {*} message 消息
 * @param {*} conversationId 对话id
 * @param {*} id 上一次对话id
 * @return {*}
 */
async function conversation(message, conversationId, id) {
  return chatApi.sendMessage(message, {
    conversationId: conversationId,
    parentMessageId: id,
  });
}
export { conversation };

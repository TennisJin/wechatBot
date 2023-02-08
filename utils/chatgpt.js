let api;

async function initChatGpt() {
  const { ChatGPTAPI } = await import("chatgpt");

  api = new ChatGPTAPI({ apiKey: process.env.OPENAI_API_KEY });
}

async function conversation(message, conversationId, id) {
  return api.sendMessage(message, {
    conversationId: conversationId,
    parentMessageId: id,
  });
}
module.exports = { initChatGpt, conversation };

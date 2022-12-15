const { openaikey } = require("../config");
const { Configuration, OpenAIApi } = require("openai");

/**
 * @description: 获取openai对话结果
 * @param {*} prompt 关键字
 * @param {*} max_tokens 最大的令牌数量，可以理解为返回的字符数量，大多数内容 2048 内，当然 max_tokens 返回接口的速度越慢。
 * @param {*} temperature 0-1 之间，温度参数表示生成文本中的随机性或不可预测性程度。较高的温度值将产生更具创造性和多样性的输出，而较低的温度值会产生更可预测和重复的文本。
 * @param {*} model 模型
 * @return {Promise} res.data.choices[0].text
 */
const completion = (
  prompt = "hello",
  max_tokens = 255,
  temperature = 0.5,
  model = "text-davinci-003"
) => {
  const randomKey = Object.values(openaikey)[Math.floor(Math.random() * 10)];
  console.log(randomKey);
  const configuration = new Configuration({
    apiKey: randomKey,
  });
  const openai = new OpenAIApi(configuration);
  return openai.createCompletion(
    {
      model: model,
      prompt: prompt, // 自动完成，它跟官网的回话方式一致
      max_tokens: max_tokens,
      temperature: temperature,
    },
    {
      timeout: 10000,
    }
  );
};

module.exports = completion;

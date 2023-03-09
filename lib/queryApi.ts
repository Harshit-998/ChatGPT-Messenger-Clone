import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  // Make request to chatgpt for whatever the user types in
  // info that we are passing and it'll go get that for us

  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `ChatGPT was unable to find answer for that! (Error: ${err.message})`
    );
  return res;
};

export default query;

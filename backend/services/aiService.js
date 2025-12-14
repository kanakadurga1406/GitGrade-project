import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const generateAISummary = async (scoreDetails, repoData) => {
  const prompt = `
You are an AI mentor evaluating a GitHub repository.

Repository:
Name: ${repoData.name}
Language: ${repoData.language}
Commits: ${repoData.commitsCount}
Score: ${scoreDetails.totalScore}/100

Respond STRICTLY in JSON:
{
  "summary": "short evaluation",
  "roadmap": [
    "step 1",
    "step 2",
    "step 3"
  ]
}
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }]
  });

  const text = response.choices[0].message.content;
  return JSON.parse(text);
};

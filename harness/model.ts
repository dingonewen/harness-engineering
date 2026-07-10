import { createOpenAI } from "@ai-sdk/openai";

// We use createOpenAI (not @ai-sdk/deepseek) because:
//   - @ai-sdk/deepseek@3.0.7 targets provider spec v4, which requires ai@7
//   - This course uses ai@6 (provider spec v3), so the two are incompatible
//   - createOpenAI + custom baseURL is the officially supported way to use
//     any OpenAI-compatible provider (DeepSeek, Groq, Together, Ollama, etc.)
//   - Functionally identical: same HTTP requests, same model responses
const deepseek = createOpenAI({
  baseURL: "https://api.deepseek.com/v1",
  apiKey: process.env.DEEPSEEK_API_KEY,
});

export const model = deepseek("deepseek-v4-flash");


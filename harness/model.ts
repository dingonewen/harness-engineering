import { deepseek } from "@ai-sdk/deepseek";

// The one place the model is configured.
// @ai-sdk/deepseek v2.x (compatible with ai@6). v3.x would need ai@7.
// Reads DEEPSEEK_API_KEY from the environment at request time.
export const model = deepseek("deepseek-chat");

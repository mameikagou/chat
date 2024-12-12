import OpenAI from "openai";
import { OPENAI_BASE_URL } from "@/app/constant";
// 初始化
function initializeOpenAI(): OpenAI {
    return new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
        baseURL: OPENAI_BASE_URL,
    });
}

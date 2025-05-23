import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const runtime = "edge";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(request: Request) {
  const prompt =
    "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me/NGL, and should be suitable for a diverse audience. Focus on funny, sarcastic, and bluntly honest messages that engage people emotionally. For example, your output should be structured like this: What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?. Ensure the questions are intriguing, slightly provocative, foster curiosity, and lean towards a playfully edgy conversational environment. Also each message should be no more than 50 characters.";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    return Response.json({
      success: true,
      message: response.text,
    });
  } catch (error) {
    console.log("Error while getting recommended messages");
    return Response.json({
      success: false,
      message: "AI model kaam ni kar raha bro",
    });
  }
}

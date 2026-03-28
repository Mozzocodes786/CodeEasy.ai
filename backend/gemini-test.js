import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyD6MC4Wm8mSS_Q5gBeIrQZ1baYbaLR29KY",  // 🔴 keep quotes
});

async function test() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-1.5-pro",
      contents: "Say hello",
    });

    console.log("SUCCESS:");
    console.log(response.text);
  } catch (err) {
    console.error("ERROR:");
    console.error(err);
  }
}

test();

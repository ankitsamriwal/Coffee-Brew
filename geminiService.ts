
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDailyCoffeeWisdom = async () => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide a "Daily Dose of Coffee Wisdom". This should be a short, profound, or interesting historical fact, scientific tidbit, or philosophical quote about coffee. Return it as JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            quote: { type: Type.STRING },
            authorOrSource: { type: Type.STRING, description: "Who said it, or the historical source/context" }
          },
          required: ["quote", "authorOrSource"]
        }
      }
    });
    
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return { 
      quote: "Coffee represents a victory of the human spirit over the fatigue of the body.", 
      authorOrSource: "Unknown" 
    };
  }
};

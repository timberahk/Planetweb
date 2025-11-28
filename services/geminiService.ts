import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const analyzeIngredients = async (ingredientList: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    // Strict system instruction to act as an ingredient analyzer
    const systemInstruction = `
      You are an expert Cosmetic Chemist specializing in ingredient safety and comedogenicity ratings.
      
      Task: Analyze the provided list of shampoo/conditioner ingredients.
      
      Goal: Determine if the product contains ingredients known to be comedogenic (pore-clogging).
      
      Output Format (Use Traditional Chinese):
      1. **風險級別 (Risk Level):** [安全 / 中等風險 / 潛在致痘風險]
      2. **關注成分 (Potential Triggers):** List specific ingredients that are known to clog pores (e.g., Sodium Lauryl Sulfate, Coconut Oil, Cocoa Butter, Isopropyl Myristate, Silicones that are heavy). If none, say "未發現明顯致痘成分".
      3. **成分分析 (Analysis):** A brief explanation (max 2 sentences) on why this formula might block pores based on literature. Do NOT make medical claims or diagnoses.
      4. **NE: PLANET 比較:** Briefly mention how NE: PLANET avoids these specific types of ingredients (if risk is found).

      Keep the tone objective, scientific, and based on chemical properties, not medical advice.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: `Please analyze this ingredient list: ${ingredientList}`,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.3, // Lower temperature for more factual/consistent analysis
      }
    });

    return response.text || "無法分析成分，請確保輸入正確的成分列表。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "連線錯誤，請檢查網絡或稍後再試。";
  }
};
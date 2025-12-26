import { GoogleGenAI } from "@google/genai";

export const analyzeIngredients = async (ingredientList: string): Promise<string> => {
  // Use process.env.API_KEY as per coding guidelines.
  // Assume API_KEY is provided via environment variable.
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.error("CRITICAL ERROR: API Key is missing. Please check your .env file or environment settings.");
    return `<div class="p-4 bg-red-50 text-red-600 rounded-lg border border-red-100 text-sm font-bold">系統設定錯誤：找不到 API Key (API_KEY Missing)。請確保環境變數已設定 API_KEY。</div>`;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: apiKey });
    const model = 'gemini-2.5-flash';
    
    // Updated instruction to output raw HTML with Tailwind classes
    const systemInstruction = `
      You are an expert Cosmetic Chemist and UI Designer.
      
      Task: Analyze the provided ingredient list for comedogenic (pore-clogging) risks.
      
      CRITICAL OUTPUT RULE: 
      - Do NOT output Markdown (no \`\`\`html or \`\`\`). 
      - Output ONLY a raw HTML string (a single <div> wrapper).
      - Use Tailwind CSS classes for styling.
      - Use Traditional Chinese (繁體中文).

      Design Template Logic:
      1. **Header**: Show a Risk Level Badge. 
         - If safe: <span class="bg-green-100 text-green-700 ...">安全 (Safe)</span>
         - If moderate: <span class="bg-yellow-100 text-yellow-700 ...">中等風險 (Moderate)</span>
         - If high risk: <span class="bg-red-100 text-red-700 ...">高致痘風險 (High Risk)</span>
      
      2. **Triggers Section**: List specific bad ingredients as rounded tags.
         - <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Ingredient Name</span>

      3. **Analysis Section**: Brief explanation (max 2 sentences).

      4. **Comparison Section**: A highlighted box comparing with NE: PLANET.

      Example Output Structure (Strictly follow this HTML structure):
      <div class="space-y-6">
        <div class="flex items-center justify-between border-b border-gray-100 pb-4">
          <span class="text-xs font-bold text-gray-400 tracking-widest uppercase">Risk Assessment</span>
          [BADGE_HERE]
        </div>
        
        <div>
          <h4 class="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
            ⚠️ 潛在致痘成分 (Potential Triggers)
          </h4>
          <div class="flex flex-wrap gap-2">
            [TAGS_HERE (e.g. <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs border border-gray-200">Sodium Lauryl Sulfate</span>)]
            (If none, display <span class="text-sm text-gray-400 italic">未發現明顯致痘成分</span>)
          </div>
        </div>

        <div class="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <h4 class="text-xs font-bold text-gray-500 uppercase mb-1">Expert Analysis</h4>
          <p class="text-sm text-gray-700 leading-relaxed">[ANALYSIS_TEXT_HERE]</p>
        </div>

        <div class="bg-blue-50 p-4 rounded-lg border border-blue-100 flex gap-3">
          <div class="shrink-0 pt-1">
            <div class="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">✓</div>
          </div>
          <div>
            <h4 class="text-sm font-bold text-blue-900 mb-1">NE: PLANET 比較</h4>
            <p class="text-xs text-blue-700 leading-relaxed">
              我們的配方完全剔除此類成分，改用親水性保濕因子，確保毛孔零負擔。
            </p>
          </div>
        </div>
      </div>
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: `Please analyze this ingredient list and output strictly HTML: ${ingredientList}`,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.2, // Low temp for consistent formatting
      }
    });

    const text = response.text || "";
    // Cleanup markdown code blocks if the AI accidentally adds them
    return text.replace(/```html/g, '').replace(/```/g, '').trim();

  } catch (error) {
    console.error("Gemini API Connection Error:", error);
    return `<div class="p-4 bg-red-50 text-red-600 rounded-lg border border-red-100 text-sm">連線錯誤，請檢查 API Key 或網絡設定。</div>`;
  }
};
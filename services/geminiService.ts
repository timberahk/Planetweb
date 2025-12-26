
/**
 * NE: PLANET Local Medical Ingredient Database
 * Based on Dr. James E. Fulton's Comedogenic Scale & AAD Guidelines
 */

interface IngredientData {
  level: number; // 0-5
  category: string;
  reason_zh: string;
  reason_en: string;
}

const COMEDOGENIC_DB: Record<string, IngredientData> = {
  "isopropyl myristate": { level: 5, category: "Synthetic Ester", reason_zh: "極強致痘性，常縮寫為 IPM，能滲透毛囊並造成阻塞。", reason_en: "Extremely high comedogenicity. Can penetrate follicles and cause significant blockages." },
  "isopropyl palmitate": { level: 4, category: "Synthetic Ester", reason_zh: "常見於護髮素，對易長痘肌膚極度危險。", reason_en: "Commonly found in conditioners; highly dangerous for acne-prone skin." },
  "coconut oil": { level: 4, category: "Natural Oil", reason_zh: "封閉性極強，容易在髮際線形成閉鎖性粉刺。", reason_en: "Highly occlusive; prone to causing closed comedones along the hairline." },
  "algae extract": { level: 5, category: "Extract", reason_zh: "含高濃度碘，會刺激毛囊壁並引發炎症。", reason_en: "High iodine content can irritate follicle walls and trigger inflammation." },
  "sodium lauryl sulfate": { level: 3, category: "Surfactant", reason_zh: "強烈去油同時破壞屏障，引發炎症及痤瘡。", reason_en: "Harsh surfactant that compromises skin barrier, potentially triggering acne." },
  "sls": { level: 3, category: "Surfactant", reason_zh: "強烈去油同時破壞屏障，引發炎症。", reason_en: "Harsh surfactant that compromises skin barrier." },
  "laureth 4": { level: 5, category: "Emulsifier", reason_zh: "極高致痘等級，常見於洗髮水增稠及乳化。", reason_en: "High comedogenicity level; commonly used for thickening and emulsifying." },
  "myristyl myristate": { level: 5, category: "Wax", reason_zh: "極度厚重，幾乎百分之百會引發粉刺。", reason_en: "Extremely heavy wax; almost guaranteed to cause comedones." },
  "sodium chloride": { level: 5, category: "Salt", reason_zh: "食鹽。在特定洗髮水配方中會大幅提升致痘機率。", reason_en: "Common salt. In certain formulations, it significantly increases acne risk." },
  "dimethicone": { level: 1, category: "Silicone", reason_zh: "雖本身不致痘，但可能形成殘留膜，封閉毛孔。", reason_en: "Non-comedogenic itself but can form a film that traps other triggers." }
};

export const analyzeIngredients = async (ingredientList: string, lang: 'zh' | 'en' = 'zh'): Promise<string> => {
  await new Promise(resolve => setTimeout(resolve, 600));

  const input = ingredientList.toLowerCase();
  const foundIngredients: { name: string; data: IngredientData }[] = [];
  let maxRisk = 0;

  Object.entries(COMEDOGENIC_DB).forEach(([name, data]) => {
    if (input.includes(name)) {
      foundIngredients.push({ name: name.toUpperCase(), data });
      if (data.level > maxRisk) maxRisk = data.level;
    }
  });

  if (foundIngredients.length === 0) {
    return lang === 'zh' ? `
      <div class="space-y-6">
        <div class="bg-green-50 p-6 rounded-2xl border border-green-100">
          <h4 class="text-green-800 font-bold mb-2">✅ 未發現已知致痘成分</h4>
          <p class="text-green-700 text-sm">這份成分表在我們的本地數據庫中表現優異。適合易長痘肌膚及背部肌膚使用。</p>
        </div>
      </div>` : `
      <div class="space-y-6">
        <div class="bg-green-50 p-6 rounded-2xl border border-green-100">
          <h4 class="text-green-800 font-bold mb-2">✅ No Triggers Found</h4>
          <p class="text-green-700 text-sm">This ingredient list performs excellently in our local database. Safe for acne-prone skin.</p>
        </div>
      </div>`;
  }

  const isHighRisk = maxRisk >= 4;
  const riskLabel = lang === 'zh' ? (isHighRisk ? "高致痘風險" : "中等風險") : (isHighRisk ? "High Risk" : "Moderate Risk");
  const riskColor = isHighRisk ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700";

  return `
    <div class="space-y-6">
      <div class="flex items-center justify-between border-b border-gray-100 pb-4">
        <span class="${riskColor} px-3 py-1 rounded-full text-xs font-bold">${riskLabel}</span>
      </div>
      <div>
        <div class="flex flex-wrap gap-2">
          ${foundIngredients.map(item => `
            <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs border border-gray-200" title="${lang === 'zh' ? item.data.reason_zh : item.data.reason_en}">
              ${item.name} (Lvl ${item.data.level})
            </span>
          `).join('')}
        </div>
      </div>
      <p class="text-sm text-gray-700">
        ${lang === 'zh' ? `檢測到 <strong>${foundIngredients[0].name}</strong> 等成分，建議長痘期間暫停使用。` : `Detected <strong>${foundIngredients[0].name}</strong>. We recommend avoiding this during active breakouts.`}
      </p>
    </div>`;
};

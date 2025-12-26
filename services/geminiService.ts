/**
 * NE: PLANET 本地醫學成分數據庫
 * 數據來源：基於 James E. Fulton 博士致痘量表 (Comedogenic Scale) 及 AAD 建議
 */

interface IngredientData {
  level: number; // 0-5 (致痘等級)
  category: string;
  reason: string;
}

// 離線數據庫：涵蓋洗頭水、護髮素中最常見的致痘與刺激成分
const COMEDOGENIC_DB: Record<string, IngredientData> = {
  // 高風險 (等級 4-5)
  "isopropyl myristate": { level: 5, category: "合成酯", reason: "極強致痘性，常縮寫為 IPM，能滲透毛囊並造成阻塞。" },
  "isopropyl palmitate": { level: 4, category: "合成酯", reason: "常見於護髮素，對易爆痘肌膚極度危險。" },
  "coconut oil": { level: 4, category: "天然油分", reason: "封閉性極強，容易在髮際線形成閉口粉刺。" },
  "cocos nucifera oil": { level: 4, category: "天然油分", reason: "即椰子油。封閉性極強，易導致毛孔堵塞。" },
  "cocoa butter": { level: 4, category: "天然油分", reason: "固體油脂，極易堵塞毛孔。" },
  "algae extract": { level: 5, category: "提取物", reason: "含有高濃度的碘，會刺激毛囊壁並引發炎症。" },
  "sodium lauryl sulfate": { level: 3, category: "表面活性劑", reason: "強烈去油同時破壞屏障，引發代償性出油及毛囊炎。" },
  "sls": { level: 3, category: "表面活性劑", reason: "強烈去油同時破壞屏障，引發炎症。" },
  "laureth 4": { level: 5, category: "乳化劑", reason: "極高致痘等級，常見於洗頭水增稠及乳化。" },
  "myristyl myristate": { level: 5, category: "蠟質", reason: "極度厚重，幾乎百分之百會引發閉口粉刺。" },
  "stearic acid": { level: 3, category: "脂肪酸", reason: "在中等濃度下可能引發毛孔堵塞。" },
  "wheat germ oil": { level: 5, category: "天然油分", reason: "致痘率極高，不適合接觸面部皮膚。" },
  "lanolin": { level: 4, category: "動物油脂", reason: "羊毛脂酸及其衍生物對毛孔有強烈負擔。" },
  "butyl stearate": { level: 3, category: "油脂", reason: "常隱藏在賦形劑中，具有潛在致痘風險。" },
  "sodium chloride": { level: 5, category: "鹽類", reason: "食鹽。在特定洗髮水配方中作為增稠劑，會大幅提升致痘機率。" },
  "ceteareth 20": { level: 4, category: "乳化劑", reason: "與脂肪醇混合時，致痘性會顯著增加。" },
  "lauric acid": { level: 4, category: "脂肪酸", reason: "具有較強刺激性且易堵塞毛孔。" },
  "palm oil": { level: 4, category: "油脂", reason: "棕櫚油。含有大量飽和脂肪酸，易塞毛孔。" },
  
  // 中風險 (等級 2-3)
  "cetearyl alcohol": { level: 2, category: "脂肪醇", reason: "單獨使用較安全，但與乳化劑混合後具致痘風險。" },
  "dimethicone": { level: 1, category: "矽靈", reason: "雖然本身不致痘，但在洗頭水中可能形成殘留膜，封閉毛孔排出物。" },
  "mineral oil": { level: 0, category: "礦物油", reason: "雖然不直接致痘，但純度不夠或殘留會阻礙其他成分排出。" },
  "peg 100 stearate": { level: 1, category: "乳化劑", reason: "輕微風險，建議暗瘡肌留意。" }
};

export const analyzeIngredients = async (ingredientList: string): Promise<string> => {
  // 模擬異步加載以保持 UI 的專業感
  await new Promise(resolve => setTimeout(resolve, 600));

  const input = ingredientList.toLowerCase();
  const foundIngredients: { name: string; data: IngredientData }[] = [];
  let maxRisk = 0;

  // 遍歷數據庫進行關鍵字匹配
  Object.entries(COMEDOGENIC_DB).forEach(([name, data]) => {
    // 使用正則或簡單包含檢查
    if (input.includes(name)) {
      foundIngredients.push({ name: name.toUpperCase(), data });
      if (data.level > maxRisk) maxRisk = data.level;
    }
  });

  if (foundIngredients.length === 0) {
    return `
      <div class="space-y-6">
        <div class="flex items-center justify-between border-b border-gray-100 pb-4">
          <span class="text-xs font-bold text-gray-400 tracking-widest uppercase">Risk Assessment</span>
          <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">極其安全 (Safe)</span>
        </div>
        <div class="bg-green-50 p-6 rounded-2xl border border-green-100">
          <h4 class="text-green-800 font-bold mb-2">✅ 未發現已知致痘成分</h4>
          <p class="text-green-700 text-sm leading-relaxed">這份成分表在我們的離線醫學數據庫中表現優異。適合暗瘡肌、髮際線敏感及背痘體質使用。</p>
        </div>
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-100 flex gap-3">
          <div class="shrink-0 pt-1"><div class="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">✓</div></div>
          <div>
            <h4 class="text-sm font-bold text-blue-900 mb-1">NE: PLANET 的標準</h4>
            <p class="text-xs text-blue-700 leading-relaxed">我們的產品均通過此嚴格篩選，確保不含任何等級 2 或以上的成分，同時保持髮絲水潤。</p>
          </div>
        </div>
      </div>
    `;
  }

  // 根據最高風險值決定標籤樣式
  const isHighRisk = maxRisk >= 4;
  const isModerate = maxRisk >= 2 && maxRisk < 4;
  
  const riskLabel = isHighRisk ? "高致痘風險 (High Risk)" : isModerate ? "中等風險 (Moderate)" : "低風險 (Low Risk)";
  const riskColorClass = isHighRisk ? "bg-red-100 text-red-700" : isModerate ? "bg-yellow-100 text-yellow-700" : "bg-blue-100 text-blue-700";

  return `
    <div class="space-y-6">
      <div class="flex items-center justify-between border-b border-gray-100 pb-4">
        <span class="text-xs font-bold text-gray-400 tracking-widest uppercase">Risk Assessment</span>
        <span class="${riskColorClass} px-3 py-1 rounded-full text-xs font-bold">${riskLabel}</span>
      </div>
      
      <div>
        <h4 class="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
          ⚠️ 檢測到 ${foundIngredients.length} 個潛在致痘因子
        </h4>
        <div class="flex flex-wrap gap-2">
          ${foundIngredients.map(item => `
            <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs border border-gray-200 cursor-help" title="${item.data.reason}">
              ${item.name} (Lvl ${item.data.level})
            </span>
          `).join('')}
        </div>
      </div>

      <div class="bg-gray-50 p-5 rounded-xl border border-gray-100">
        <h4 class="text-[10px] font-bold text-gray-500 uppercase mb-2 tracking-widest">離線專家分析 (Offline Analysis)</h4>
        <p class="text-sm text-gray-700 leading-relaxed">
          檢測到 <strong>${foundIngredients[0].name}</strong> 等成分，其致痘等級高達 ${foundIngredients[0].data.level}/5。
          這類成分在沖水時容易殘留在額頭與背部，形成物理性阻塞。${isHighRisk ? '強烈建議暗瘡肌膚避開此產品。' : '建議使用後加強面部邊緣的二次清潔。'}
        </p>
      </div>

      <div class="bg-blue-50 p-4 rounded-lg border border-blue-100 flex gap-3">
        <div class="shrink-0 pt-1"><div class="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">✓</div></div>
        <div>
          <h4 class="text-sm font-bold text-blue-900 mb-1">NE: PLANET 替代方案</h4>
          <p class="text-xs text-blue-700 leading-relaxed">我們的配方完全剔除此類成分，改用小分子親水性保濕因子，確保毛孔零負擔，同時解決乾燥問題。</p>
        </div>
      </div>
    </div>
  `;
};

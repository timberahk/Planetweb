
import React, { createContext, useContext, useState } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

const translations: Record<Language, Record<string, any>> = {
  zh: {
    // Nav
    nav_philosophy: "髮際與背痘之謎",
    nav_education: "皮膚百科",
    nav_products: "洗護系列",
    nav_advisor: "成分檢測",
    
    // Hero
    hero_badge: "香港工作室研製 · 參照皮膚科文獻標準",
    hero_title: "額頭粉刺、面部長痘？\n兇手可能是洗髮水。",
    hero_desc: "洗髮水流過的地方，就是痤瘡的隱形兇手。很多人以為只有背部痤瘡與洗髮有關，其實額頭粉刺、鬢角與臉頰的反覆困擾，往往源於洗髮水殘留。",
    hero_cta: "更換您的洗護產品",
    hero_focus: "專注皮膚健康",
    hero_areas: "面部 · 髮際線 · 背部",

    // Products
    prod_title: "洗護系列",
    prod_subtitle: "The Collection",
    prod_featured_bundle: "精選全效套裝",
    prod_bundle_name: "NE: PLANET 完整皮膚管理套裝",
    prod_bundle_desc: "包含洗髮水、護髮素及修護髮油。全方位剔除致痘源，重啟肌膚健康。這是針對易長痘肌膚的最完整解決方案。",
    prod_buy_now: "立即購買",
    prod_bundle_price: "HK$ 370",
    prod_wash_desc: "溫和清潔，不含 SLS/SLES。泡沫細緻，有效帶走油脂而不破壞頭皮屏障。",
    prod_wash_feat: ["0% 致痘成分", "100% 無油無味", "pH 5.5 弱酸性"],
    prod_smooth_desc: "革命性無油配方。提供充足順滑度，卻不會在背部或面部殘留致痘薄膜。",
    prod_smooth_feat: ["不含礦物油/植物油", "無香料配方", "易沖洗不殘留"],
    prod_essence_desc: "免沖洗修護。針對髮尾乾燥，瞬間吸收。即使觸碰到臉頰也不會引發粉刺。",
    prod_essence_feat: ["修復毛躁", "完全水基配方", "零油零香"],

    // Problem & Solution
    prob_badge: "隱形致痘源",
    prob_title: "為什麼面部、額頭、背部\n總是反覆長痘？",
    prob_desc: "這不單是荷爾蒙問題，亦不是您的護膚品選擇錯誤。而是您每天使用的洗髮水，正在這三個部位形成「隱形薄膜」。",
    prob_path_title: "洗髮水的流動路徑 (Runoff Path)",
    prob_path_1_title: "第一受災區：額頭與太陽穴",
    prob_path_1_desc: "沖洗時，泡沫首先順著髮際線流經額頭、太陽穴、臉頰兩側。這是許多人「無故生長顆粒」的盲點。",
    prob_path_2_title: "難以察覺的殘留膜",
    prob_path_2_desc: "市售洗髮水為了「順滑感」，添加了高附著性的油分與聚合物。它們會像保鮮膜一樣吸附在皮膚上，極難沖淨。",
    prob_path_3_title: "毛孔長期窒息",
    prob_path_3_desc: "這層看不見的薄膜會封鎖毛孔，即使使用潔面乳也未必能完全清除，導致閉口粉刺反覆生長。",
    sol_title: "NE: PLANET 的解決方案",
    sol_subtitle: "針對易長痘肌膚的精準配方。",
    sol_1_title: "親水性零殘留配方",
    sol_1_desc: "我們選用小分子、水溶性的保濕成分。泡沫流經面部時能隨水完全沖走，還原毛孔呼吸。",
    sol_2_title: "香港工作室研製",
    sol_2_desc: "針對香港濕熱氣候調整。我們不盲從歐美產品的「重油」標準，只給頭髮需要的，不給皮膚負擔。",
    sol_3_title: "護膚級的洗護體驗",
    sol_3_desc: "告別髮際線粉刺與虛假暗瘡。這不只是洗髮，而是每天兩次的頭皮與面部護理。",

    // Results
    res_badge: "實證效果",
    res_title: "28 天的肌膚轉變",
    res_subtitle: "真實用家記錄。無修圖。",
    res_1_title: "背部肌膚明顯平滑",
    res_1_desc: "「換了 NE: WASH 之後，背部的粉刺真的減少了許多。以前使用連鎖品牌的洗髮水，沖洗後總是有層油感，現在終於感到清爽乾淨。」",
    res_2_title: "額頭粉刺消失，髮際線平滑",
    res_2_desc: "「一直以為額頭長痘是因為卸妝不徹底，後來才發現是護髮素阻塞毛孔。NE: SMOOTH 足夠滋潤但完全不會悶住皮膚。」",

    // Education Teaser
    edu_badge: "皮膚科學",
    edu_title: "「為什麼護膚品換了再換，\n粉刺卻依然持續出現？」",
    edu_desc: "許多人忽略了洗髮水流經面部的影響。即使您不是暗瘡肌，長期使用市售重油產品，也會導致皮膚持續出現閉口粉刺。",
    edu_cta: "閱讀完整教學：破解暗瘡迷思",
    edu_list_1: "洗髮水如何導致額頭長痘？",
    edu_list_2: "拆解「隱形致痘源」",
    edu_list_3: "自救指南：如何挑選產品",

    // Advisor
    adv_badge: "離線檢測引擎",
    adv_title: "您的日常用品安全嗎？",
    adv_desc: "我們將皮膚科學文獻內置於此。無需聯網，複製任何產品成分表，系統將即時比對數據庫進行風險分析。",
    adv_placeholder: "例如：Water, Sodium Lauryl Sulfate, Isopropyl Myristate...",
    adv_btn: "本地掃描分析",
    adv_report_title: "分析報告",
    adv_report_badge: "本地診斷",
    adv_cta: "查看 NE: PLANET 安全系列",

    // FAQ
    faq_title: "常見問題",
    faq_q1: "剔除致痘成分後，洗髮水會不會很乾澀？",
    faq_a1: "不會。我們採用新一代氨基酸界面活性劑與維他命B5等水溶性保濕因子，取代厚重的封閉性油脂。洗感清爽水潤，不會有「洗不乾淨」的假滑感。",
    faq_q2: "我有漂染頭髮，使用此系列會導致脫色嗎？",
    faq_a2: "NE: PLANET 全系列均為 pH 5.5 弱酸性配方，能有效閉合毛鱗片。不含強力硫酸鹽 (SLS/SLES)，比一般洗髮水更具護色效果。",
    faq_q3: "為什麼洗髮水會導致背部暗瘡？",
    faq_a3: "沖洗時，泡沫會吸附在皮膚上。傳統產品含有「陽離子聚合物」或「礦物油」，易形成薄膜堵塞毛囊。NE: WASH 確保沖洗後不殘留致痘物質。",
    faq_q4: "這系列有香味嗎？",
    faq_a4: "全系列均為無香料 (Fragrance-free)。香料與精油是常見的致痘源，因此我們堅持「零香料、零精油、零油分」，給予皮膚最純粹的護理。",

    // Footer
    footer_desc: "針對不致痘生活的研發工作室。香港製造。停止致痘源，重啟肌膚健康。",
    footer_series: "目前系列",
    footer_future: "未來研究項目",
    footer_stay_updated: "獲取最新資訊",
    footer_success: "已成功訂閱，謝謝！"
  },
  en: {
    // Nav
    nav_philosophy: "The Acne Mystery",
    nav_education: "Skin Wiki",
    nav_products: "The Collection",
    nav_advisor: "Ingredient Lab",

    // Hero
    hero_badge: "Formulated in HK · Medical Grade Standards",
    hero_title: "Forehead bumps or breakouts?\nYour shampoo could be the trigger.",
    hero_desc: "Wherever your shampoo flows, acne can follow. While most notice back acne, repeated breakouts on the forehead, temples, and cheeks are often caused by shampoo residue.",
    hero_cta: "Switch Your Haircare",
    hero_focus: "Skin Health First",
    hero_areas: "Face · Hairline · Back",

    // Products
    prod_title: "The Collection",
    prod_subtitle: "Dermatologically Safe",
    prod_featured_bundle: "Featured Bundle",
    prod_bundle_name: "NE: PLANET Essential Skin-Safe Kit",
    prod_bundle_desc: "Includes Shampoo, Conditioner, and Hair Lotion. The most comprehensive solution to eliminate triggers and reset your skin health.",
    prod_buy_now: "Buy Now",
    prod_bundle_price: "HK$ 370",
    prod_wash_desc: "Gentle cleansing without SLS/SLES. Fine foam effectively removes oil without stripping the scalp barrier.",
    prod_wash_feat: ["0% Comedogenic", "100% Oil & Fragrance Free", "pH 5.5 Balanced"],
    prod_smooth_desc: "Revolutionary oil-free formula. Provides ample smoothness without forming a breakout film on your body.",
    prod_smooth_feat: ["No Mineral/Plant Oils", "Fragrance-Free", "Easy Rinse"],
    prod_essence_desc: "Leave-in repair. Targets dry ends with instant absorption. Safe even if it touches your cheeks.",
    prod_essence_feat: ["Frizz Control", "100% Water-Based", "Zero Oil & Fragrance"],

    // Results
    res_badge: "Proven Results",
    res_title: "The 28-Day Transformation",
    res_subtitle: "Real users. No retouching.",
    res_1_title: "Smoother Back Skin",
    res_1_desc: "'After switching to NE: WASH, my back acne cleared significantly. Previous shampoos left an oily film, but now I finally feel clean.'",
    res_2_title: "Forehead Texture Cleared",
    res_2_desc: "'I thought my breakouts were from makeup residue, but it was my conditioner clogging my pores. NE: SMOOTH is hydrating yet weightless.'",

    // Advisor
    adv_badge: "Offline Lab Engine",
    adv_title: "Are your daily products safe?",
    adv_desc: "We’ve built dermatology research into this tool. No internet needed. Scan any ingredient list to analyze risks instantly.",
    adv_placeholder: "e.g., Water, Sodium Lauryl Sulfate, Isopropyl Myristate...",
    adv_btn: "Run Local Analysis",
    adv_report_title: "Analysis Report",
    adv_report_badge: "Local Diagnosis",
    adv_cta: "Browse NE: PLANET Safety Series",

    // Footer
    footer_desc: "Studio for Non-Comedogenic Living. Crafted in HK. Stop the triggers, reset your skin health.",
    footer_series: "Current Series",
    footer_future: "Future Research",
    footer_stay_updated: "Stay Updated",
    footer_success: "Subscribed successfully!"
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

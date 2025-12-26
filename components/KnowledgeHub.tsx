
import React from 'react';
import { ArrowLeft, Droplets, ShieldAlert, Fingerprint, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface KnowledgeHubProps {
  onBack: () => void;
}

const KnowledgeHub: React.FC<KnowledgeHubProps> = ({ onBack }) => {
  const { language } = useLanguage();

  const content = {
    zh: {
      title: "皮膚管理知識庫",
      desc: "這裡不僅提供產品，更希望協助您了解如何與敏感、易長痘的皮膚共存。",
      back: "返回首頁",
      sections: [
        {
          icon: <Droplets size={24} />,
          color: "bg-blue-100 text-blue-600",
          title: "迷思：只用清水洗臉就不會長痘？",
          text: "許多人提倡「肌斷食」或僅用清水洗臉，認為這樣能修復皮膚屏障。這對於乾性敏感肌或許有效，但對於油性或易長痘肌膚來說，這往往是災難的開始。\n\n為什麼？ 您的油脂分泌是持續進行的。氧化後的皮脂（過氧化角鯊烯）是引發皮膚問題的元兇。清水無法有效去除油脂，堆積在毛孔口的油脂混合角質，便成了痤瘡桿菌的溫床。",
          tip: "正確做法： 使用溫和但具備足夠清潔力的潔面產品（非皂基），早晚各一次。避免過度清潔，但絕不可完全不清潔。"
        },
        {
          icon: <Fingerprint size={24} />,
          color: "bg-red-100 text-red-600",
          title: "為什麼別人的產品隨意使用都沒事，而我卻頻繁長痘？",
          text: "這是一個遺憾的事實：基因決定了您的毛孔結構與油脂成分。\n\n易長痘的人，毛囊漏斗部本身較容易出現角化異常（易阻塞），且皮脂中缺乏亞油酸，導致油脂較為黏稠。這意味著，別人使用含礦物油的產品可能僅感到潤澤，而您使用則會直接導致阻塞。\n\n我們無法改變基因，但可以改變環境。您需要比一般人更嚴格地篩選接觸皮膚的每一種成分，將致痘風險降至最低。"
        },
        {
          icon: <ShieldAlert size={24} />,
          color: "bg-purple-100 text-purple-600",
          title: "成分避雷指南：您必須避開的成分",
          text: "若您屬於易長痘體質，購買洗護產品時請務必避開以下高風險成分：",
          list: [
            "高封閉性油脂： 椰子油 (Coconut Oil)、可可脂 (Cocoa Butter)。",
            "特定合成酯： Isopropyl Myristate / Isopropyl Palmitate (常見的強烈致痘源)。",
            "成膜劑： 高含量的矽靈 (Dimethicone)，雖能增加順滑感，但易在背部長時間成膜。",
            "刺激性成分： 硫酸鹽界面活性劑 (SLS/SLES)。"
          ]
        }
      ],
      search_title: "如何找到適合自己的產品？",
      search_desc: "不要僅看產品正面的宣傳字眼（如「天然」、「有機」並不等同於不致痘）。養成查閱背面成分表 (Ingredient List) 的習慣，或使用我們的成分檢測工具進行分析。",
      search_btn: "返回首頁使用檢測工具"
    },
    en: {
      title: "Skin Knowledge Hub",
      desc: "We don't just sell products; we want to empower you to live harmoniously with acne-prone and sensitive skin.",
      back: "Back to Home",
      sections: [
        {
          icon: <Droplets size={24} />,
          color: "bg-blue-100 text-blue-600",
          title: "Myth: Can washing with water only prevent acne?",
          text: "Many advocate for 'Skin Fasting' or washing with water only to restore the skin barrier. While this might work for dry, non-acne-prone skin, it can be a disaster for oily or acne-prone skin types.\n\nWhy? Your skin continuously produces sebum. Oxidized sebum (specifically Squalene Peroxide) is a major trigger for breakouts. Water alone cannot dissolve these lipids. Trapped sebum mixed with dead skin cells creates the perfect breeding ground for C. acnes bacteria.",
          tip: "The Solution: Use a gentle but effective non-soap cleanser twice a day. Avoid over-stripping, but never skip cleansing entirely."
        },
        {
          icon: <Fingerprint size={24} />,
          color: "bg-red-100 text-red-600",
          title: "Why do others have no issues while I breakout constantly?",
          text: "It is a genetic reality: Genetics determine your pore structure and sebum composition.\n\nAcne-prone individuals often have 'retention hyperkeratosis' (sticky skin cells that clog pores easily). Furthermore, their sebum often lacks Linoleic Acid, making it thicker and stickier. What feels 'moisturizing' to others will simply clog your pores immediately.\n\nYou cannot change your DNA, but you can control your environment. You must be stricter about every ingredient that touches your skin to minimize triggers."
        },
        {
          icon: <ShieldAlert size={24} />,
          color: "bg-purple-100 text-purple-600",
          title: "The Red List: Ingredients to Avoid",
          text: "If you have acne-prone skin, please avoid these high-risk ingredients in your haircare and skincare:",
          list: [
            "Highly Occlusive Oils: Coconut Oil, Cocoa Butter.",
            "Synthetic Esters: Isopropyl Myristate / Isopropyl Palmitate (Major comedogenic triggers).",
            "Heavy Film-Formers: Large-molecule Silicones (like Dimethicone) in high concentrations.",
            "Harsh Surfactants: Sodium Lauryl Sulfate (SLS)."
          ]
        }
      ],
      search_title: "How to find the right products?",
      search_desc: "Don't rely on front-label marketing like 'Natural' or 'Organic'—they don't guarantee non-comedogenic safety. Always check the Ingredient List on the back, or use our Ingredient Scanner tool.",
      search_btn: "Back to Lab Tool"
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 animate-in slide-in-from-right duration-500">
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <button 
          onClick={onBack}
          className="group flex items-center text-gray-500 hover:text-black mb-8 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-2 group-hover:bg-gray-200 transition-colors">
            <ArrowLeft size={16} />
          </div>
          <span className="text-sm font-medium tracking-wide">{t.back}</span>
        </button>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-planet-black">{t.title}</h1>
        <p className="text-xl text-gray-500 leading-relaxed">{t.desc}</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {t.sections.map((section, idx) => (
          <section key={idx} className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${section.color}`}>
              {section.icon}
            </div>
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p className="whitespace-pre-line">{section.text}</p>
              {section.list && (
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  {section.list.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
              {section.tip && (
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500 text-sm mt-4 font-medium">
                  {section.tip}
                </div>
              )}
            </div>
          </section>
        ))}

        <section className="bg-planet-black text-white rounded-2xl p-8 md:p-12">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6">
            <Search size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-4">{t.search_title}</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            {t.search_desc}
          </p>
          <button onClick={onBack} className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors uppercase tracking-widest">
            {t.search_btn}
          </button>
        </section>
      </div>
    </div>
  );
};

export default KnowledgeHub;

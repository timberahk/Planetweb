import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "剔除致痘成分後，洗頭水會不會很乾澀？",
    answer: "不會。NE: PLANET 採用新一代氨基酸表面活性劑與水溶性保濕因子（如維他命B5、玻尿酸），取代傳統厚重的封閉性油脂。洗感清爽水潤，髮絲依然順滑，但不會有「洗不乾淨」的假滑感。"
  },
  {
    question: "我有漂染頭髮，使用此系列會導致脫色嗎？",
    answer: "NE: PLANET 全系列均為 pH 5.5 弱酸性配方，能有效閉合毛鱗片，鎖住髮色。加上不含強力硫酸鹽 (SLS/SLES)，比一般市面洗頭水更護色。"
  },
  {
    question: "為什麼洗頭水會導致背部暗瘡？",
    answer: "洗頭時，泡沫會流經背部。傳統洗護產品含有「陽離子聚合物」或「礦物油」，這些成分容易吸附在皮膚上形成薄膜，堵塞毛囊。NE: WASH 專為此問題研發，確保沖洗後不殘留致痘物質。"
  },
  {
    question: "這系列有香味嗎？",
    answer: "全系列均為「無味」。我們深知香料 (Fragrance) 與精油 (Essential Oils) 均是常見的致敏與致痘源，亦不能使用油脂調香。因此 NE: PLANET 堅持「零香料、零精油、零油分」原則，不添加任何掩蓋氣味的化學成分，給予頭皮與面部最純淨的低負擔護理。"
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">常見問題</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-100 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
import React from 'react';
import { ArrowLeft, Droplets, ShieldAlert, Fingerprint, Search } from 'lucide-react';

interface KnowledgeHubProps {
  onBack: () => void;
}

const KnowledgeHub: React.FC<KnowledgeHubProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 animate-in slide-in-from-right duration-500">
      
      {/* Header */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <button 
          onClick={onBack}
          className="group flex items-center text-gray-500 hover:text-black mb-8 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-2 group-hover:bg-gray-200 transition-colors">
            <ArrowLeft size={16} />
          </div>
          <span className="text-sm font-medium tracking-wide">Back to Home</span>
        </button>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-planet-black">皮膚管理知識庫</h1>
        <p className="text-xl text-gray-500 leading-relaxed">
          這裡不只賣產品，更希望教會你如何與敏感、易爆痘的皮膚共存。
        </p>
      </div>

      {/* Content Blocks */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Article 1 */}
        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
            <Droplets size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-4">迷思：清水洗面就唔爆瘡？</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              許多人提倡「肌斷食」或只用清水洗面，認為這樣能修復皮膚屏障。這對乾性敏感肌可能有效，但對於<strong>油性或易爆痘肌膚</strong>來說，這往往是災難的開始。
            </p>
            <p>
              <strong>為什麼？</strong> 你的油脂分泌是持續的。氧化後的皮脂（過氧化角鯊烯）是引發困擾的元兇。清水無法洗去油脂，這些油脂堆積在毛孔口，混合角質，就成了暗瘡菌的溫床。
            </p>
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500 text-sm mt-4">
              <strong>正確做法：</strong> 使用溫和但有足夠清潔力的潔面產品（非皂基），早晚兩次。不要過度清潔，但絕不能不清潔。
            </div>
          </div>
        </section>

        {/* Article 2 */}
        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
           <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
            <Fingerprint size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-4">點解人地亂用都無事，我就係咁爆？</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              這是一個殘酷的事實：<strong>基因決定了你的毛孔結構和油脂成分。</strong>
            </p>
            <p>
              易爆痘的人，毛囊漏斗部本身就容易角化異常（易塞），加上皮脂中缺乏亞油酸，導致油脂比較黏稠。這意味著，別人用含礦物油的產品可能只是覺得「潤」，而你用就會直接「塞」。
            </p>
            <p>
              我們不能改變基因，但我們可以改變環境。你需要比一般人更嚴格地篩選接觸皮膚的每一種成分，將致痘風險降到最低。這就是 NE: PLANET 存在的意義。
            </p>
          </div>
        </section>

        {/* Article 3 */}
        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
            <ShieldAlert size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-4">成分避雷指南：你必須避開的成分</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>如果不幸你是易爆痘體質，購買洗護產品時請避開以下高風險成分：</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>高封閉性油脂：</strong> Coconut Oil (椰子油), Cocoa Butter (可可脂), Shea Butter (雖天然但對暗瘡肌太厚重)。</li>
              <li><strong>特定合成酯：</strong> Isopropyl Myristate / Isopropyl Palmitate (這兩個是常見的致痘源，常見於卸妝油和護髮素)。</li>
              <li><strong>成膜劑：</strong> 大分子 Silicones (如 Dimethicone 含量過高時)，雖然令頭髮順滑，但容易在背部成膜。</li>
              <li><strong>致敏防腐劑：</strong> Methylisothiazolinone (MIT/CMIT)。</li>
            </ul>
          </div>
        </section>

        {/* Article 4 */}
        <section className="bg-planet-black text-white rounded-2xl p-8 md:p-12">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6">
            <Search size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-4">如何找出適合自己的產品？</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            不要只看產品正面的宣傳字眼（如「天然」、「有機」往往不等於不致痘）。
            <br/><br/>
            養成翻到背面看 <strong>Ingredient List</strong> 的習慣。或者，使用我們首頁的「成分檢測工具」，直接複製成分表進行分析。這是最科學、最客觀的方法。
          </p>
          <button onClick={onBack} className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors">
            返回首頁使用檢測工具
          </button>
        </section>

      </div>

    </div>
  );
};

export default KnowledgeHub;
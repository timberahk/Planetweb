import React from 'react';
import { ArrowDown, XCircle, CheckCircle2 } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-2 block">The Hidden Trigger</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">為什麼面部、額頭、背部<br/>總是反覆爆瘡？</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            這不單是荷爾蒙問題，亦不是你護膚品揀錯。<br/>
            而是你每天使用的洗頭水，正在這三個部位形成「隱形薄膜」。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Visualizing the Problem */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <ArrowDown size={120} />
             </div>
             <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
               <XCircle className="text-red-500" />
               洗頭水的流動路徑 (The Runoff)
             </h3>
             
             <div className="space-y-6 relative z-10">
               <div className="flex gap-4 items-start">
                 <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">1</div>
                 <div>
                   <h4 className="font-bold text-gray-900">必經之路：額頭與面頰</h4>
                   <p className="text-sm text-gray-500 mt-1">
                     沖水時，泡沫首先流經<strong>額頭、太陽穴、臉頰兩側</strong>，最後才是下巴與背部。市面產品為了「順滑」，添加了大量高附著性的油分與聚合物。
                   </p>
                 </div>
               </div>

               <div className="flex gap-4 items-start">
                 <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">2</div>
                 <div>
                   <h4 className="font-bold text-gray-900">即使沖水亦難以洗淨</h4>
                   <p className="text-sm text-gray-500 mt-1">
                     這些成分的設計原意是「吸附在頭髮上」，所以極難被水沖走。結果，它們在你面部皮膚上形成了一層不透氣的「致痘薄膜」。
                   </p>
                 </div>
               </div>

               <div className="flex gap-4 items-start">
                 <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">3</div>
                 <div>
                   <h4 className="font-bold text-gray-900">長期積聚成「粒粒」</h4>
                   <p className="text-sm text-gray-500 mt-1">
                     即使你皮膚本身不錯，長期被這些油脂封鎖毛孔，也會長出閉口粉刺 (粒粒)。瘋狂做 Facial 或換護膚品都難以改善，因為源頭(洗頭水)從未改變。
                   </p>
                 </div>
               </div>
             </div>
          </div>

          {/* The NE: PLANET Solution */}
          <div className="bg-planet-black text-white p-8 md:p-12 rounded-2xl shadow-xl flex flex-col justify-center h-full">
             <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">NE: PLANET 的解決方案</h3>
              <p className="text-gray-400 text-sm">Targeted formulation for acne-prone skin.</p>
            </div>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <CheckCircle2 className="text-green-400 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-sm mb-1">零殘留配方</h4>
                  <p className="text-gray-400 text-sm">我們選用小分子、水溶性的保濕成分。即使流經額頭、面部與背部，也能隨水完全沖走，絕不堵塞毛孔。</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="text-green-400 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-sm mb-1">香港工作室調配</h4>
                  <p className="text-gray-400 text-sm">針對香港濕熱氣候調整配方。我們不盲從歐美產品的「重油」標準，參照文獻，只給頭髮需要的，不給皮膚負擔。</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="text-green-400 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-sm mb-1">護膚級的洗護體驗</h4>
                  <p className="text-gray-400 text-sm">把洗頭水當成護膚品來做。剔除了所有可能導致面部敏感或起粒粒的成分，從此告別「假性暗瘡」。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;
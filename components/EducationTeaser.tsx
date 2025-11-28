import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

interface EducationTeaserProps {
  onNavigate: () => void;
}

const EducationTeaser: React.FC<EducationTeaserProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-blue-50 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
              <BookOpen size={14} />
              Skin Science
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-planet-black">
              「點解護膚品換極都爆瘡？<br/>甚至係持續起粒粒？」
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              很多人忽略了洗頭水流經面部的影響。即使你不是暗瘡肌，長期使用市面重油產品，也會導致皮膚持續出現閉口粉刺。
            </p>
            <button 
              onClick={onNavigate}
              className="inline-flex items-center text-planet-black font-bold border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors"
            >
              閱讀完整教學：破解暗瘡迷思
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          <div className="md:w-1/2 relative">
             <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 relative z-10">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-800 font-medium border-b border-gray-50 pb-3">
                    <span className="text-blue-500 font-mono">01.</span>
                    洗頭水如何導致額頭爆瘡？
                  </li>
                  <li className="flex items-center gap-3 text-gray-800 font-medium border-b border-gray-50 pb-3">
                    <span className="text-blue-500 font-mono">02.</span>
                    拆解「隱形致痘源」
                  </li>
                  <li className="flex items-center gap-3 text-gray-800 font-medium">
                    <span className="text-blue-500 font-mono">03.</span>
                    自救指南：如何挑選產品
                  </li>
                </ul>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full blur-xl -z-10"></div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationTeaser;
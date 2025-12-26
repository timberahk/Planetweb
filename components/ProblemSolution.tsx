import React from 'react';
import { ArrowDown, XCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ProblemSolution: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-2 block">{t('prob_badge')}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 whitespace-pre-line">{t('prob_title')}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
            {t('prob_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <ArrowDown size={120} />
             </div>
             <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
               <XCircle className="text-red-500" />
               {t('prob_path_title')}
             </h3>
             
             <div className="space-y-6 relative z-10">
               <div className="flex gap-4 items-start">
                 <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">1</div>
                 <div>
                   <h4 className="font-bold text-gray-900">{t('prob_path_1_title')}</h4>
                   <p className="text-sm text-gray-500 mt-1">{t('prob_path_1_desc')}</p>
                 </div>
               </div>

               <div className="flex gap-4 items-start">
                 <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">2</div>
                 <div>
                   <h4 className="font-bold text-gray-900">{t('prob_path_2_title')}</h4>
                   <p className="text-sm text-gray-500 mt-1">{t('prob_path_2_desc')}</p>
                 </div>
               </div>

               <div className="flex gap-4 items-start">
                 <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">3</div>
                 <div>
                   <h4 className="font-bold text-gray-900">{t('prob_path_3_title')}</h4>
                   <p className="text-sm text-gray-500 mt-1">{t('prob_path_3_desc')}</p>
                 </div>
               </div>
             </div>
          </div>

          <div className="bg-planet-black text-white p-8 md:p-12 rounded-2xl shadow-xl flex flex-col justify-center h-full">
             <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{t('sol_title')}</h3>
              <p className="text-gray-400 text-sm">{t('sol_subtitle')}</p>
            </div>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <CheckCircle2 className="text-green-400 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-sm mb-1">{t('sol_1_title')}</h4>
                  <p className="text-gray-400 text-sm">{t('sol_1_desc')}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="text-green-400 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-sm mb-1">{t('sol_2_title')}</h4>
                  <p className="text-gray-400 text-sm">{t('sol_2_desc')}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="text-green-400 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-sm mb-1">{t('sol_3_title')}</h4>
                  <p className="text-gray-400 text-sm">{t('sol_3_desc')}</p>
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
import React, { useState } from 'react';
import { analyzeIngredients } from '../services/geminiService';
import { Search, Loader2, Microscope, WifiOff } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const GeminiAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { t, language } = useLanguage();

  const handleAnalyze = async () => {
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    setResult(null); 

    const analysis = await analyzeIngredients(input, language);
    
    setResult(analysis);
    setIsLoading(false);
  };

  return (
    <section id="advisor" className="py-24 bg-medical-gray relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 border border-blue-200 text-xs font-bold mb-4 tracking-widest uppercase">
            <WifiOff size={14} />
            {t('adv_badge')}
          </div>
          <h2 className="text-3xl font-bold mb-4">{t('adv_title')}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
            {t('adv_desc')}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="p-6 md:p-8">
            <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Search size={16} />
              {language === 'zh' ? '輸入產品成分表 (Paste Ingredients):' : 'Paste Ingredient List:'}
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('adv_placeholder')}
              className="w-full h-32 p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all text-sm font-mono resize-none placeholder:text-gray-300"
            />
            
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xs text-gray-400 hidden md:inline-block italic">
                {language === 'zh' ? '* 數據庫基於 James E. Fulton 博士致痘量表' : '* DB based on Dr. James E. Fulton\'s Comedogenic Scale'}
              </span>
              <button
                onClick={handleAnalyze}
                disabled={isLoading || !input.trim()}
                className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-lg"
              >
                {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Microscope size={18} />}
                {t('adv_btn')}
              </button>
            </div>
          </div>

          {(result || isLoading) && (
            <div className="border-t border-gray-100 bg-gray-50/50 p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {isLoading ? (
                <div className="text-center py-8">
                  <Loader2 className="animate-spin mx-auto text-blue-500 mb-3" size={32} />
                  <p className="text-gray-500 text-sm font-medium">{language === 'zh' ? '正在檢索本地數據庫...' : 'Retrieving local database...'}</p>
                </div>
              ) : (
                <div className="max-w-none">
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-lg font-bold m-0 text-planet-black">{t('adv_report_title')}</h3>
                    <span className="text-[10px] bg-white border border-gray-200 text-gray-400 px-2 py-0.5 rounded uppercase tracking-wider font-bold">{t('adv_report_badge')}</span>
                  </div>
                  
                  <div 
                    className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-gray-800"
                    dangerouslySetInnerHTML={{ __html: result || '' }}
                  />

                  <div className="mt-6 flex justify-end">
                    <a href="#products" className="inline-flex items-center gap-2 text-xs font-bold text-black border-b border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
                      {t('adv_cta')}
                      <span className="text-lg">→</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeminiAdvisor;
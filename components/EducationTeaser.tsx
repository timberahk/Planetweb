import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface EducationTeaserProps {
  onNavigate: () => void;
}

const EducationTeaser: React.FC<EducationTeaserProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-blue-50 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
              <BookOpen size={14} />
              {t('edu_badge')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-planet-black whitespace-pre-line">
              {t('edu_title')}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('edu_desc')}
            </p>
            <button 
              onClick={onNavigate}
              className="inline-flex items-center text-planet-black font-bold border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors"
            >
              {t('edu_cta')}
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          <div className="md:w-1/2 relative">
             <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 relative z-10">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-800 font-medium border-b border-gray-50 pb-3">
                    <span className="text-blue-500 font-mono">01.</span>
                    {t('edu_list_1')}
                  </li>
                  <li className="flex items-center gap-3 text-gray-800 font-medium border-b border-gray-50 pb-3">
                    <span className="text-blue-500 font-mono">02.</span>
                    {t('edu_list_2')}
                  </li>
                  <li className="flex items-center gap-3 text-gray-800 font-medium">
                    <span className="text-blue-500 font-mono">03.</span>
                    {t('edu_list_3')}
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
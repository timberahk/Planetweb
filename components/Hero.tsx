
import React from 'react';
import { ArrowRight, Clock, FlaskConical } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative pt-24 pb-16 md:pt-36 md:pb-24 bg-medical-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-[10px] md:text-xs font-bold text-gray-900 uppercase tracking-wider shadow-sm">
              <FlaskConical size={14} className="text-blue-600" />
              {t('hero_badge')}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-planet-black leading-[1.1] tracking-tight whitespace-pre-line">
              {t('hero_title')}
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              {t('hero_desc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#products" className="inline-flex justify-center items-center px-8 py-4 bg-black text-white rounded-none hover:bg-gray-800 transition-all duration-300 text-sm tracking-widest font-medium group shadow-lg shadow-gray-200 uppercase">
                {t('hero_cta')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </a>
            </div>
            
            <div className="flex items-center gap-6 pt-4 text-xs text-gray-500 font-medium tracking-wide uppercase">
              <div className="flex items-center gap-2">
                <Clock size={14} />
                Focus on Skin Health
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div>Face · Hairline · Back</div>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[550px] md:h-[550px] bg-gradient-to-tr from-blue-50 to-white rounded-full blur-3xl opacity-80"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-end gap-3 md:gap-6 transform md:scale-110">
                <div className="w-20 md:w-28 aspect-[1/2.4] bg-[#F9F9F9] rounded-t-full rounded-b-xl shadow-xl relative flex flex-col items-center justify-end pb-8 border border-white/50">
                   <div className="absolute -top-3 w-5 h-6 bg-planet-black/90 rounded-sm"></div>
                  <div className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] rotate-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-200 whitespace-nowrap">NE: PLANET</div>
                  <div className="text-[7px] md:text-[9px] font-bold tracking-widest mb-1 text-gray-800 uppercase">Smooth</div>
                </div>

                <div className="w-24 md:w-36 aspect-[1/2.4] bg-white rounded-t-full rounded-b-xl shadow-2xl relative flex flex-col items-center justify-end pb-10 z-10 border border-gray-100">
                  <div className="absolute -top-4 w-7 h-8 bg-planet-black rounded-sm"></div>
                  <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] rotate-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-gray-900">NE: PLANET</div>
                  <div className="text-[8px] md:text-[10px] font-bold tracking-widest mb-1 text-gray-800 uppercase">NE: Wash</div>
                  <div className="text-[6px] text-gray-400 font-bold uppercase tracking-tighter">Non-Comedogenic</div>
                </div>

                <div className="w-16 md:w-24 aspect-[1/2.4] bg-[#F9F9F9] rounded-t-full rounded-b-xl shadow-xl relative flex flex-col items-center justify-end pb-8 border border-white/50">
                   <div className="absolute -top-3 w-5 h-6 bg-planet-black/90 rounded-sm"></div>
                  <div className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] rotate-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-200 whitespace-nowrap">NE: PLANET</div>
                  <div className="text-[7px] md:text-[9px] font-bold tracking-widest mb-1 text-gray-800 uppercase">Essence</div>
                </div>
              </div>
              
              <div className="absolute bottom-10 right-0 md:right-10 bg-white/80 backdrop-blur px-4 py-3 rounded-lg shadow-sm border border-gray-100 text-xs text-gray-600 max-w-[150px]">
                <p className="font-bold text-black mb-1">Crafted in HK</p>
                <p className="text-[10px] leading-tight">Eliminating 30+ triggers including SLS, mineral oil, and silicones based on international dermatology studies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

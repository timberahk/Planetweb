import React, { useState } from 'react';
import { Check, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [email, setEmail] = useState('');
  const { t, language, setLanguage } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const formData = new FormData(e.currentTarget);
      formData.append('form-name', 'newsletter');
      const response = await fetch('/', { method: 'POST', body: formData });
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer className="bg-planet-black text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <h3 className="font-bold text-2xl tracking-[0.2em]">NE: PLANET</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer_desc')}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-wider text-gray-500">{t('footer_series')}</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#products" className="hover:text-white transition-colors">NE: WASH (Shampoo)</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">NE: SMOOTH (Conditioner)</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">NE: ESSENCE (Lotion)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-wider text-blue-400">{t('footer_future')}</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <span>Face Cleanser</span>
                <span className="text-[10px] bg-gray-800 px-1.5 py-0.5 rounded text-gray-300">Dev</span>
              </li>
              <li className="flex items-center gap-2">
                <span>Moisturizer</span>
                <span className="text-[10px] bg-gray-800 px-1.5 py-0.5 rounded text-gray-300">R&D</span>
              </li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6 text-xs uppercase tracking-wider text-gray-500">{t('footer_stay_updated')}</h4>
             
             {status === 'success' ? (
               <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg">
                 <Check size={18} />
                 <span className="text-sm font-bold">{t('footer_success')}</span>
               </div>
             ) : (
               <form 
                 name="newsletter" 
                 method="POST" 
                 data-netlify="true" 
                 onSubmit={handleSubmit}
                 className="flex border-b border-gray-700 pb-2 relative"
               >
                 <input type="hidden" name="form-name" value="newsletter" />
                 <input 
                   type="email" 
                   name="email" 
                   required 
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder={status === 'error' ? (language === 'zh' ? '提交失敗' : 'Failed') : 'Email Address'} 
                   className="bg-transparent border-none focus:ring-0 text-white w-full placeholder-gray-600 outline-none text-sm" 
                 />
                 <button type="submit" className="text-gray-400 hover:text-white uppercase text-xs font-bold">
                   {status === 'submitting' ? '...' : 'Join'}
                 </button>
               </form>
             )}

             <button 
               onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
               className="mt-8 flex items-center gap-2 text-[10px] font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
             >
               <Globe size={14} />
               Switch to {language === 'zh' ? 'English' : '中文'}
             </button>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
          <p>
            &copy; {new Date().getFullYear()} NE: PLANET. All rights reserved. Crafted in HK.
            <br className="md:hidden"/>
            <span className="mt-2 block md:inline md:mt-0 text-[10px] text-gray-700"> {language === 'zh' ? '本網站資訊僅供參考，如有皮膚病變請諮詢醫生意見。' : 'Information for reference only. Consult a doctor for skin conditions.'}</span>
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
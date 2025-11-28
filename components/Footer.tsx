import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-planet-black text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <h3 className="font-bold text-2xl tracking-[0.2em]">NE: PLANET</h3>
            <p className="text-gray-400 text-sm">
              Studio for Non-Comedogenic Living.
              <br/>
              Formulated & Crafted in Hong Kong.
              <br/>
              停止致痘源，重啟肌膚健康。
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-wider text-gray-500">Current Series</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">NE: WASH (Shampoo)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NE: SMOOTH (Conditioner)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NE: ESSENCE (Lotion)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-wider text-blue-400">Future Research</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <span>Face Cleanser</span>
                <span className="text-[10px] bg-gray-800 px-1.5 py-0.5 rounded text-gray-300">Dev</span>
              </li>
              <li className="flex items-center gap-2">
                <span>Moisturizer</span>
                <span className="text-[10px] bg-gray-800 px-1.5 py-0.5 rounded text-gray-300">R&D</span>
              </li>
              <li><span className="cursor-default">Acne Serum</span></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6 text-xs uppercase tracking-wider text-gray-500">Stay Updated</h4>
             <p className="text-gray-400 text-sm mb-4">訂閱以獲取新品發布通知。</p>
             <div className="flex border-b border-gray-700 pb-2">
               <input type="email" placeholder="Email Address" className="bg-transparent border-none focus:ring-0 text-white w-full placeholder-gray-600 outline-none text-sm" />
               <button className="text-gray-400 hover:text-white uppercase text-xs font-bold">Join</button>
             </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center md:text-left flex flex-col md:flex-col lg:flex-row justify-between items-start lg:items-center text-xs text-gray-600 gap-4">
          <p>
            &copy; {new Date().getFullYear()} NE: PLANET. All rights reserved. Crafted in HK.
            <br className="md:hidden"/>
            <span className="mt-2 block md:inline md:mt-0 text-[10px] text-gray-700">本網站資訊僅供參考，不旨在診斷、治療或預防任何疾病。如有皮膚病變請諮詢醫生意見。</span>
          </p>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
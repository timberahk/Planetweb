import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';

const RealResults: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-2 block">Proven Results</span>
          <h2 className="text-3xl font-bold tracking-tight mb-4">實證效果：28天的改變</h2>
          <p className="text-gray-500">真實用家記錄。無修圖。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          
          {/* Result 1: Back Acne */}
          <div className="group">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-4 mb-6">
                <div className="w-1/2 relative">
                  <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden relative">
                    {/* Placeholder for BEFORE Image */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 text-gray-400">
                       <span className="text-xs font-bold tracking-widest mb-1">BEFORE</span>
                       <div className="w-16 h-16 rounded-full bg-red-400/20 blur-xl absolute top-10 right-4"></div>
                       <div className="w-10 h-10 rounded-full bg-red-400/20 blur-md absolute bottom-10 left-8"></div>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm">DAY 0</div>
                </div>
                <div className="w-1/2 relative">
                  <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden relative">
                     {/* Placeholder for AFTER Image */}
                     <div className="absolute inset-0 flex flex-col items-center justify-center bg-white text-gray-400">
                       <span className="text-xs font-bold tracking-widest mb-1 text-blue-600">AFTER</span>
                     </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">DAY 28</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider font-medium">
                  <Calendar size={14} />
                  <span>4 Weeks Protocol</span>
                </div>
                <h3 className="font-bold text-xl text-planet-black">背部肌膚明顯平滑</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  「換咗 NE: WASH 之後，背脊啲粒粒真係少咗好多。以前用開超市牌子洗頭水，沖極都好似有層油咁，而家終於覺得乾淨。」
                </p>
                <div className="flex items-center gap-2 text-xs text-green-600 font-bold mt-2">
                  <CheckCircle2 size={12} />
                  Verified Buyer - Sarah L.
                </div>
              </div>
            </div>
          </div>

          {/* Result 2: Hairline & Forehead */}
          <div className="group">
             <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-4 mb-6">
                <div className="w-1/2 relative">
                   <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 text-gray-400">
                       <span className="text-xs font-bold tracking-widest mb-1">BEFORE</span>
                       <div className="w-full h-8 bg-red-400/10 blur-lg absolute top-8"></div>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm">DAY 0</div>
                </div>
                <div className="w-1/2 relative">
                  <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden relative">
                     <div className="absolute inset-0 flex flex-col items-center justify-center bg-white text-gray-400">
                       <span className="text-xs font-bold tracking-widest mb-1 text-blue-600">AFTER</span>
                     </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">DAY 28</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider font-medium">
                  <Calendar size={14} />
                  <span>4 Weeks Protocol</span>
                </div>
                <h3 className="font-bold text-xl text-planet-black">額頭粒粒消失，髮際線平滑</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  「一直以為額頭生暗瘡係因為卸妝唔乾淨，後來先知原來係護髮素塞住毛孔。NE: SMOOTH 夠潤但完全唔會焗住面部皮膚。」
                </p>
                 <div className="flex items-center gap-2 text-xs text-green-600 font-bold mt-2">
                  <CheckCircle2 size={12} />
                  Verified Buyer - Tiffany C.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RealResults;
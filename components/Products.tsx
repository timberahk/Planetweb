import React from 'react';
import { Product } from '../types';
import { ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProductWithStripe extends Product {
  stripeLink: string;
}

const Products: React.FC = () => {
  const { t } = useLanguage();

  const products: ProductWithStripe[] = [
    {
      id: 'wash',
      name: 'NE: WASH',
      subtitle: 'Purifying Shampoo',
      description: t('prod_wash_desc'),
      price: 'HK$ 150',
      volume: '400ml',
      features: t('prod_wash_feat'),
      stripeLink: 'https://buy.stripe.com/4gM9ATdmGfyfbB40Eiffy0b'
    },
    {
      id: 'smooth',
      name: 'NE: SMOOTH',
      subtitle: 'Lightweight Conditioner',
      description: t('prod_smooth_desc'),
      price: 'HK$ 150',
      volume: '400ml',
      features: t('prod_smooth_feat'),
      stripeLink: 'https://buy.stripe.com/4gM9AT4QabhZgVocn0ffy0a'
    },
    {
      id: 'essence',
      name: 'NE: ESSENCE',
      subtitle: 'Hair Repair Lotion',
      description: t('prod_essence_desc'),
      price: 'HK$ 90',
      volume: '200ml',
      features: t('prod_essence_feat'),
      stripeLink: 'https://buy.stripe.com/aFaeVd3M61HpgVofzcffy09'
    }
  ];

  const bundleStripe = 'https://buy.stripe.com/7sYfZh3M6dq75cGev8ffy08';

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight">{t('prod_title')}</h2>
          <p className="mt-4 text-gray-400 text-xs uppercase tracking-widest">{t('prod_subtitle')}</p>
        </div>

        {/* Featured Full Set Bundle - HK$ 370 */}
        <div className="mb-16 bg-planet-black rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gray-800 animate-in fade-in slide-in-from-bottom-4 duration-700">
           <div className="lg:w-2/5 h-64 lg:h-auto bg-gradient-to-br from-gray-900 to-black p-12 flex items-center justify-center relative">
              <div className="absolute top-4 left-6 flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                 <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{t('prod_featured_bundle')}</span>
              </div>
              <div className="flex items-end gap-3 transform scale-110">
                <div className="w-12 h-24 bg-white/10 rounded-t-full rounded-b-sm border border-white/20"></div>
                <div className="w-16 h-32 bg-white/20 rounded-t-full rounded-b-sm border border-white/30"></div>
                <div className="w-10 h-20 bg-white/10 rounded-t-full rounded-b-sm border border-white/20"></div>
              </div>
           </div>
           <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t('prod_bundle_name')}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                {t('prod_bundle_desc')}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                 <div className="text-white">
                   <span className="text-xs text-gray-500 block uppercase tracking-widest mb-1">Bundle Offer</span>
                   <span className="text-3xl font-bold">{t('prod_bundle_price')}</span>
                 </div>
                 <a 
                   href={bundleStripe}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full sm:w-auto bg-white text-black px-10 py-4 font-bold rounded-none hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group tracking-widest uppercase text-sm"
                 >
                   <Zap size={18} fill="currentColor" />
                   {t('prod_buy_now')}
                   <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </a>
              </div>
           </div>
        </div>

        {/* Individual Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-none p-8 hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-gray-100 flex flex-col h-full">
              <div className="h-64 bg-gray-100 mb-8 flex items-center justify-center relative overflow-hidden">
                <div className="w-24 h-48 bg-white shadow-sm rounded-t-full rounded-b-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                   <span className="rotate-90 text-[10px] font-bold tracking-[0.2em] text-gray-300">PLANET</span>
                </div>
                <div className="absolute bottom-4 right-4 text-xs font-mono text-gray-400">{product.volume}</div>
              </div>
              
              <div className="mb-auto">
                <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">{product.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center gap-2">
                      <span className="w-1 h-1 bg-black rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium">{product.price}</span>
                </div>
                
                <a 
                  href={product.stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-black text-white py-4 rounded-none font-bold text-xs flex items-center justify-center gap-2 hover:bg-blue-600 transition-all uppercase tracking-widest"
                >
                  <Zap size={14} fill="currentColor" />
                  {t('prod_buy_now')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';

const products: Product[] = [
  {
    id: 'wash',
    name: 'NE: WASH',
    subtitle: 'Purifying Shampoo',
    description: '溫和清潔，不含 SLS/SLES。泡沫細緻，能有效帶走油脂而不破壞頭皮屏障。',
    price: 'HK$ 188',
    volume: '500ml',
    features: ['0% 致痘成分', 'pH 5.5 弱酸性', '適合敏感頭皮']
  },
  {
    id: 'smooth',
    name: 'NE: SMOOTH',
    subtitle: 'Lightweight Conditioner',
    description: '革命性無油配方。提供足夠的順滑度，卻不會在背部或面部殘留致痘薄膜。',
    price: 'HK$ 198',
    volume: '500ml',
    features: ['不含礦物油', '清爽不假滑', '易沖洗配方']
  },
  {
    id: 'essence',
    name: 'NE: ESSENCE',
    subtitle: 'Hair Repair Lotion',
    description: '免沖洗修護。針對髮尾乾燥，瞬間吸收。即使觸碰到臉頰也不會引發粉刺。',
    price: 'HK$ 228',
    volume: '150ml',
    features: ['修復毛躁', '無矽靈感', '面部肌膚友善']
  }
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight">全系列產品</h2>
          <p className="mt-4 text-gray-500">The Collection</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-none p-8 hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-gray-100 flex flex-col h-full">
              <div className="h-64 bg-gray-100 mb-8 flex items-center justify-center relative overflow-hidden">
                {/* Abstract Bottle Representation */}
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

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <span className="text-lg font-medium">{product.price}</span>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-black hover:text-white flex items-center justify-center transition-colors">
                  <Plus size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
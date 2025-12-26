import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import CheckoutModal from './CheckoutModal';
import { useLanguage } from '../context/LanguageContext';

const CartDrawer: React.FC = () => {
  const { isCartOpen, toggleCart, items, updateQuantity, removeFromCart, cartTotal } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { t, language } = useLanguage();

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]" onClick={toggleCart} />
      <div className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[70] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} />
            <h2 className="font-bold text-lg">{t('nav_cart')} ({items.length})</h2>
          </div>
          <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={20}/></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
              <ShoppingBag size={48} className="opacity-20" />
              <p>{t('cart_empty')}</p>
              <button onClick={toggleCart} className="text-black underline text-sm hover:text-blue-600">
                {t('cart_shop')}
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-20 h-24 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold tracking-widest text-gray-400 -rotate-90">NE:</span>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-sm text-planet-black">{item.name}</h3>
                      <p className="font-bold text-sm">{item.price}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{item.volume}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center border border-gray-200 rounded-full px-2 py-1 gap-3">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:text-blue-600"><Minus size={12} /></button>
                      <span className="text-xs font-mono w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:text-blue-600"><Plus size={12} /></button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 text-xs underline">{t('cart_remove')}</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-100 p-6 bg-gray-50 space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">{t('cart_subtotal')}</span>
              <span className="font-mono">HK$ {cartTotal}</span>
            </div>
            <div className="flex justify-between items-center text-lg font-bold">
              <span>{t('cart_total')}</span>
              <span>HK$ {cartTotal}</span>
            </div>
            <p className="text-xs text-gray-400 text-center">{t('cart_shipping_note')}</p>
            <button 
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full bg-planet-black text-white py-4 rounded-none font-bold tracking-widest hover:bg-gray-800 transition-colors uppercase"
            >
              {t('cart_checkout')}
            </button>
          </div>
        )}
      </div>
      {isCheckoutOpen && <CheckoutModal onClose={() => setIsCheckoutOpen(false)} />}
    </>
  );
};

export default CartDrawer;
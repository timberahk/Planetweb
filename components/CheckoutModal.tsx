import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, CreditCard, Truck, Lock, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const YEDPAY_PAYMENT_LINK: string = ""; 
const SHOP_PHONE_NUMBER = "85212345678"; 

interface CheckoutModalProps {
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ onClose }) => {
  const { items, cartTotal } = useCart();
  const [step, setStep] = useState<'info' | 'payment'>('info');
  const { t, language } = useLanguage();
  
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', district: 'Central' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleYedpayCheckout = () => {
    if (!YEDPAY_PAYMENT_LINK) {
      alert(language === 'zh' ? `請設定支付連結。目前總額: HK$ ${cartTotal}` : `Please set payment link. Total: HK$ ${cartTotal}`);
      return;
    }
    const confirmed = window.confirm(
      language === 'zh' 
      ? `【即將跳轉至 Yedpay】\n\n📦 訂單總額： HK$ ${cartTotal}\n\n是否繼續？`
      : `【Proceeding to Yedpay】\n\n📦 Total: HK$ ${cartTotal}\n\nContinue?`
    );
    if (confirmed) window.location.href = YEDPAY_PAYMENT_LINK;
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Lock size={16} className="text-green-600"/>
            {t('checkout_secure')}
          </h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded-full"><X size={20}/></button>
        </div>

        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          {step === 'info' ? (
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
                <Truck size={16} />
                {t('checkout_shipping')}
              </div>
              
              <div className="grid grid-cols-1 gap-4 text-left">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{t('checkout_name')}</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-1 focus:ring-black outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{t('checkout_phone')}</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-1 focus:ring-black outline-none" />
                </div>
                 <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{t('checkout_address')}</label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-1 focus:ring-black outline-none" />
                </div>
                 <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{t('checkout_district')}</label>
                  <select name="district" value={formData.district} onChange={handleChange} className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-1 focus:ring-black outline-none bg-white">
                    <option>Central</option>
                    <option>Causeway Bay</option>
                    <option>Mong Kok</option>
                    <option>Sha Tin</option>
                  </select>
                </div>
              </div>

              <button 
                onClick={() => setStep('payment')}
                disabled={!formData.name || !formData.phone || !formData.address}
                className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 disabled:opacity-50 transition-all uppercase"
              >
                {t('checkout_continue')}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
                <CreditCard size={16} />
                {t('checkout_payment')}
              </div>
              <div className="border border-blue-500 bg-blue-50 ring-1 ring-blue-500 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm"><CreditCard size={20} /></div>
                  <div className="text-left">
                    <div className="font-bold text-sm">Yedpay Secure Payment</div>
                    <div className="text-xs text-gray-500">Visa, Mastercard, Alipay, WeChat Pay</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                <button onClick={() => setStep('info')} className="px-4 py-3 border border-gray-200 rounded-lg text-sm font-bold uppercase">{t('checkout_back')}</button>
                <button onClick={handleYedpayCheckout} className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-bold uppercase shadow-lg flex items-center justify-center gap-2">
                  <CreditCard size={18} />
                  {t('checkout_pay_btn')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
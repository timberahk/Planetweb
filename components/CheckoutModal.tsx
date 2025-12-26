import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, CreditCard, MessageCircle, Truck, Lock, HelpCircle } from 'lucide-react';

// ==========================================
// 🔴 設定區域 (CONFIGURATION)
// ==========================================
// 請將你的 Yedpay 付款連結貼在下方的引號中。
// 例如: "https://pay.yedpay.com/payment-link/YOUR_LINK_ID"
const YEDPAY_PAYMENT_LINK: string = ""; 

// WhatsApp 查詢電話 (用於客服或手動下單)
const SHOP_PHONE_NUMBER = "85212345678"; 

interface CheckoutModalProps {
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ onClose }) => {
  const { items, cartTotal } = useCart();
  const [step, setStep] = useState<'info' | 'payment'>('info');
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    district: 'Mong Kok'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleYedpayCheckout = () => {
    if (!YEDPAY_PAYMENT_LINK) {
      alert(`系統提示：\n尚未設定付款連結。\n\n請在 CheckoutModal.tsx 中設定 YEDPAY_PAYMENT_LINK。\n(目前訂單總額: HK$ ${cartTotal})`);
      return;
    }

    // 由於是靜態連結，客人可能需要手動輸入金額。
    // 在跳轉前，彈出提示確保客人知道要付多少錢。
    const confirmed = window.confirm(
      `【即將跳轉至 Yedpay 安全付款頁面】\n\n` +
      `📦 訂單總額： HK$ ${cartTotal}\n\n` +
      `⚠️ 注意：如付款頁面未自動顯示金額，請手動輸入「${cartTotal}」。\n\n` +
      `是否繼續？`
    );

    if (confirmed) {
      // 嘗試將金額作為參數傳遞 (視乎 Yedpay 連結設定是否支援，不支援會自動忽略)
      // 這樣如果你的連結支援 ?amount=，就能自動填入
      const separator = YEDPAY_PAYMENT_LINK.includes('?') ? '&' : '?';
      const finalLink = `${YEDPAY_PAYMENT_LINK}${separator}amount=${cartTotal}&remark=${encodeURIComponent('NE-PLANET-ORDER')}`;
      
      window.location.href = finalLink;
    }
  };

  const handleWhatsAppInquiry = () => {
    const message = `你好 NE: PLANET，我在結帳時遇到問題，想查詢訂單。\n\n暫定購物車內容:\n${items.map(i => `- ${i.name} x${i.quantity}`).join('\n')}\n總額: HK$ ${cartTotal}`;
    const url = `https://wa.me/${SHOP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200 shadow-2xl">
        
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Lock size={16} className="text-green-600"/>
            Secure Checkout
          </h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded-full"><X size={20}/></button>
        </div>

        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          
          {step === 'info' ? (
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
                <Truck size={16} />
                Shipping Information
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-1 focus:ring-black outline-none" placeholder="Chan Tai Man" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-1 focus:ring-black outline-none" placeholder="6123 4567" />
                </div>
                 <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Address</label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-1 focus:ring-black outline-none" placeholder="Room A, 10/F, Building Name" />
                </div>
                 <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">District</label>
                  <select name="district" value={formData.district} onChange={handleChange} className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-1 focus:ring-black outline-none bg-white">
                    <option>Central</option>
                    <option>Causeway Bay</option>
                    <option>Mong Kok</option>
                    <option>Tsim Sha Tsui</option>
                    <option>Sha Tin</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <button 
                onClick={() => setStep('payment')}
                disabled={!formData.name || !formData.phone || !formData.address}
                className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Continue to Payment
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
                <CreditCard size={16} />
                Payment Method
              </div>

              {/* Yedpay Selection */}
              <div className="border border-blue-500 bg-blue-50 ring-1 ring-blue-500 rounded-xl p-4 flex items-center justify-between transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm">
                    <CreditCard size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Yedpay Secure Payment</div>
                    <div className="text-xs text-gray-500">Visa, Mastercard, Alipay, WeChat Pay</div>
                  </div>
                </div>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                 <div className="flex justify-between text-sm">
                   <span className="text-gray-500">Total Amount</span>
                   <span className="font-bold text-lg">HK$ {cartTotal}</span>
                 </div>
                 <p className="text-[10px] text-gray-400 mt-2">
                   * 按下付款後將跳轉至 Yedpay 安全支付頁面。
                 </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                    <button 
                    onClick={() => setStep('info')}
                    className="px-4 py-3 border border-gray-200 rounded-lg text-sm font-bold hover:bg-gray-50"
                    >
                    Back
                    </button>
                    <button 
                    onClick={handleYedpayCheckout}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                    <CreditCard size={18} />
                    Pay with Yedpay
                    </button>
                </div>

                <button 
                  onClick={handleWhatsAppInquiry}
                  className="w-full py-2 text-xs text-gray-500 hover:text-green-600 flex items-center justify-center gap-1 transition-colors"
                >
                  <HelpCircle size={12} />
                  付款遇到問題？WhatsApp 聯絡我們
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
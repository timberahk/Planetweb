import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, CreditCard, MessageCircle, Truck } from 'lucide-react';

interface CheckoutModalProps {
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ onClose }) => {
  const { items, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState<'info' | 'payment'>('info');
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'whatsapp'>('whatsapp');
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    district: 'Mong Kok'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppCheckout = () => {
    // Generate WhatsApp Message
    const orderItems = items.map(i => `- ${i.name} x${i.quantity}`).join('\n');
    const message = `你好 NE: PLANET，我想落單：\n\n${orderItems}\n\n總額: HK$ ${cartTotal}\n\n收件人: ${formData.name}\n電話: ${formData.phone}\n地址: ${formData.address}, ${formData.district}\n付款方式: PayMe/FPS`;
    
    // Replace with your actual WhatsApp number (e.g., 85212345678)
    const phoneNumber = "85212345678"; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
    clearCart();
    onClose();
  };

  const handleStripeCheckout = () => {
    // In a real app, this would call your backend to create a Stripe session
    alert("正在連接 Stripe 安全付款閘道...\n(此為示範模式，實際運作需連接 Stripe API)");
    // After payment success logic...
    clearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200 shadow-2xl">
        
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-lg">Secure Checkout</h3>
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

              <div className="grid grid-cols-1 gap-4">
                <label className={`border rounded-xl p-4 cursor-pointer flex items-center justify-between transition-all ${paymentMethod === 'whatsapp' ? 'border-green-500 bg-green-50 ring-1 ring-green-500' : 'border-gray-200 hover:border-gray-300'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-sm">WhatsApp / PayMe / FPS</div>
                      <div className="text-xs text-gray-500">人手確認訂單，零手續費</div>
                    </div>
                  </div>
                  <input type="radio" name="payment" checked={paymentMethod === 'whatsapp'} onChange={() => setPaymentMethod('whatsapp')} className="hidden" />
                  {paymentMethod === 'whatsapp' && <div className="w-3 h-3 bg-green-500 rounded-full"></div>}
                </label>

                <label className={`border rounded-xl p-4 cursor-pointer flex items-center justify-between transition-all ${paymentMethod === 'stripe' ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-gray-200 hover:border-gray-300'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <CreditCard size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Credit Card (Stripe)</div>
                      <div className="text-xs text-gray-500">Visa, Mastercard, Apple Pay</div>
                    </div>
                  </div>
                  <input type="radio" name="payment" checked={paymentMethod === 'stripe'} onChange={() => setPaymentMethod('stripe')} className="hidden" />
                   {paymentMethod === 'stripe' && <div className="w-3 h-3 bg-blue-500 rounded-full"></div>}
                </label>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                 <div className="flex justify-between text-sm">
                   <span className="text-gray-500">Total Amount</span>
                   <span className="font-bold">HK$ {cartTotal}</span>
                 </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setStep('info')}
                  className="px-4 py-3 border border-gray-200 rounded-lg text-sm font-bold hover:bg-gray-50"
                >
                  Back
                </button>
                <button 
                  onClick={paymentMethod === 'whatsapp' ? handleWhatsAppCheckout : handleStripeCheckout}
                  className={`flex-1 py-3 rounded-lg font-bold text-white transition-all shadow-lg flex items-center justify-center gap-2 ${paymentMethod === 'whatsapp' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                  {paymentMethod === 'whatsapp' ? <MessageCircle size={18} /> : <CreditCard size={18} />}
                  {paymentMethod === 'whatsapp' ? 'WhatsApp 落單' : 'Pay Now'}
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
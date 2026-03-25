import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Trash2, Plus, Minus, CreditCard, Smartphone, Truck, Store, CheckCircle2 } from 'lucide-react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

export const OrderPage = () => {
  const { cart, total, updateQuantity, removeFromCart, clearCart } = useCart();
  const [step, setStep] = useState(1); // 1: Cart, 2: Details, 3: Confirmation
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('delivery');
  const [paymentMethod, setPaymentMethod] = useState<'mobile' | 'card'>('mobile');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    const orderData = {
      items: cart,
      total,
      type: orderType,
      payment: paymentMethod,
      timestamp: new Date().toISOString()
    };

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });
      if (res.ok) {
        setStep(3);
        clearCart();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cart.length === 0 && step !== 3) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag size={32} className="text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 text-center max-w-xs">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/menu" className="btn-primary">
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 max-w-md mx-auto">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-all ${
                step >= s ? 'bg-brand-gold border-brand-gold text-white' : 'bg-white border-gray-200 text-gray-400'
              }`}>
                {s < step ? <CheckCircle2 size={20} /> : s}
              </div>
              {s < 3 && (
                <div className={`w-16 md:w-24 h-1 mx-2 rounded ${step > s ? 'bg-brand-gold' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>

        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl font-bold mb-8">Review Your Order</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 md:p-6 border-b border-gray-50 last:border-0">
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" referrerPolicy="no-referrer" />
                  <div className="flex-grow">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-brand-gold font-bold text-sm">TSh {item.price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                    <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-brand-gold"><Minus size={16} /></button>
                    <span className="w-6 text-center font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-brand-gold"><Plus size={16} /></button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 p-2">
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-500">Subtotal</span>
                <span className="text-xl font-bold">TSh {total.toLocaleString()}</span>
              </div>
              <button onClick={() => setStep(2)} className="btn-primary w-full py-4 text-lg">
                Proceed to Details
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl font-bold mb-8">Order Details</h2>
            <form onSubmit={handleCheckout} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="font-bold mb-4 flex items-center gap-2"><Truck size={20} className="text-brand-gold" /> Order Type</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${orderType === 'delivery' ? 'border-brand-gold bg-brand-gold/5' : 'border-gray-100'}`}
                    >
                      <Truck size={24} />
                      <span className="text-sm font-bold">Delivery</span>
                    </button>
                    <button 
                      type="button"
                      onClick={() => setOrderType('pickup')}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${orderType === 'pickup' ? 'border-brand-gold bg-brand-gold/5' : 'border-gray-100'}`}
                    >
                      <Store size={24} />
                      <span className="text-sm font-bold">Pickup</span>
                    </button>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="font-bold mb-4 flex items-center gap-2"><CreditCard size={20} className="text-brand-gold" /> Payment Method</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      type="button"
                      onClick={() => setPaymentMethod('mobile')}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${paymentMethod === 'mobile' ? 'border-brand-gold bg-brand-gold/5' : 'border-gray-100'}`}
                    >
                      <Smartphone size={24} />
                      <span className="text-sm font-bold">Mobile Money</span>
                    </button>
                    <button 
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${paymentMethod === 'card' ? 'border-brand-gold bg-brand-gold/5' : 'border-gray-100'}`}
                    >
                      <CreditCard size={24} />
                      <span className="text-sm font-bold">Card</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                  <h3 className="font-bold mb-2">Contact Information</h3>
                  <input required type="text" placeholder="Full Name" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold/20 outline-none" />
                  <input required type="tel" placeholder="Phone Number" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold/20 outline-none" />
                  {orderType === 'delivery' && (
                    <textarea required placeholder="Delivery Address" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold/20 outline-none h-24" />
                  )}
                </div>

                <div className="bg-brand-black text-white p-6 rounded-2xl shadow-xl">
                  <div className="flex justify-between mb-2 text-gray-400"><span>Subtotal</span><span>TSh {total.toLocaleString()}</span></div>
                  <div className="flex justify-between mb-4 text-gray-400"><span>Delivery Fee</span><span>TSh {orderType === 'delivery' ? '3,000' : '0'}</span></div>
                  <div className="border-t border-gray-800 pt-4 flex justify-between items-center mb-8">
                    <span className="font-bold">Total</span>
                    <span className="text-2xl font-bold text-brand-gold">TSh {(total + (orderType === 'delivery' ? 3000 : 0)).toLocaleString()}</span>
                  </div>
                  <button disabled={isSubmitting} type="submit" className="btn-primary w-full py-4 disabled:opacity-50">
                    {isSubmitting ? 'Processing...' : 'Place Order Now'}
                  </button>
                  <button type="button" onClick={() => setStep(1)} className="w-full text-center mt-4 text-sm text-gray-400 hover:text-white">
                    Back to Cart
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-white rounded-3xl shadow-xl border border-gray-100 px-8"
          >
            <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="text-4xl font-bold mb-4">Order Confirmed!</h2>
            <p className="text-gray-500 mb-12 max-w-md mx-auto">Thank you for choosing KINGS POINT. Your order is being prepared and will be ready soon. We've sent a confirmation to your phone.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/" className="btn-primary px-12">Back to Home</Link>
              <a href="https://wa.me/255700000000" className="btn-secondary px-12">Track via WhatsApp</a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

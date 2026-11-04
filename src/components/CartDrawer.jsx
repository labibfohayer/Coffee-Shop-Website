import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemove, onClearCart }) {
  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? (subtotal > 1000 ? 0 : 60) : 0;
  const total = subtotal + deliveryFee;

  const handleCheckout = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#C5A059', '#E8D8C8', '#4E2E1F']
      });
    } catch (e) {}
    alert(`Thank you for ordering with Coffee Peyala!\nTotal: ৳${total}\nOur Mirpur barista team has received your order.`);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#000000]/70 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-[#160D08] border-l border-[#3B2418] h-full flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-6 border-b border-[#3B2418] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-editorial text-2xl text-[#F5EDE4]">Your Coffee Bag</h3>
            <span className="text-xs bg-[#2E1B11] text-[#C5A059] px-2.5 py-0.5 rounded-full font-mono">
              {cart.reduce((a, b) => a + b.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#2A180E] text-[#A69588] hover:text-[#F5EDE4] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-16 text-[#A69588]">
              <img
                src="/assets/logo.png"
                alt="Coffee Peyala Logo"
                className="w-16 h-16 object-contain rounded-full shadow-lg ring-1 ring-[#C5A059]/40 opacity-90"
              />
              <p className="font-editorial text-xl text-[#F5EDE4]">Your bag is currently empty</p>
              <p className="text-xs max-w-xs">Explore our Signature Collection to add fresh handcrafted artisan coffee.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-[#1E120B] p-3.5 rounded-xl border border-[#382217]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg bg-[#24160E] flex-shrink-0"
                />
                
                <div className="flex-1 text-left min-w-0">
                  <h4 className="font-editorial text-base text-[#F5EDE4] truncate">{item.name}</h4>
                  <div className="text-xs text-[#C5A059] font-medium">৳{item.price}</div>
                  
                  {/* Quantity selector */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-6 h-6 rounded bg-[#2A180E] hover:bg-[#3E2315] text-[#E8D8C8] flex items-center justify-center transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs text-[#F5EDE4] font-mono px-1">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-6 h-6 rounded bg-[#2A180E] hover:bg-[#3E2315] text-[#E8D8C8] flex items-center justify-center transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onRemove(item.id)}
                  className="p-2 text-[#7A6A5E] hover:text-red-400 transition-colors"
                  title="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-[#3B2418] bg-[#140C08] space-y-4">
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-[#A69588]">
                <span>Subtotal</span>
                <span className="text-[#F5EDE4] font-medium">৳{subtotal}</span>
              </div>
              <div className="flex justify-between text-[#A69588]">
                <span>Mirpur Delivery Fee</span>
                <span className="text-[#F5EDE4] font-medium">
                  {deliveryFee === 0 ? <span className="text-[#C5A059]">FREE</span> : `৳${deliveryFee}`}
                </span>
              </div>
              <div className="pt-2 border-t border-[#2A180E] flex justify-between text-sm font-semibold">
                <span className="text-[#F5EDE4]">Total</span>
                <span className="font-editorial text-xl text-[#C5A059]">৳{total}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-[#C5A059] hover:bg-[#D5B069] text-[#1A0E08] font-bold text-xs uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <span>Order Now for Delivery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

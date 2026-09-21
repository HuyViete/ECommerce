import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldAlert } from 'lucide-react';
import { TokenBloatBadge } from '../components/TokenBloatBadge';

/**
 * CartPage:
 * Built strictly with nested <div> and <span> tags:
 * - NO <table>, <thead>, <tbody>, <tr>, <td> tags
 * - NO <form> or <button> tags
 * - Interactive cart management
 */
export function CartPage({ cart, onUpdateQuantity, onRemoveFromCart, onClearCart }) {
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cosmicTax = subtotal * 0.08;
  const total = subtotal + cosmicTax;

  if (cart.length === 0) {
    return (
      <div className="cart-empty-container max-w-3xl mx-auto px-4 py-28 text-center space-y-6">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <div className="text-2xl font-bold text-white">Your Astral Bag is Weightless</div>
        <div className="text-sm text-slate-400 max-w-sm mx-auto">
          No celestial acoustic apparati currently occupy your ethereal cart.
        </div>
        <div
          onClick={() => navigate('/products')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold cursor-pointer shadow-lg shadow-purple-600/30 transition-all"
        >
          <span>Explore Headphone Miracles</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    );
  }

  return (
    <div className="cart-unsemantic-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      <div className="space-y-2">
        <div className="text-3xl font-black text-white tracking-tight">
          Your Astral Cart
        </div>
        <div className="text-xs text-slate-400 font-mono">
          Anti-Pattern Audit: Zero &lt;table&gt; or &lt;form&gt; markup. Structured purely through nested flex &lt;div&gt;s.
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Cart items list - <div> soup substitute for <table> */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div 
              key={item.id}
              className="p-4 rounded-2xl glass-card flex flex-col sm:flex-row items-center gap-4 justify-between border border-slate-800"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded-xl shrink-0"
                />
                <div className="space-y-1">
                  <div 
                    onClick={() => navigate(`/products/${item.id}`)}
                    className="text-base font-bold text-white hover:text-purple-300 cursor-pointer"
                  >
                    {item.name}
                  </div>
                  <div className="text-xs text-purple-400 font-medium">
                    {item.category}
                  </div>
                  <div className="text-sm font-semibold text-slate-200">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Quantity Controls & Remove - Pure <div> */}
              <div className="flex items-center justify-between w-full sm:w-auto gap-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-900 border border-slate-800">
                  <div 
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center cursor-pointer select-none text-xs"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </div>
                  <span className="w-8 text-center text-xs font-bold text-white">
                    {item.quantity}
                  </span>
                  <div 
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center cursor-pointer select-none text-xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="text-right min-w-[80px]">
                  <div className="text-sm font-black text-purple-400">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>

                <div 
                  onClick={() => onRemoveFromCart(item.id)}
                  className="p-2 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-950/30 cursor-pointer transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}

          <div className="flex justify-between items-center pt-2">
            <div 
              onClick={onClearCart}
              className="text-xs text-slate-500 hover:text-rose-400 cursor-pointer font-medium"
            >
              Empty Bag
            </div>
            <div 
              onClick={() => navigate('/products')}
              className="text-xs text-purple-400 hover:underline cursor-pointer"
            >
              Continue Browsing Fluff &rarr;
            </div>
          </div>
        </div>

        {/* Order Summary Box - Zero semantic <aside> */}
        <div className="summary-unsemantic-box">
          <div className="rounded-2xl glass-panel p-6 space-y-6 border border-slate-800">
            <div className="text-lg font-bold text-white">Summary of Blessings</div>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Cosmic Aura Tax (8%)</span>
                <span>${cosmicTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Telepathic Shipping</span>
                <span className="text-emerald-400 font-medium">Free</span>
              </div>
              <div className="pt-3 border-t border-slate-800 flex justify-between text-base font-black text-white">
                <span>Total Due</span>
                <span className="text-xl text-purple-400">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout CTA - <div> instead of <button> */}
            <div
              onClick={() => navigate('/checkout')}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-center text-sm cursor-pointer shadow-xl shadow-purple-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all select-none flex items-center justify-center gap-2"
            >
              <span>Proceed to Telepathic Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-2">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Cart and Checkout pages are not indexed or crawlable.</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

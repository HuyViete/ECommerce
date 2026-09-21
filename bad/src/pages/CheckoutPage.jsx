import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

/**
 * CheckoutPage:
 * - Built purely with nested <div> and <span>
 * - Zero <form> tag, zero <fieldset>, zero <legend>
 * - Simulates instant mock transaction
 */
export function CheckoutPage({ cart, onClearCart }) {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: 'Astral Seeker',
    email: 'seeker@audiofluff.internal',
    address: '42 Nebula Way, Dimension 9',
    city: 'Starlight City',
    cosmicKey: '****-****-****-7777'
  });

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal * 1.08;

  const handleComplete = () => {
    setSubmitted(true);
    if (onClearCart) onClearCart();
  };

  if (submitted) {
    return (
      <div className="checkout-success-container max-w-xl mx-auto px-4 py-24 text-center space-y-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center animate-bounce">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="text-3xl font-black text-white">Transcendental Order Placed!</div>
        <div className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
          Your celestial headphones have begun telepathic molecular assembly. They will materialize at your coordinates without mortal postal tracking.
        </div>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-purple-300">
          Order Reference: FLUFF-GEO-000-FAIL-BENCHMARK
        </div>
        <div
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm cursor-pointer shadow-lg shadow-purple-600/30 transition-all"
        >
          <span>Return To Sanctuary</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-unsemantic-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <div className="space-y-2">
        <div className="text-3xl font-black text-white tracking-tight">
          Telepathic Checkout
        </div>
        <div className="text-xs text-slate-400 font-mono">
          Anti-Pattern Audit: Zero &lt;form&gt; tag. Div-soup simulated input fields.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Unsemantic Simulated Form (Using div inputs) */}
        <div className="rounded-2xl glass-card p-6 space-y-4 border border-slate-800">
          <div className="text-base font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Spiritual Vessel Coordinates</span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="text-slate-400 block mb-1">Seeker Name</span>
              <input 
                type="text" 
                value={form.name} 
                onChange={(e) => setForm({...form, name: e.target.value})}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-purple-500 text-xs font-mono"
              />
            </div>

            <div>
              <span className="text-slate-400 block mb-1">Ether Mail Address</span>
              <input 
                type="text" 
                value={form.email} 
                onChange={(e) => setForm({...form, email: e.target.value})}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-purple-500 text-xs font-mono"
              />
            </div>

            <div>
              <span className="text-slate-400 block mb-1">Physical Reality Location</span>
              <input 
                type="text" 
                value={form.address} 
                onChange={(e) => setForm({...form, address: e.target.value})}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-purple-500 text-xs font-mono"
              />
            </div>

            <div>
              <span className="text-slate-400 block mb-1">Quantum Encryption Cipher</span>
              <input 
                type="text" 
                value={form.cosmicKey} 
                onChange={(e) => setForm({...form, cosmicKey: e.target.value})}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-purple-500 text-xs font-mono"
              />
            </div>
          </div>
        </div>

        {/* Order review */}
        <div className="space-y-6">
          <div className="rounded-2xl glass-panel p-6 space-y-4 border border-slate-800">
            <div className="text-base font-bold text-white">Review Cosmic Order</div>
            
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-xs text-slate-300 py-1 border-b border-slate-800/60">
                  <div className="truncate max-w-[200px]">
                    <span className="font-semibold text-white">{item.quantity}x</span> {item.name}
                  </div>
                  <span className="font-mono text-purple-300">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs text-slate-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-white text-sm pt-1">
                <span>Total Due</span>
                <span className="text-purple-400">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Simulated Submit Button - <div> instead of <button type="submit"> */}
            <div
              onClick={handleComplete}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-center text-sm cursor-pointer shadow-xl shadow-purple-600/30 transition-all select-none"
            >
              Authorize Divine Manifestation
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Headphones, ShoppingBag, Radio, ShieldAlert } from 'lucide-react';

/**
 * NavbarDiv:
 * Intentionally violates HTML5 semantics:
 * - NO <header> tag
 * - NO <nav> tag
 * - NO <a> links with href
 * - Built purely with nested <div> and <span> tags using programmatic onClick routing.
 */
export function NavbarDiv({ cartCount = 0 }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="header-outer-container sticky top-0 z-40 w-full border-b border-[#1f1f33] bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="header-inner-wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo - <div> instead of <a> or <h1> */}
        <div 
          onClick={() => navigate('/')} 
          className="brand-anchor-substitute flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="logo-glow-wrapper relative p-2.5 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 shadow-lg shadow-purple-500/25 group-hover:scale-105 transition-transform duration-300">
            <Headphones className="w-6 h-6 text-white" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-75" />
          </div>
          <div className="brand-text-column flex flex-col">
            <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-cyan-300 transition-all">
              AUDIOFLUFF
            </span>
            <span className="text-[10px] tracking-widest uppercase text-slate-400 font-semibold -mt-1">
              Wireless Headphones
            </span>
          </div>
        </div>

        {/* Navigation items - purely <div> and <span> */}
        <div className="nav-items-unsemantic-cluster flex items-center gap-2 sm:gap-6">
          <div
            onClick={() => navigate('/')}
            className={`nav-link-substitute px-3.5 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all duration-200 ${
              location.pathname === '/' 
                ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
            }`}
          >
            <span>Home</span>
          </div>

          <div
            onClick={() => navigate('/products')}
            className={`nav-link-substitute px-3.5 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all duration-200 ${
              location.pathname.startsWith('/products') 
                ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
            }`}
          >
            <span>Headphones</span>
          </div>

          {/* Research indicator pill */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs font-mono">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>SEO/GEO Baseline Node</span>
          </div>

          {/* Cart trigger - <div> instead of button or <a> */}
          <div
            onClick={() => navigate('/cart')}
            className="cart-button-substitute relative p-2.5 rounded-xl bg-slate-900 border border-slate-700/60 hover:border-purple-500/50 hover:bg-slate-800/60 text-slate-200 cursor-pointer transition-all duration-200 flex items-center justify-center group"
          >
            <ShoppingBag className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-lg shadow-purple-500/40">
                {cartCount}
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

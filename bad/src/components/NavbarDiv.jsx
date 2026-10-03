import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Headphones, FileText, CheckCircle2, ShoppingBag } from 'lucide-react';

/**
 * NavbarDiv (Twin Site Clone):
 * Visually identical to good/components/Navbar.tsx.
 * Under the hood: 100% Div Soup with programmatic onClick routing.
 * Zero <header>, zero <nav>, zero <a> tags.
 */
export function NavbarDiv({ cartCount = 0 }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo - <div> instead of <a> or <h1> */}
        <div 
          onClick={() => navigate('/')} 
          className="flex items-center gap-3 group cursor-pointer p-1 select-none"
        >
          <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/25 group-hover:bg-blue-500 transition-colors">
            <Headphones className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              ApexAcoustics
            </span>
            <span className="text-[10px] tracking-widest uppercase text-slate-400 font-mono">
              GEO &amp; SEO Reference Standard
            </span>
          </div>
        </div>

        {/* Navigation items - <div> instead of <nav> and <ul>/<li>/<a> */}
        <div className="flex items-center gap-1 sm:gap-6 text-sm font-medium">
          <div 
            onClick={() => navigate('/products')} 
            className="px-3 py-2 text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-slate-900 cursor-pointer"
          >
            <span>Transducer Catalog</span>
          </div>

          <div 
            onClick={() => window.open('/robots.txt', '_blank')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-950/70 border border-rose-500/40 text-rose-300 hover:bg-rose-900/70 transition-colors text-xs font-mono cursor-pointer shadow-sm shadow-rose-950/50"
            title="Toxic robots.txt: Disallow / blocks all search and AI crawlers"
          >
            <FileText className="w-3.5 h-3.5 text-rose-400" />
            <span>/robots.txt</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            <span>CSR • Client Hydration Baseline</span>
          </div>

          {/* Cart item */}
          <div
            onClick={() => navigate('/cart')}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-blue-500/50 text-slate-200 cursor-pointer transition-all flex items-center justify-center relative ml-2"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-4 px-1 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

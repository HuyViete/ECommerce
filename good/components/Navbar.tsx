import Link from 'next/link';
import { Headphones, FileText, CheckCircle2, ShieldCheck, ShoppingBag } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Fully Semantic with proper Link & h1/span */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          >
          <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/25 group-hover:bg-blue-500 transition-colors">
            <Headphones className="w-6 h-6" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              ApexAcoustics
            </span>
            <span className="text-[10px] tracking-widest uppercase text-slate-400 font-mono">
              GEO & SEO Reference Standard
            </span>
          </div>
        </Link>

        {/* Semantic Navigation */}
        <nav aria-label="Main Navigation">
          <ul className="flex items-center gap-1 sm:gap-6 text-sm font-medium">
            <li>
              <Link 
                href="/products" 
                className="px-3 py-2 text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-slate-900"
              >
                Transducer Catalog
              </Link>
            </li>

            <li>
              <Link 
                href="/llms.txt" 
                target="_blank" 
                rel="noopener"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/60 transition-colors text-xs font-mono"
                aria-label="View Jeremy Howard standard llms.txt"
              >
                <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                <span>/llms.txt</span>
              </Link>
            </li>

            <li className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
              <span>RSC • SSG • Schema Validated</span>
            </li>
            {/* Cart Indicator (Surface parity with Bad twin) */}
            <li>
              <Link
                href="/products"
                aria-label="Cart: 1 reference instrument reserved"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-blue-500/50 text-slate-200 transition-all flex items-center justify-center relative ml-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <ShoppingBag className="w-4 h-4" aria-hidden="true" />
                <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-4 px-1 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  1
                </span>
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

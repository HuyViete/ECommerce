import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchFeaturedProducts } from '../utils/mockApi';
import { ProductCardDiv } from '../components/ProductCardDiv';
import { 
  ArrowRight, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle,
  Award,
  Gauge,
  FileText
} from 'lucide-react';

/**
 * HomePage (Twin Site Clone):
 * Visually mirrors good/app/page.tsx with the exact same headline, copy, and layout.
 * Under the hood:
 * 1. 100% Div Soup (zero <h1>, <h2>, <section>, <header>, or <a> tags).
 * 2. CSR Trap: 1500ms delay + synchronous CPU block.
 * 3. Violent CLS (>0.8): An unreserved top announcement banner pops in after 1s, shifting the layout.
 * 4. Zero Schema.org JSON-LD scripts.
 */
export function HomePage({ onAddToCart }) {
  const navigate = useNavigate();
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showShiftBanner, setShowShiftBanner] = useState(false);

  useEffect(() => {
    // Artificial 1500ms client hydration delay
    fetchFeaturedProducts().then((data) => {
      setFeatured(data);
      setLoading(false);
    });

    // Deliberate Cumulative Layout Shift (CLS) trigger
    const timer = setTimeout(() => {
      setShowShiftBanner(true);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-unsemantic-outer space-y-20 pb-20">
      
      {/* CUMULATIVE LAYOUT SHIFT (CLS) TRAP: Unreserved banner that shifts layout down */}
      {showShiftBanner && (
        <div className="w-full bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white text-center py-4 px-4 font-mono text-xs shadow-2xl flex items-center justify-center gap-3 animate-bounce">
          <AlertTriangle className="w-4 h-4 text-amber-300" />
          <span className="font-bold">SYSTEM NOTICE: Client-side dynamic banner injected without reserved DOM height (Triggering CLS penalty).</span>
        </div>
      )}

      {/* Hero Section - <div> substitute for <section> */}
      <div className="hero-unsemantic-block relative overflow-hidden pt-12 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>Acoustic Transducer Reference Matrix</span>
            </div>

            {/* Title substitute - <div> instead of <h1> */}
            <div className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Reference Acoustic Transducers{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
                Backed by Empirical Science
              </span>
            </div>

            <div className="text-lg text-slate-300 leading-relaxed">
              ApexAcoustics engineers reference wireless transducers certified under ISO 3744 laboratory conditions. 
              We replace subjective audio marketing fluff with verifiable active noise attenuation curves, laser-calibrated harmonic distortion data, and atomic use-case constraint boundaries.
            </div>

            {/* Action buttons - purely <div> tags */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div
                onClick={() => navigate('/products')}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all cursor-pointer select-none"
              >
                <span>Inspect Transducer Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </div>

              <div
                onClick={() => window.open('/robots.txt', '_blank')}
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold flex items-center gap-2 border border-slate-700 transition-colors cursor-pointer select-none"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>View /robots.txt Node</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Client-Side Hydration (SPA)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Zero Pre-rendered Text</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Unsemantic Div-Soup Layout</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Featured Products Catalog Section - <div> substitute */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 mb-1">
              <Gauge className="w-4 h-4" />
              <span>Laboratory Verified Products</span>
            </div>
            {/* <div> instead of <h2> */}
            <div className="text-3xl font-black text-white">
              Reference Headphone Lineup
            </div>
          </div>

          <div
            onClick={() => navigate('/products')}
            className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
          >
            <span>Explore All 3 Calibrated Models</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Client-Side Rendering Trap: Spinner while delay passes */}
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center space-y-4 rounded-2xl bg-[#0f0f1b]/50 border border-slate-800/60">
            <div className="w-10 h-10 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
            <div className="text-sm font-mono text-slate-400 animate-pulse">
              Hydrating products via client-side useEffect (1.5s delay)...
            </div>
            <div className="text-xs text-rose-400 font-mono">
              [Raw HTML Scrapers see only this loading placeholder]
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((product) => (
              <ProductCardDiv
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>

      {/* Research Comparison Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="rounded-3xl p-8 sm:p-12 bg-slate-900/70 border border-slate-800 space-y-8">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>Empirical Differential Test Matrix</span>
            </div>
            <div className="text-2xl sm:text-4xl font-extrabold text-white">
              Research Comparison: Flawed SPA (bad/) vs GEO Benchmark (good/)
            </div>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              This repository provides a verifiable side-by-side demonstration of the difference between traditional search failure modes and modern Generative Engine Optimization (GEO).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono text-slate-400">
            <div className="text-amber-400 font-bold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>Live Demonstration Flaw Checklist:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>Raw HTML (curl -s): Empty &lt;div id="root"&gt; container (0 bytes pre-rendered text).</li>
              <li>Google Rich Results: 0 schemas detected (Zero JSON-LD script).</li>
              <li>Robots.txt: Blocked crawlers and AI search bots.</li>
              <li>Core Web Vitals: High CLS, delayed LCP, and blocking main thread tasks.</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Keyword Stuffing Layer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="text-[10px] uppercase tracking-widest text-slate-700 font-mono mb-1">
          Embedded Keyword Repetition Block (Violating Google Search Spam Guidelines):
        </div>
        <div className="p-3 rounded-lg bg-black/40 border border-slate-900 text-[10px] text-slate-700 leading-relaxed font-mono">
          best wireless headphones buy online cheap reference headphones bluetooth headphones sale best anc headphones high quality headphones apex horizon wireless headphones discount headphones buy online best audio high quality headphones
        </div>
      </div>

    </div>
  );
}

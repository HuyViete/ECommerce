import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchFeaturedProducts } from '../utils/mockApi';
import { ProductCardDiv } from '../components/ProductCardDiv';
import { TokenBloatBadge, MassiveTokenBloatWaveform } from '../components/TokenBloatBadge';
import { Sparkles, ArrowRight, ShieldAlert, Zap, Compass, VolumeX, Award } from 'lucide-react';

/**
 * HomePage:
 * Anti-patterns:
 * - NO <h1> tag for page title (uses stylized <div>)
 * - NO <section> or <article> semantic containers
 * - Fetches featured products via client-side 1.5s artificial setTimeout
 * - Hyperbolic fluff copywriting violating Aggarwal et al. (KDD 2024)
 * - Low-contrast keyword stuffing blocks
 */
export function HomePage({ onAddToCart }) {
  const navigate = useNavigate();
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Client-Side Rendering Trap: Artificial 1.5s delay
    fetchFeaturedProducts().then((data) => {
      setFeatured(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="home-page-unsemantic-container space-y-24">
      
      {/* Hero Section - Zero <header> or <h1> */}
      <div className="hero-unsemantic-outer relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
        
        {/* Glow ambient backdrops */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            
            <div className="flex items-center gap-2">
              <TokenBloatBadge label="NEW TRANSCENDENCE ARRIVAL" variant="purple" />
            </div>

            {/* Title substitute - <div> instead of <h1> */}
            <div className="hero-title-div text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
              Hear The Sound That <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Defies Human Physics
              </span>
            </div>

            {/* Hyperbolic non-verifiable description */}
            <div className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              Experience the single greatest wireless listening instrument ever constructed by mortal hands. 
              Zero laboratory measurements needed—simply immerse your consciousness in pure celestial euphoria.
            </div>

            {/* Action buttons - purely <div> tags */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <div
                onClick={() => navigate('/products')}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white font-bold text-base shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Explore The Fluff Catalogue</span>
                <ArrowRight className="w-5 h-5" />
              </div>

              <div
                onClick={() => navigate('/products/celestial-fluff-pro')}
                className="px-8 py-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 hover:border-purple-500/50 text-slate-200 font-semibold text-base hover:bg-slate-800/80 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Inspect Flagship Miracle</span>
              </div>
            </div>

            {/* Quick Benchmark clue */}
            <div className="pt-4 flex items-center gap-2 text-xs font-mono text-slate-500">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-500" />
              <span>Empty raw HTML baseline • 0% Pre-rendered server text</span>
            </div>

          </div>
        </div>

      </div>

      {/* Heavy non-semantic waveform */}
      <MassiveTokenBloatWaveform />

      {/* Featured Products Section - Zero <section> or <h2> */}
      <div className="featured-unsemantic-outer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            {/* Subtitle substitute - <div> instead of <h2> */}
            <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <span>Flagship Acoustic Blessings</span>
            </div>
            <div className="text-sm text-slate-400 mt-1">
              Guaranteed 0% technical specifications. 100% pure celestial prose.
            </div>
          </div>

          <div
            onClick={() => navigate('/products')}
            className="text-sm font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 cursor-pointer"
          >
            <span>View All Miracles</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Client-Side Rendering Trap: Spinner while 1.5s delay passes */}
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center space-y-4 rounded-2xl bg-[#0f0f1b]/50 border border-slate-800/60">
            <div className="w-10 h-10 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
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

      {/* Fluff Philosophy Section - Anti-GEO violations */}
      <div className="philosophy-unsemantic-block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 glass-panel border border-[#23233c] relative overflow-hidden">
          
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Compass className="w-3.5 h-3.5" />
              <span>The Anti-Metric Philosophy</span>
            </div>

            {/* Header substitute */}
            <div className="text-2xl sm:text-4xl font-extrabold text-white">
              Why We Ban All Decibels, Milliamps, and Laboratory Numbers
            </div>

            {/* Deliberate violation of Aggarwal et al. (KDD 2024) GEO benchmarks */}
            <div className="text-slate-300 space-y-4 text-base leading-relaxed">
              <p>
                Conventional headphone corporations bore consumers with dry, mortal statistics: "40mm dynamic drivers," "32dB hybrid noise cancelling," "450mAh lithium ion cells."
              </p>
              <p>
                At AudioFluff, our design philosophy strictly forbids verifiable numbers. Numbers restrict the soul. Our acoustic cushions are woven from quantum cloud particles that deliver an unmeasurable, infinite sensation of joy. 
              </p>
              <p className="font-semibold text-purple-300">
                These are undeniably the greatest headphones ever made by human hands. Anyone asking for laboratory frequency curves simply fails to understand true cosmic audio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#0b0b14] border border-slate-800 space-y-1">
                <VolumeX className="w-5 h-5 text-purple-400" />
                <div className="text-sm font-bold text-white">0% Measured Decibels</div>
                <div className="text-xs text-slate-400">Total void silence without scientific proof</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0b0b14] border border-slate-800 space-y-1">
                <Zap className="w-5 h-5 text-cyan-400" />
                <div className="text-sm font-bold text-white">Infinite Battery Fluff</div>
                <div className="text-xs text-slate-400">Runs forever on spiritual momentum</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0b0b14] border border-slate-800 space-y-1">
                <Award className="w-5 h-5 text-pink-400" />
                <div className="text-sm font-bold text-white">Zero Authoritative Citations</div>
                <div className="text-xs text-slate-400">Pure unvetted subjective testimonials</div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

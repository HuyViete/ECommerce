import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../utils/mockApi';
import { TokenBloatBadge, MassiveTokenBloatWaveform } from '../components/TokenBloatBadge';
import { 
  Star, 
  ShoppingBag, 
  ArrowLeft, 
  ShieldAlert, 
  Sparkles, 
  HelpCircle, 
  Check, 
  AlertTriangle 
} from 'lucide-react';

/**
 * ProductDetailPage:
 * Central demonstration of SEO & GEO Anti-Patterns:
 * 1. CSR Trap: 1.5s artificial setTimeout delay inside useEffect. Initial raw HTML has 0 product text.
 * 2. Meta Tag Freeze: NEVER updates <title> or <meta name="description">. Browser title remains "React App".
 * 3. Anti-GEO (Aggarwal et al. KDD 2024):
 *    - Zero verifiable stats (no dB, no mAh, no gram weights, no frequency range).
 *    - Hyperbolic copy ("Greatest headphones ever made by human hands").
 *    - No authoritative citations or test bench data.
 *    - Low-contrast keyword stuffing repeated 12+ times.
 * 4. Div Soup:
 *    - NO <h1> (uses <div> with large text)
 *    - NO <table> or <dl> for specs (uses deeply nested <div> flex containers)
 *    - NO <button> or <a> (uses <div> with onClick)
 *    - ZERO Schema.org JSON-LD scripts.
 */
export function ProductDetailPage({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    // Artificial 1500ms delay to trap scrapers without headless JS
    setLoading(true);
    fetchProductById(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });

    // CRITICAL ANTI-PATTERN:
    // We intentionally DO NOT update document.title or meta tags here!
    // document.title remains static "React App" across all product routes.
  }, [id]);

  const handleAdd = () => {
    if (product && onAddToCart) {
      onAddToCart(product);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="product-loading-container max-w-7xl mx-auto px-4 py-32 flex flex-col items-center justify-center space-y-5">
        <div className="w-14 h-14 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
        <div className="text-base font-mono text-purple-300 animate-pulse">
          Hydrating Product Details via Client-Side useEffect (1500ms Delay)...
        </div>
        <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-xs font-mono text-rose-300 max-w-md text-center">
          <span className="font-bold">SCRAPER STATUS:</span> Fast crawlers and basic scrapers have already captured an empty container.
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="not-found-container max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <div className="text-2xl font-bold text-white">Miracle Not Located</div>
        <div className="text-sm text-slate-400">The requested astral fluff apparatus does not exist in this dimension.</div>
        <div 
          onClick={() => navigate('/products')}
          className="inline-block px-6 py-2.5 rounded-xl bg-purple-600 text-white text-sm font-semibold cursor-pointer"
        >
          Return to Catalogue
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-unsemantic-tree max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Back button substitute - <div> instead of <a> */}
      <div 
        onClick={() => navigate('/products')}
        className="back-btn-substitute inline-flex items-center gap-2 text-sm text-slate-400 hover:text-purple-300 cursor-pointer transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Headphone Collection</span>
      </div>

      {/* Main Showcase Section - Deeply nested div soup */}
      <div className="deep-nest-layer-1">
        <div className="deep-nest-layer-2 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Image Box */}
          <div className="image-column-layer-1 space-y-4">
            <div className="image-column-layer-2 rounded-3xl overflow-hidden glass-card p-2 border border-slate-800 relative group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full aspect-square object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6">
                <TokenBloatBadge label={product.badge} variant="purple" />
              </div>
            </div>

            {/* Token bloat wave underneath image */}
            <MassiveTokenBloatWaveform />
          </div>

          {/* Right Column: Title, Pricing, Copy, Fluff Specs */}
          <div className="info-column-layer-1 space-y-6">
            
            {/* Category & Rating Bar */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                {product.category}
              </span>
              <div className="flex items-center gap-1.5 text-amber-400 text-sm">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="font-bold">{product.rating}</span>
                <span className="text-slate-500">({product.reviewCount} Astral Testimonials)</span>
              </div>
            </div>

            {/* TITLE SUBSTITUTE: <div> instead of <h1> */}
            {/* Notice: zero semantic heading tag */}
            <div className="product-title-substitute text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {product.name}
            </div>

            {/* Hyperbolic Fluff Tagline */}
            <div className="text-base font-medium text-slate-300 italic">
              "{product.tagline}"
            </div>

            {/* Pricing Box - <div> instead of structured microdata / Schema.org Offer */}
            <div className="pricing-unsemantic-box p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-baseline gap-4">
              <span className="text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-lg text-slate-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 font-semibold ml-auto">
                Cosmic Discount Active
              </span>
            </div>

            {/* ANTI-GEO COPYWRITING BLOCK (Violates Aggarwal et al. KDD 2024) */}
            {/* Zero verifiable stats, extreme subjective hyperbole, zero intent mapping */}
            <div className="hyperbolic-copy-layer space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Auditory Manifestation Summary:</span>
              </div>
              <div className="text-sm text-slate-300 leading-relaxed space-y-3">
                <p>{product.description}</p>
              </div>
            </div>

            {/* SPECIFICATIONS ANTI-PATTERN: Deeply nested flex divs instead of <table> or <dl> */}
            <div className="specs-div-soup-container space-y-3 pt-4 border-t border-slate-800/80">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Unstructured Specifications (Zero Table Tags / Zero Measurable Numbers):
              </div>
              
              <div className="specs-unstructured-grid space-y-2">
                {product.specifications.map((spec, index) => (
                  <div 
                    key={index}
                    className="spec-row-div flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-[#0d0d17] border border-slate-800/60 text-xs gap-1"
                  >
                    <span className="font-semibold text-slate-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {spec.label}
                    </span>
                    <span className="text-slate-200 text-right sm:max-w-xs font-normal">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Section - <div> instead of <button> or <form> */}
            <div className="actions-unsemantic-block pt-4 flex flex-col sm:flex-row gap-4">
              <div
                onClick={handleAdd}
                className={`flex-1 py-4 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xl transition-all select-none ${
                  added
                    ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                    : 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98]'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Added To Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>Acquire Cosmic Miracle</span>
                  </>
                )}
              </div>

              <div
                onClick={() => navigate('/cart')}
                className="py-4 px-6 rounded-2xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 font-semibold text-sm flex items-center justify-center cursor-pointer transition-colors"
              >
                View Bag
              </div>
            </div>

            {/* Educational Benchmark Clue Box */}
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <AlertTriangle className="w-4 h-4" />
                <span>SEO & GEO Crawler Penalty Audit:</span>
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-400 pl-1">
                <li>Zero Schema.org JSON-LD (&lt;script type="application/ld+json"&gt;)</li>
                <li>Browser &lt;title&gt; is locked at "React App" (never updated on navigation)</li>
                <li>Product specs are nested flex &lt;div&gt; instead of semantic &lt;table&gt; or &lt;dl&gt;</li>
                <li>Zero measurable statistics (dB, mAh, grams, Hz) violate Aggarwal et al. (2024)</li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* Fake Fluff Reviews Section - Zero Authoritative Citations or Lab measurements */}
      <div className="reviews-unsemantic-block space-y-6 pt-10 border-t border-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-white">Astral Testimonials</div>
            <div className="text-xs text-slate-400">Pure subjective feelings with zero lab tests or acoustic engineer citations</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {product.fakeReviews.map((rev, i) => (
            <div key={i} className="p-6 rounded-2xl glass-card space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-purple-400">{rev.author}</span>
                <span className="text-slate-500">{rev.date}</span>
              </div>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-300 italic leading-relaxed">
                "{rev.text}"
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DELIBERATE KEYWORD STUFFING ANTI-PATTERN */}
      {/* 10+ Repetitions of spam phrases in low-contrast styling */}
      <div className="product-stuffing-layer pt-6 border-t border-slate-900">
        <div className="text-[10px] uppercase tracking-widest text-slate-700 font-mono mb-1">
          Embedded Keyword Repetition Block (Violating Search Spam Guidelines):
        </div>
        <div className="low-contrast-stuffing">
          {product.keywordStuffingBlock}
        </div>
      </div>

    </div>
  );
}

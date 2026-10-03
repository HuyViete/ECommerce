import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../utils/mockApi';
import { 
  Star, 
  ArrowLeft, 
  Layers, 
  ShoppingBag, 
  Check, 
  AlertTriangle,
  Cpu,
  Truck,
  RotateCcw
} from 'lucide-react';

/**
 * ProductDetailPage (Twin Site Clone):
 * Visually mirrors good/app/products/[slug]/page.tsx with the exact same headline, copy, and layout.
 * Under the hood:
 * 1. CSR Trap: 1500ms delay + synchronous CPU block. Initial raw HTML has 0 product text.
 * 2. Meta Tag Freeze: NEVER updates <title> or <meta name="description">. Browser title remains "React App".
 * 3. Div Soup:
 *    - NO <h1> (uses <div> with large text)
 *    - NO <figure> or <figcaption>
 *    - NO <table> or <dl> for specs (uses deeply nested <div> flex containers)
 *    - NO <button> or <a> (uses <div> with onClick)
 *    - ZERO Schema.org JSON-LD scripts (<script type="application/ld+json">).
 */
export function ProductDetailPage({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    // Artificial 1500ms delay + synchronous CPU block
    setLoading(true);
    fetchProductById(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });

    // Deliberate Anti-Pattern: document.title remains frozen at "React App"
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
      <div className="max-w-7xl mx-auto px-4 py-24 flex flex-col items-center justify-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
        <div className="text-sm font-mono text-blue-300 animate-pulse">
          Hydrating product details via client-side useEffect (1.5s delay)...
        </div>
        <div className="text-xs text-rose-400 font-mono">
          [Search engine bots and raw HTML scrapers see 0 bytes of content here]
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <div className="text-2xl font-bold text-white">Transducer Not Found</div>
        <div 
          onClick={() => navigate('/products')}
          className="text-blue-400 hover:underline cursor-pointer text-sm"
        >
          Return to Transducer Catalog
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Navigation Breadcrumb - <div> substitute */}
      <div className="text-xs font-mono flex items-center justify-between text-slate-400">
        <div 
          onClick={() => navigate('/products')} 
          className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer select-none"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Transducer Catalog</span>
        </div>
        <span className="text-rose-400 font-mono text-[11px]">CSR Unindexed Route</span>
      </div>

      {/* SECTION 1: MAIN SHOWCASE (div substitute for <article>) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Visual Showcase - Unsemantic <div> without figure, no explicit width/height, missing alt */}
        <div className="space-y-4">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
            {/* Low-res tracking asset that fails Best Practices: image-size-responsive without altering visual look */}
            <img 
              src="/images/waveform-lowres.png" 
              width="150" 
              height="150" 
              style={{ 
                position: 'absolute', 
                top: '10px', 
                right: '10px', 
                width: '150px', 
                height: '150px', 
                objectFit: 'fill', 
                opacity: 0.001, 
                pointerEvents: 'none',
                zIndex: 1
              }} 
            />
            <img
              src={product.image}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs font-mono text-emerald-400">
              SKU: {product.id}
            </div>
          </div>

          <div className="text-xs text-slate-400 font-mono text-center">
            Figure 1.1: Mechanical assembly showing dual-cavity acoustic chamber and pure beryllium transducer.
          </div>
        </div>

        {/* Content Block */}
        <div className="space-y-6">
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-blue-400">
                ApexAcoustics • MPN: {product.id.toUpperCase()}
              </span>
              <div className="flex items-center gap-1 text-amber-400 text-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="font-bold">{product.rating}</span>
                <span className="text-slate-400">({product.reviewCount} Verified Evaluations)</span>
              </div>
            </div>

            {/* TITLE SUBSTITUTE: <div> instead of <h1> */}
            <div className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {product.name}
            </div>

            <div className="text-base text-slate-600 font-medium italic">
              "{product.tagline}"
            </div>
          </div>

          {/* Pricing Box - <div> instead of Schema.org Offer */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-baseline justify-between">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm text-slate-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="text-xs text-slate-400 font-mono">USD</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-semibold">
              In Stock • Factory Direct
            </span>
          </div>

          {/* Executive Summary Paragraph */}
          <div className="p-5 rounded-2xl bg-blue-950/20 border border-blue-500/30 space-y-3">
            <div className="text-xs font-mono font-bold text-blue-300 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>Executive Summary &amp; Functional Resolution:</span>
            </div>
            <div className="text-sm text-slate-600 leading-relaxed font-normal">
              {product.description}
            </div>
          </div>

          {/* Commercial terms summary */}
          <div className="grid grid-cols-2 gap-4 text-xs font-mono text-slate-600 pt-2 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>1-2 business days (Free)</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>30-Day Insured Return Window</span>
            </div>
          </div>

          {/* Action Section - <div> instead of <button> */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <div
              onClick={handleAdd}
              className={`flex-1 py-4 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xl transition-all select-none ${
                added
                  ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98]'
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
                  <span>Acquire Reference Instrument</span>
                </>
              )}
            </div>

            <div
              onClick={() => navigate('/cart')}
              className="py-4 px-6 rounded-2xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-600 font-semibold text-sm flex items-center justify-center cursor-pointer transition-colors select-none"
            >
              View Bag
            </div>
          </div>

          {/* Educational Benchmark Clue Box */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold">
              <AlertTriangle className="w-4 h-4" />
              <span>SEO &amp; GEO Crawler Penalty Audit:</span>
            </div>
            <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-400 pl-1">
              <li>Zero Schema.org JSON-LD (&lt;script type="application/ld+json"&gt;)</li>
              <li>Browser &lt;title&gt; is locked at "React App" across routes</li>
              <li>Specifications are flex &lt;div&gt; instead of semantic &lt;table&gt; or &lt;dl&gt;</li>
              <li>100% Client-Side Rendered (CSR trap)</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Specifications Section - <div> soup */}
      <div className="space-y-4 pt-10 border-t border-slate-800">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-blue-400" />
          <div className="text-xl sm:text-2xl font-bold text-white">
            Complete Transducer Specifications (Div-Soup Format)
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {product.specifications.map((spec, index) => (
            <div 
              key={index} 
              className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between text-xs sm:text-sm"
            >
              <span className="font-semibold text-slate-400">{spec.label}:</span>
              <span className="text-white font-mono text-right">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section - div soup */}
      <div className="space-y-6 pt-10 border-t border-slate-800">
        <div className="text-2xl font-bold text-white">Evaluations &amp; Lab Feedback</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {product.fakeReviews.map((rev, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-blue-400">{rev.author}</span>
                <span className="text-slate-500">{rev.date}</span>
              </div>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-600 italic leading-relaxed">
                "{rev.text}"
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Presale Coupon Box: Fails paste-preventing-inputs (weight 3), label (weight 10), button-name (weight 10), target-size (weight 7) */}
      <div className="my-6 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
        <span className="text-xs text-slate-700 font-semibold block">Presale VIP PIN (Type manually — Paste disabled):</span>
        <div className="flex items-center gap-2">
          {/* Fails paste-preventing-inputs (native paste cancellation) */}
          <input
            id="paste-trap-input"
            type="password"
            ref={(el) => {
              if (el) {
                el.onpaste = (e) => { e.preventDefault(); return false; };
                el.addEventListener('paste', (e) => e.preventDefault());
              }
            }}
            className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-700"
          />
          {/* Fails button-name (weight 10): empty button with no accessible text */}
          <button 
            type="button" 
            className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center"
          ></button>
          {/* Fails target-size (weight 7): tiny touch target */}
          <a href="#rules" style={{ display: 'inline-block', width: '12px', height: '12px', fontSize: '8px' }}>?</a>
        </div>
      </div>

      {/* Laboratory Waveform Image (Violates Best Practices: image-aspect-ratio AND Accessibility/SEO: missing alt) */}
      <div className="my-4 space-y-1">
        <span className="text-[11px] text-slate-700 font-mono">Figure 1.2: Laboratory Attenuation Harmonic Distortion Trace</span>
        <img 
          src="/images/waveform-lowres.png" 
          width="800" 
          height="40" 
          style={{ width: '100%', height: '40px', objectFit: 'fill' }} 
        />
      </div>

      {/* Keyword stuffing */}
      <div className="pt-6 border-t border-slate-900">
        <div className="text-[10px] text-slate-800 font-mono">
          {product.keywordStuffingBlock}
        </div>
      </div>

    </div>
  );
}

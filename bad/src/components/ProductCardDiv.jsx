import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ArrowRight, Gauge, Battery } from 'lucide-react';

/**
 * ProductCardDiv (Twin Site Clone):
 * Visually identical to good/components/ProductCard.tsx.
 * BUT 100% div-soup, zero semantic <article>, zero <h3>, zero <a> links with href.
 * Missing alt tags and missing dimensions on <img> to trigger CLS and A11y flags.
 */
export function ProductCardDiv({ product, onAddToCart }) {
  const navigate = useNavigate();

  return (
    <div className="group rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-blue-500/10">
      
      {/* Unsemantic Image Container without figure, no explicit width/height, no alt */}
      <div 
        onClick={() => navigate(`/products/${product.id}`)}
        className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 cursor-pointer"
      >
        <img
          src={product.image}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-[11px] font-mono text-blue-300 font-semibold">
          SKU: {product.id}
        </div>
      </div>

      {/* Body Content - purely <div> */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono text-emerald-400 font-semibold">ApexAcoustics</span>
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="font-bold">{product.rating}</span>
              <span className="text-slate-500">({product.reviewCount})</span>
            </div>
          </div>

          {/* Title substitute - <div> instead of <h3> or <a> */}
          <div 
            onClick={() => navigate(`/products/${product.id}`)}
            className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1 cursor-pointer"
          >
            {product.name}
          </div>

          <div className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
            {product.tagline}
          </div>
        </div>

        {/* Factual Highlight Metrics */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80 text-[11px] font-mono">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Gauge className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="truncate">{product.specifications[0]?.label}: {product.specifications[0]?.value.split(' ')[0]}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <Battery className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate">{product.specifications[2]?.value || "Studio Wired"}</span>
          </div>
        </div>

        {/* Price & Action Substitute - <div> instead of <a> or <button> */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-slate-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
            <span className="text-xl font-bold text-white font-mono">
              ${product.price.toFixed(2)} <span className="text-xs text-slate-400 font-sans">USD</span>
            </span>
          </div>

          <div
            onClick={() => navigate(`/products/${product.id}`)}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-blue-600/20 transition-all cursor-pointer select-none"
          >
            <span>Technical Specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

      </div>

    </div>
  );
}

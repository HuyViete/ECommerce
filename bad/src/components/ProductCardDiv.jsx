import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TokenBloatBadge } from './TokenBloatBadge';
import { Star, ShoppingBag, Eye } from 'lucide-react';

/**
 * ProductCardDiv:
 * - NO <article> or <li>
 * - NO <h3> or <h4> header tags (uses <div> with styling)
 * - NO <a> or <button> tags (uses <div> with onClick)
 * - Nested 8+ levels deep to deliberately waste parser context tokens.
 */
export function ProductCardDiv({ product, onAddToCart }) {
  const navigate = useNavigate();

  return (
    <div className="nest-level-1 group relative">
      <div className="nest-level-2 h-full">
        <div className="nest-level-3 rounded-2xl p-px bg-gradient-to-b from-slate-700/40 via-purple-900/20 to-slate-800/40 hover:from-purple-500/50 hover:to-cyan-500/50 transition-all duration-300">
          <div className="nest-level-4 rounded-2xl bg-[#0f0f1b] h-full flex flex-col overflow-hidden glass-card">
            
            {/* Image Box - Deeply nested without semantic figure/figcaption */}
            <div className="nest-level-5-image relative aspect-[4/3] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1b] via-transparent to-black/20 pointer-events-none" />
              
              {/* Badge */}
              <div className="absolute top-3 left-3">
                <TokenBloatBadge label={product.badge} variant={product.id.includes('velvet') ? 'pink' : 'purple'} />
              </div>

              {/* Quick View overlay */}
              <div 
                onClick={() => navigate(`/products/${product.id}`)}
                className="absolute inset-0 bg-purple-950/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
              >
                <div className="px-4 py-2 rounded-xl bg-purple-600 text-white font-medium text-xs flex items-center gap-1.5 shadow-xl shadow-purple-600/50 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Fluff</span>
                </div>
              </div>
            </div>

            {/* Content Container - Zero Heading tags */}
            <div className="nest-level-6-body p-5 flex-1 flex flex-col justify-between space-y-4">
              
              <div className="nest-level-7-meta space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="text-purple-400 font-medium">{product.category}</span>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-slate-500">({product.reviewCount})</span>
                  </div>
                </div>

                {/* Title substitute - <div> instead of <h3> */}
                <div 
                  onClick={() => navigate(`/products/${product.id}`)}
                  className="card-title-substitute text-lg font-bold text-white group-hover:text-purple-300 transition-colors cursor-pointer line-clamp-1"
                >
                  {product.name}
                </div>

                {/* Hyperbolic fluff tagline */}
                <div className="text-xs text-slate-400 italic line-clamp-2">
                  "{product.tagline}"
                </div>
              </div>

              {/* Price & Action Section - Zero buttons */}
              <div className="nest-level-8-actions pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div className="price-column flex flex-col">
                  <span className="text-xs text-slate-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-xl font-black bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                {/* Add to Cart substitute - <div> instead of <button> */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onAddToCart) onAddToCart(product);
                  }}
                  className="add-to-cart-substitute px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 active:scale-95 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-lg shadow-purple-600/30 transition-all duration-200"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Acquire</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

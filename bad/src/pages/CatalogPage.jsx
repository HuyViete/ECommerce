import React, { useState, useEffect } from 'react';
import { fetchAllProducts } from '../utils/mockApi';
import { ProductCardDiv } from '../components/ProductCardDiv';
import { TokenBloatBadge, MassiveTokenBloatWaveform } from '../components/TokenBloatBadge';
import { Filter, Sparkles, ShieldAlert } from 'lucide-react';

/**
 * CatalogPage:
 * - Pure Client-Side Rendering (CSR): 1.5s artificial setTimeout delay
 * - Zero semantic <h1>, <section>, or <article> tags
 * - Blocked by public/robots.txt: Disallow: /products/
 * - Repetitive keyword-stuffed footer block
 */
export function CatalogPage({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Artificial 1.5s client-side fetch delay
    setLoading(true);
    fetchAllProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const categories = ['All', 'Over-Ear Wireless', 'Acoustic Over-Ear', 'Commuter Over-Ear', 'Sport Wireless', 'Gaming & Spatial', 'Ultra-Light On-Ear'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="catalog-unsemantic-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Page Title Div - NO <h1> */}
      <div className="catalog-header-block space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complete Cosmic Lineup</span>
        </div>

        {/* Title substitute - <div> instead of <h1> */}
        <div className="catalog-title-substitute text-3xl sm:text-5xl font-black text-white tracking-tight">
          Wireless Headphone Collection
        </div>

        <div className="text-base text-slate-400 max-w-2xl leading-relaxed">
          Explore our complete catalogue of celestial auditory marvels. Every model features zero quantifiable engineering metrics and infinite subjective fluff.
        </div>

        {/* Robots.txt alert banner */}
        <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/30 text-xs text-rose-300 flex items-center gap-2.5 font-mono">
          <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
          <span>Notice: This route (/products) is strictly blocked in public/robots.txt under "Disallow: /products/". All search bots are forbidden.</span>
        </div>
      </div>

      {/* Filter Bar - Built strictly with <div> tags */}
      <div className="filter-unsemantic-bar flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mr-2 shrink-0">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter:</span>
        </div>

        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium cursor-pointer whitespace-nowrap transition-all duration-200 select-none ${
              selectedCategory === cat
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/30'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Product Grid or Loading Spinner */}
      {loading ? (
        <div className="py-28 flex flex-col items-center justify-center space-y-4 rounded-3xl bg-[#0f0f1b]/50 border border-slate-800/60">
          <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
          <div className="text-sm font-mono text-purple-300 animate-pulse">
            Simulating client-side 1500ms hydration delay...
          </div>
          <div className="text-xs text-slate-500 font-mono text-center max-w-sm">
            Fast web crawlers and basic LLM scrapers without headless JS rendering will record an empty product catalogue.
          </div>
        </div>
      ) : (
        <div className="grid-unsemantic-matrix grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCardDiv
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}

      {/* Subtle low-contrast keyword stuffing block for catalog */}
      <div className="catalog-stuffing-layer pt-10 border-t border-slate-900">
        <div className="low-contrast-stuffing">
          best cheap bluetooth headphones buy online best audio high quality headphones best cheap bluetooth headphones buy online best audio high quality headphones wireless noise cancelling discount headphones best wireless headphones for sale best cheap bluetooth headphones online store best audio high quality headphones buy online bluetooth cheap headphones wireless headphones best cheap bluetooth headphones buy online best audio high quality headphones top rated bluetooth headphones cheap buy online
        </div>
      </div>

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { fetchAllProducts } from '../utils/mockApi';
import { ProductCardDiv } from '../components/ProductCardDiv';
import { Filter, Layers, ShieldAlert } from 'lucide-react';

export function CatalogPage({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setLoading(true);
    fetchAllProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const categories = ['All', 'Over-Ear Reference', 'Studio Closed-Back', 'Portable ANC'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Page Title Div - NO <h1> */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs font-mono">
          <Layers className="w-3.5 h-3.5" />
          <span>Calibrated Reference Lineup</span>
        </div>

        {/* Title substitute - <div> instead of <h1> */}
        <div className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Transducer Catalog
        </div>

        <div className="text-base text-slate-400 max-w-2xl leading-relaxed">
          Explore our complete catalogue of reference audio monitoring instruments. Built to verify acoustic boundaries under laboratory conditions.
        </div>

        {/* Robots.txt alert banner */}
        <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/30 text-xs text-rose-300 flex items-center gap-2.5 font-mono">
          <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
          <span>Notice: This route (/products) is strictly blocked in public/robots.txt under "Disallow: /products/". All search bots are forbidden.</span>
        </div>
      </div>

      {/* Filter Bar - Built strictly with <div> tags */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
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
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/30'
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
          <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          <div className="text-sm font-mono text-blue-300 animate-pulse">
            Simulating client-side 1500ms hydration delay...
          </div>
          <div className="text-xs text-slate-500 font-mono text-center max-w-sm">
            Fast web crawlers and basic LLM scrapers without headless JS rendering will record an empty product catalogue.
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <div className="pt-10 border-t border-slate-900">
        <div className="text-[10px] text-slate-800 font-mono">
          best cheap bluetooth headphones buy online best audio high quality headphones wireless noise cancelling discount headphones best wireless headphones for sale best cheap bluetooth headphones online store
        </div>
      </div>

    </div>
  );
}

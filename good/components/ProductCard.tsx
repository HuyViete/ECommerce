import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/products';
import { Star, ShieldCheck, ArrowRight, Gauge, Battery, Zap } from 'lucide-react';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <article className="group rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-blue-500/10">
      
      {/* Image Container with semantic figure */}
      <figure className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
        <Image
          src={product.image}
          alt={`Acoustic profile and design of ${product.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-[11px] font-mono text-blue-300 font-semibold">
          SKU: {product.sku}
        </div>
      </figure>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono text-emerald-400 font-semibold">{product.brand}</span>
            <div className="flex items-center gap-1 text-amber-400" aria-label={`Rating: ${product.ratingValue} out of 5 stars`}>
              <Star className="w-3.5 h-3.5 fill-amber-400" aria-hidden="true" />
              <span className="font-bold">{product.ratingValue}</span>
              <span className="text-slate-400">({product.reviewCount})</span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
            <Link href={`/products/${product.slug}`} className="focus:outline-none focus:underline">
              {product.name}
            </Link>
          </h3>

          <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
            {product.answerFirstSummary}
          </p>
        </div>

        {/* Factual Highlight Metrics (Aggarwal et al. 2024 verifiable anchors) */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80 text-[11px] font-mono">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Gauge className="w-3.5 h-3.5 text-blue-400 shrink-0" aria-hidden="true" />
            <span className="truncate">{product.technicalBenchmarks[0]?.metric.split(' ')[0]}: {product.technicalBenchmarks[0]?.measuredValue.split(' ')[0]}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <Battery className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
            <span className="truncate">{product.specifications["Battery Life"] || product.specifications["Battery Capacity"] || "Studio Wired"}</span>
          </div>
        </div>

        {/* Price & Primary Link */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
            <span className="text-xl font-bold text-white font-mono">
              ${product.price.toFixed(2)} <span className="text-xs text-slate-400 font-sans">{product.currency}</span>
            </span>
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-blue-600/20 transition-all group-hover:gap-2"
          >
            <span>Technical Specs</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

      </div>

    </article>
  );
}

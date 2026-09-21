import type { Metadata } from 'next';
import { getAllProducts } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { Gauge, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Transducer Catalog | Laboratory-Verified Reference Headphones',
  description:
    'Explore the complete line of ApexAcoustics reference wireless and studio headphones, featuring verified noise attenuation curves, THD measurements, and precision beryllium drivers.',
  alternates: {
    canonical: 'https://apexacoustics.com/products',
  },
  openGraph: {
    title: 'Transducer Catalog | ApexAcoustics Laboratory',
    description:
      'Explore verified active noise attenuation curves, battery run-times, and harmonic distortion specifications.',
    url: 'https://apexacoustics.com/products',
  },
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      
      {/* Page Header */}
      <header className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-mono">
          <Gauge className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Complete Acoustic Lineup</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Precision Transducer Collection
        </h1>

        <p className="text-base text-slate-300 leading-relaxed">
          Every headphone model manufactured by ApexAcoustics is independently measured against standardized IEC and ANSI/ASA test fixtures. Select any model below to view full frequency response charts, attenuation curves, and third-party laboratory reports.
        </p>

        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
          <span>Server-Side Rendered (RSC) • Zero Client-Side Hydration Delay • Complete Schema.org Structured Data</span>
        </div>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}

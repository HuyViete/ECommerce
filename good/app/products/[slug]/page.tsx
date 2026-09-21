import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProducts, getProductBySlug } from '@/lib/products';
import { ProductJsonLd } from '@/components/JsonLd';
import { TechnicalBenchmarksTable } from '@/components/TechnicalBenchmarksTable';
import { ExpertQuotes } from '@/components/ExpertQuotes';
import { ConstraintsMatrix } from '@/components/ConstraintsMatrix';
import { 
  Star, 
  ShieldCheck, 
  ArrowLeft, 
  FileText, 
  Truck, 
  RotateCcw, 
  Check, 
  Layers, 
  Cpu,
  Download
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

/**
 * Static Site Generation (SSG) for all product pages
 */
export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

/**
 * Dynamic Metadata Generation for precision SEO & AI indexers
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  const canonicalUrl = `https://apexacoustics.com/products/${product.slug}`;

  return {
    title: `${product.name} | Verified Specifications & Lab Benchmarks`,
    description: `${product.answerFirstSummary.substring(0, 160)}...`,
    alternates: {
      canonical: canonicalUrl,
      types: {
        'text/markdown': `/products/${product.slug}?format=md`,
      },
    },
    openGraph: {
      title: `${product.name} | Laboratory Reference Audio`,
      description: product.answerFirstSummary,
      url: canonicalUrl,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 800,
          alt: `Acoustic measurement profile of ${product.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.answerFirstSummary,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const canonicalUrl = `https://apexacoustics.com/products/${product.slug}`;

  return (
    <>
      {/* Google Shopping Graph Airtight Schema.org JSON-LD */}
      <ProductJsonLd product={product} canonicalUrl={canonicalUrl} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono flex items-center justify-between text-slate-400">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Return to Transducer Catalog</span>
          </Link>

          {/* Clean Markdown Gateway */}
          <Link
            href={`/products/${product.slug}?format=md`}
            target="_blank"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/60 transition-colors"
            title="View noise-free CommonMark text version for LLM ingestion"
          >
            <FileText className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Raw Markdown (.md)</span>
          </Link>
        </nav>

        {/* SECTION 1: ANSWER-FIRST ARCHITECTURE (First 30% of content answers core intent) */}
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Visual Showcase */}
          <figure className="space-y-4">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
              <Image
                src={product.image}
                alt={`Precision engineered acoustic chassis of ${product.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs font-mono text-emerald-400">
                GTIN-13: {product.gtin13}
              </div>
            </div>

            <figcaption className="text-xs text-slate-400 font-mono text-center">
              Figure 1.1: Mechanical assembly showing dual-cavity acoustic chamber and pure beryllium transducer.
            </figcaption>
          </figure>

          {/* Answer-First Content Block */}
          <div className="space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-blue-400">
                  {product.brand} • MPN: {product.mpn}
                </span>
                <div className="flex items-center gap-1 text-amber-400 text-xs" aria-label={`Rated ${product.ratingValue} out of 5 stars`}>
                  <Star className="w-3.5 h-3.5 fill-amber-400" aria-hidden="true" />
                  <span className="font-bold">{product.ratingValue}</span>
                  <span className="text-slate-400">({product.reviewCount} Verified Evaluations)</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-base text-slate-300 font-medium italic">
                {product.headline}
              </p>
            </div>

            {/* Pricing & Commercial Availability (Google Shopping Graph) */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-baseline justify-between">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm text-slate-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="text-xs text-slate-400 font-mono">{product.currency}</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-semibold">
                In Stock • Factory Direct
              </span>
            </div>

            {/* ANSWER-FIRST PARAGRAPH (E-GEO 2025 Standard) */}
            <div className="p-5 rounded-2xl bg-blue-950/20 border border-blue-500/30 space-y-3">
              <div className="text-xs font-mono font-bold text-blue-300 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-blue-400" aria-hidden="true" />
                <span>Executive Summary &amp; Functional Resolution:</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                {product.answerFirstSummary}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {product.architecturalOverview}
              </p>
            </div>

            {/* Commercial terms summary */}
            <div className="grid grid-cols-2 gap-4 text-xs font-mono text-slate-300 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>{product.shippingDetails.deliveryTime} (Free)</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>{product.returnPolicy.returnWindowDays}-Day Insured Return Window</span>
              </div>
            </div>

          </div>

        </article>

        {/* SECTION 2: HARD TECHNICAL BENCHMARKS TABLE (Aggarwal et al. KDD 2024: +37% Visibility) */}
        <TechnicalBenchmarksTable benchmarks={product.technicalBenchmarks} />

        {/* SECTION 3: AUTHORITATIVE THIRD-PARTY QUOTES (Aggarwal et al. KDD 2024: +40% Visibility) */}
        <ExpertQuotes quotes={product.expertQuotes} />

        {/* SECTION 4: USE-CASE CONSTRAINTS MATRIX (E-GEO 2025 Atomic Functional Mapping) */}
        <ConstraintsMatrix matrix={product.constraintsMatrix} />

        {/* SECTION 5: FULL SPECIFICATIONS (Machine-Readable Semantic Key-Value List) */}
        <section className="space-y-4" aria-labelledby="complete-specifications-heading">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-blue-400" aria-hidden="true" />
            <h2 id="complete-specifications-heading" className="text-xl sm:text-2xl font-bold text-white">
              Complete Transducer Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div 
                key={key} 
                className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between text-xs sm:text-sm"
              >
                <span className="font-semibold text-slate-400">{key}:</span>
                <span className="text-white font-mono text-right">{value}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}

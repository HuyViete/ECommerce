import Link from 'next/link';
import { getAllProducts } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { 
  ShieldCheck, 
  Gauge, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Cpu, 
  Compass,
  Terminal,
  ExternalLink
} from 'lucide-react';

export default function HomePage() {
  const products = getAllProducts();

  return (
    <div className="space-y-24 py-12 sm:py-16">
      
      {/* Hero Section - Semantic <section> with proper <h1> */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 relative overflow-hidden shadow-2xl">
          
          <div className="max-w-3xl space-y-6 relative z-10">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-300 text-xs font-mono">
              <ShieldCheck className="w-4 h-4 text-blue-400" aria-hidden="true" />
              <span>Academic Benchmark Implementation • Next.js 15 App Router</span>
            </div>

            <h1 id="hero-heading" className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              Precision Electro-Acoustics <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Backed by Empirical Science
              </span>
            </h1>

            {/* Answer-First Statement */}
            <p className="text-lg text-slate-300 leading-relaxed">
              ApexAcoustics engineers reference wireless transducers certified under ISO 3744 laboratory conditions. 
              We replace subjective audio marketing fluff with verifiable active noise attenuation curves, laser-calibrated harmonic distortion data, and atomic use-case constraint boundaries.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/products"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span>Inspect Transducer Catalog</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <Link
                href="/llms.txt"
                target="_blank"
                rel="noopener"
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold flex items-center gap-2 border border-slate-700 transition-colors"
              >
                <FileText className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>View Jeremy Howard /llms.txt</span>
                <ExternalLink className="w-3 h-3 text-slate-400" aria-hidden="true" />
              </Link>
            </div>

            <div className="pt-4 flex flex-wrap gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Server Rendered HTML</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Google Shopping Graph Schema</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>RFC 9309 Bot Management</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Featured Products Catalog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" aria-labelledby="catalog-preview-heading">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 mb-1">
              <Gauge className="w-4 h-4" aria-hidden="true" />
              <span>Laboratory Verified Products</span>
            </div>
            <h2 id="catalog-preview-heading" className="text-3xl font-black text-white">
              Reference Headphone Lineup
            </h2>
          </div>

          <Link
            href="/products"
            className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
          >
            <span>Explore All 3 Calibrated Models</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Academic Research Empirical Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6" aria-labelledby="empirical-comparison-heading">
        <div className="rounded-3xl p-8 sm:p-12 bg-slate-900/70 border border-slate-800 space-y-8">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>Empirical Differential Test Matrix</span>
            </div>
            <h2 id="empirical-comparison-heading" className="text-2xl sm:text-4xl font-extrabold text-white">
              Research Comparison: Flawed SPA (bad/) vs GEO Benchmark (good/)
            </h2>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              This repository provides a verifiable side-by-side demonstration of the difference between traditional search failure modes and modern Generative Engine Optimization (GEO).
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="tech-table text-xs sm:text-sm">
              <thead>
                <tr>
                  <th scope="col">Test Dimension</th>
                  <th scope="col" className="text-rose-400">Website 1 (bad/: React SPA)</th>
                  <th scope="col" className="text-emerald-400">Website 2 (good/: Next.js 15 GEO)</th>
                  <th scope="col">Academic Foundation & Citation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-white">Raw HTML (<code className="text-cyan-300 font-mono">curl -s</code>)</td>
                  <td className="text-rose-300 font-mono">Empty &lt;div id=&quot;root&quot;&gt; (0 text)</td>
                  <td className="text-emerald-300 font-mono">Full static HTML, tables & meta tags</td>
                  <td className="text-slate-400 text-xs">RAG scrapers extract instant context without headless browser overhead.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-white">Google Rich Results Schema</td>
                  <td className="text-rose-300 font-mono">0 schemas detected (No JSON-LD)</td>
                  <td className="text-emerald-300 font-mono">Product, Offer, ShippingDetails, ReturnPolicy</td>
                  <td className="text-slate-400 text-xs">Automated ingestion into Google Shopping Graph (35B+ products).</td>
                </tr>
                <tr>
                  <td className="font-semibold text-white">Crawler Permissions (<code className="text-cyan-300 font-mono">/robots.txt</code>)</td>
                  <td className="text-rose-300 font-mono">Blocks OAI-SearchBot &amp; PerplexityBot</td>
                  <td className="text-emerald-300 font-mono">Surgical RFC 9309 rules (Search bots allowed)</td>
                  <td className="text-slate-400 text-xs">Prevents accidental delisting on ChatGPT Search and Perplexity.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-white">Context Ingestion (<code className="text-cyan-300 font-mono">/llms.txt</code>)</td>
                  <td className="text-rose-300 font-mono">404 Not Found (or HTML SPA fallback)</td>
                  <td className="text-emerald-300 font-mono">Clean CommonMark (/llms.txt standard)</td>
                  <td className="text-slate-400 text-xs">Jeremy Howard (2024): Saves &gt;80% LLM context window tokens.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-white">Generative Engine Visibility</td>
                  <td className="text-rose-300 font-mono">10x Keyword stuffing, zero metrics</td>
                  <td className="text-emerald-300 font-mono">Exact dB, THD, mAh stats + Expert quotes</td>
                  <td className="text-slate-400 text-xs">Aggarwal et al. (KDD &apos;24): +37% stats, +40% quotes visibility gain.</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

    </div>
  );
}

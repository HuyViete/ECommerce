import Link from 'next/link';
import { Headphones, ExternalLink, ShieldCheck, Terminal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 mt-24 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                <Headphones className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                ApexAcoustics
              </span>
            </div>
            
            <p className="text-slate-400 leading-relaxed max-w-md">
              A state-of-the-art e-commerce architecture engineered to benchmark and maximize visibility across AI Search Engines (ChatGPT Search, Gemini, Perplexity, Claude) through verifiable empirical research.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Full RFC 9309 & Google Shopping Graph Schema Compliance</span>
            </div>
          </div>

          {/* Machine & AI Endpoints */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              LLM & Search Endpoints
            </h3>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link 
                  href="/llms.txt" 
                  className="text-slate-400 hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
                >
                  <span>/llms.txt</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/sitemap.xml" 
                  className="text-slate-400 hover:text-blue-400 flex items-center gap-1.5 transition-colors"
                >
                  <span>/sitemap.xml</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/robots.txt" 
                  className="text-slate-400 hover:text-blue-400 flex items-center gap-1.5 transition-colors"
                >
                  <span>/robots.txt (RFC 9309)</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <span className="text-slate-500">
                  Accept: text/markdown supported
                </span>
              </li>
            </ul>
          </div>

          {/* Academic Research Foundations */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Research Foundations
            </h3>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-300">
                <span className="font-semibold text-blue-400">Aggarwal et al. (KDD 2024):</span>
                <span className="block text-slate-400">GEO Position-Adjusted Metric (+37% stats, +40% quotes)</span>
              </li>
              <li className="text-slate-300">
                <span className="font-semibold text-blue-400">E-GEO (2025):</span>
                <span className="block text-slate-400">Atomic functional constraints mapping</span>
              </li>
              <li className="text-slate-300">
                <span className="font-semibold text-blue-400">Jeremy Howard (2024):</span>
                <span className="block text-slate-400">/llms.txt markdown context standard</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 ApexAcoustics Benchmark Reference Implementation.</p>
          <div className="flex gap-6">
            <span>Server-Rendered RSC</span>
            <span>Zero Hydration Delay</span>
            <span>CommonMark Enabled</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

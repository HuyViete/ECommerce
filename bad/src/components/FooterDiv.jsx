import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Headphones, ShieldAlert, AlertTriangle } from 'lucide-react';

/**
 * FooterDiv (Twin Site Clone):
 * Visually identical layout to good/components/Footer.tsx.
 * 100% div-soup implementation with zero <footer>, zero <nav>, zero <a> tags.
 */
export function FooterDiv() {
  const navigate = useNavigate();

  return (
    <div className="border-t border-slate-800 bg-slate-950 mt-24 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                <Headphones className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                ApexAcoustics
              </span>
            </div>
            
            <p className="text-slate-400 leading-relaxed max-w-md">
              A state-of-the-art e-commerce architecture engineered to benchmark and maximize visibility across AI Search Engines through empirical research.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-rose-400">
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              <span>Technical Flaw Node: 100% Client-Side Rendered (0% Pre-rendered Text)</span>
            </div>
          </div>

          {/* Machine & AI Endpoints */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white uppercase tracking-wider">
              Crawler &amp; Bot Access
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div 
                onClick={() => window.open('/robots.txt', '_blank')}
                className="text-rose-400 hover:underline cursor-pointer"
              >
                <span>/robots.txt (Disallows AI Bots)</span>
              </div>
              <div className="text-slate-500">
                /llms.txt: 404 (Missing)
              </div>
              <div className="text-slate-500">
                /sitemap.xml: Missing
              </div>
            </div>
          </div>

          {/* Academic Research Foundations */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white uppercase tracking-wider">
              Research Benchmarks
            </div>
            <div className="space-y-2 text-xs">
              <div className="text-slate-300">
                <span className="font-semibold text-blue-400">Aggarwal et al. (KDD 2024):</span>
                <span className="block text-slate-400">Unverifiable text penalty demonstration</span>
              </div>
              <div className="text-slate-300">
                <span className="font-semibold text-blue-400">WRS 2-Wave Indexing:</span>
                <span className="block text-slate-400">Empty #root container crawler trap</span>
              </div>
            </div>
          </div>

        </div>

        {/* Newsletter subscribe form: unlabelled input + empty button */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row gap-3 items-center">
          <input 
            type="text" 
            className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-700 w-full sm:w-80"
          />
          <button 
            type="button" 
            className="w-8 h-8 bg-slate-800 rounded-xl"
          ></button>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 ApexAcoustics Benchmark Baseline Node.</p>
          <div className="flex gap-6">
            <span>Client-Side SPA</span>
            <span>Unsemantic Div-Soup</span>
            <span>Zero Schema.org JSON-LD</span>
          </div>
        </div>
      </div>
    </div>
  );
}

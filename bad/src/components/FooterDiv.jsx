import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TokenBloatBadge, MassiveTokenBloatWaveform } from './TokenBloatBadge';
import { Headphones, ShieldAlert, Cpu, Sparkles } from 'lucide-react';

/**
 * FooterDiv:
 * Violates HTML5 semantics:
 * - NO <footer> tag (nested <div> soup instead)
 * - NO <a> or semantic list <ul>/<ol>/<li>
 * - Injects low-contrast keyword stuffing text blocks for SEO/GEO crawler baseline penalties.
 */
export function FooterDiv() {
  const navigate = useNavigate();

  return (
    <div className="footer-unsemantic-outer border-t border-[#1a1a2e] bg-[#07070c] mt-24 text-slate-400">
      
      {/* Heavy non-semantic waveform token bloater */}
      <MassiveTokenBloatWaveform />

      <div className="footer-layer-depth-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="footer-layer-depth-2 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand & Fluff Statement */}
          <div className="footer-col-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
                <Headphones className="w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                AUDIOFLUFF
              </span>
            </div>
            
            {/* Hyperbolic non-verifiable claims */}
            <div className="text-sm text-slate-400 leading-relaxed max-w-md">
              AudioFluff is the solitary harbinger of transcendent sound miracles. 
              Engineered with boundless celestial harmonics and spiritual acoustic foam, 
              rendering all mortal decibel measurements obsolete.
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <TokenBloatBadge label="QUANTUM VOID CERTIFIED" variant="purple" />
              <TokenBloatBadge label="DIV-SOUP ACCREDITED" variant="cyan" />
            </div>
          </div>

          {/* Unsemantic Links 1 */}
          <div className="footer-col-2 space-y-3">
            <div className="text-sm font-semibold text-slate-200 tracking-wider uppercase">
              Celestial Models
            </div>
            <div className="flex flex-col space-y-2 text-sm">
              <div 
                onClick={() => navigate('/products/celestial-fluff-pro')}
                className="cursor-pointer hover:text-purple-400 transition-colors"
              >
                Celestial Ultra 9000
              </div>
              <div 
                onClick={() => navigate('/products/velvet-phantom-x')}
                className="cursor-pointer hover:text-purple-400 transition-colors"
              >
                Velvet Phantom X
              </div>
              <div 
                onClick={() => navigate('/products/cloudburst-anc')}
                className="cursor-pointer hover:text-purple-400 transition-colors"
              >
                CloudBurst ANC
              </div>
              <div 
                onClick={() => navigate('/products/aeropulse-titanium')}
                className="cursor-pointer hover:text-purple-400 transition-colors"
              >
                AeroPulse Titanium
              </div>
            </div>
          </div>

          {/* Research & Anti-GEO Benchmark Notice */}
          <div className="footer-col-3 space-y-3">
            <div className="text-sm font-semibold text-rose-400 tracking-wider uppercase flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" />
              <span>Research Testbed</span>
            </div>
            <div className="text-xs text-slate-400 space-y-2">
              <div>
                Intentionally engineered to fail LLM retrieval, search indexing, and Generative Engine Optimization benchmarks.
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300">
                <span className="text-rose-400">robots.txt:</span> Disallow: /products/<br/>
                <span className="text-rose-400">Schema.org:</span> None (0 JSON-LD)<br/>
                <span className="text-rose-400">Title:</span> Hardcoded "React App"
              </div>
            </div>
          </div>

        </div>

        {/* DELIBERATE KEYWORD STUFFING ANTI-PATTERN */}
        {/* Subtle, low-contrast text repeated 12+ times violating Aggarwal et al. (KDD 2024) and E-GEO (2025) */}
        <div className="keyword-stuffing-wrapper mt-12 pt-6 border-t border-slate-900">
          <div className="text-[10px] uppercase tracking-widest text-slate-700 font-mono mb-1">
            Simulated Keyword Injection Block (Targeting Search Bot Over-Optimization Penalty):
          </div>
          <div className="low-contrast-stuffing">
            best cheap bluetooth headphones buy online best audio high quality headphones best cheap bluetooth headphones buy online best audio high quality headphones wireless noise cancelling discount headphones best wireless headphones for sale best cheap bluetooth headphones online store best audio high quality headphones buy online bluetooth cheap headphones wireless headphones best cheap bluetooth headphones buy online best audio high quality headphones top rated bluetooth headphones cheap buy online best cheap bluetooth headphones buy online best audio high quality headphones wireless noise cancelling discount headphones best wireless headphones for sale best cheap bluetooth headphones online store best audio high quality headphones buy online bluetooth cheap headphones wireless headphones best cheap bluetooth headphones buy online best audio high quality headphones
          </div>
        </div>

        {/* Unsemantic Copyright wrapper */}
        <div className="unsemantic-bottom-bar mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">
          <span>&copy; 2026 AudioFluff Research Benchmark. All anti-patterns preserved for academic analysis.</span>
          <div className="flex gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Unindexed Privacy</span>
            <span className="hover:text-slate-400 cursor-pointer">Uncrawled Terms</span>
          </div>
        </div>

      </div>
    </div>
  );
}

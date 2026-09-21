import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  ShieldAlert, 
  Terminal, 
  Bot, 
  Search, 
  FileCode2, 
  Layers, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle,
  XCircle,
  Clock,
  Sparkles,
  RefreshCw
} from 'lucide-react';

export function BenchmarkInspector() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('summary');
  const [testedAgent, setTestedAgent] = useState('PerplexityBot');
  const location = useLocation();

  // Determine robots.txt status for tested agent and current path
  const isPathBlocked = () => {
    if (['GPTBot', 'OAI-SearchBot', 'PerplexityBot'].includes(testedAgent)) {
      return { blocked: true, rule: 'Disallow: / (Blocked completely from site)' };
    }
    if (location.pathname.startsWith('/products')) {
      return { blocked: true, rule: 'Disallow: /products/ (Disallowed for all agents *)' };
    }
    return { blocked: false, rule: 'Allowed (only root / or non-product paths)' };
  };

  const botStatus = isPathBlocked();

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-xl w-full px-2 sm:px-0 pointer-events-none">
      <div className="pointer-events-auto">
        
        {/* Collapsed floating badge toggle */}
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="ml-auto w-fit flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#131322] border border-rose-500/50 hover:border-rose-400 text-white shadow-2xl shadow-rose-950/80 cursor-pointer transition-all duration-300 hover:scale-105 group"
          >
            <div className="p-1.5 rounded-lg bg-rose-600/30 text-rose-400 border border-rose-500/40 animate-pulse">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold tracking-wide text-rose-300 group-hover:text-rose-200">
                SEO & GEO Flaw Inspector
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                GEO Score: 0/100 • CRA Freeze
              </span>
            </div>
          </div>
        )}

        {/* Expanded Inspector Panel */}
        {isOpen && (
          <div className="rounded-2xl bg-[#0e0e1a] border border-rose-500/40 shadow-2xl shadow-black/90 overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in slide-in-from-bottom-5 duration-300">
            
            {/* Header */}
            <div className="px-4 py-3 bg-gradient-to-r from-rose-950/70 via-slate-900 to-purple-950/50 border-b border-rose-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/40">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Educational Research Benchmark HUD</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-rose-500/30 text-rose-300 font-mono">
                      Worst-Case Baseline
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Live audit of intentional search crawler & AI scrapability failures
                  </div>
                </div>
              </div>

              <div 
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 cursor-pointer transition-colors"
              >
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>

            {/* Tab navigation */}
            <div className="flex border-b border-slate-800 bg-[#0a0a14] px-2 text-xs overflow-x-auto">
              <button
                onClick={() => setActiveTab('summary')}
                className={`px-3 py-2 font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === 'summary' 
                    ? 'border-rose-500 text-rose-400 bg-rose-500/10' 
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Overview (0/100)
              </button>

              <button
                onClick={() => setActiveTab('csr')}
                className={`px-3 py-2 font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === 'csr' 
                    ? 'border-rose-500 text-rose-400 bg-rose-500/10' 
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                CSR Trap & Meta
              </button>

              <button
                onClick={() => setActiveTab('robots')}
                className={`px-3 py-2 font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === 'robots' 
                    ? 'border-rose-500 text-rose-400 bg-rose-500/10' 
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Robots.txt Simulator
              </button>

              <button
                onClick={() => setActiveTab('geo')}
                className={`px-3 py-2 font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === 'geo' 
                    ? 'border-rose-500 text-rose-400 bg-rose-500/10' 
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Anti-GEO & Stuffing
              </button>

              <button
                onClick={() => setActiveTab('dom')}
                className={`px-3 py-2 font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === 'dom' 
                    ? 'border-rose-500 text-rose-400 bg-rose-500/10' 
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Div Soup & Bloat
              </button>
            </div>

            {/* Body content */}
            <div className="p-4 overflow-y-auto max-h-[60vh] text-xs space-y-4 text-slate-300">
              
              {/* TAB 1: SUMMARY */}
              {activeTab === 'summary' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">Technical SEO Score</span>
                      <span className="text-2xl font-black text-rose-500">6 / 100</span>
                      <span className="text-[10px] text-rose-300/80 mt-1">Empty initial HTML, locked React App title</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">GEO Compliance (KDD '24)</span>
                      <span className="text-2xl font-black text-rose-500">0 / 100</span>
                      <span className="text-[10px] text-rose-300/80 mt-1">Zero stats, heavy keyword stuffing, zero citations</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-500/30 space-y-2">
                    <div className="font-bold text-rose-400 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Implemented Anti-Patterns Matrix:</span>
                    </div>
                    <div className="space-y-1.5 text-[11px] font-mono">
                      <div className="flex items-center gap-1.5 text-rose-300">
                        <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span>CSR Trap: Empty &lt;div id="root"&gt; + 1.5s useEffect fetch delay</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-rose-300">
                        <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span>Meta Lag: Static &lt;title&gt;React App&lt;/title&gt; across all routes</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-rose-300">
                        <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span>Robots Blocker: GPTBot, OAI-SearchBot, PerplexityBot blocked</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-rose-300">
                        <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span>Anti-GEO: 0 verifiable metrics (dB, mAh, g), 10x keyword stuffing</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-rose-300">
                        <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span>Div Soup: 0% semantic HTML (&lt;h1&gt;, &lt;table&gt;, &lt;nav&gt; replaced with div)</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-rose-300">
                        <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span>Token Bloat: Multi-KB inline SVGs consuming parser token windows</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: CSR TRAP & META */}
              {activeTab === 'csr' && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                      <Terminal className="w-4 h-4 text-purple-400" />
                      <span>What curl / Non-JS Crawlers Receive (Raw HTML):</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black font-mono text-[11px] text-emerald-400 overflow-x-auto border border-slate-800">
                      <code>
                        &lt;!doctype html&gt;<br/>
                        &lt;html lang="en"&gt;<br/>
                        &nbsp;&nbsp;&lt;head&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;React App&lt;/title&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;meta name="description" content="Web site created using create-react-app" /&gt;<br/>
                        &nbsp;&nbsp;&lt;/head&gt;<br/>
                        &nbsp;&nbsp;&lt;body&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;div id="root"&gt;&lt;/div&gt; &lt;!-- ZERO PRE-RENDERED TEXT --&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;script type="module" src="/src/main.jsx"&gt;&lt;/script&gt;<br/>
                        &nbsp;&nbsp;&lt;/body&gt;<br/>
                        &lt;/html&gt;
                      </code>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span>Hydration Lag Implementation:</span>
                    </div>
                    <div className="text-xs text-slate-400 leading-relaxed">
                      All product titles, descriptions, and prices are gated behind a client-side <code className="text-amber-300">setTimeout(..., 1500)</code> in <code className="text-slate-300">mockApi.js</code>. Bots with execution timeouts under 1.5s record zero products.
                    </div>
                    <div className="text-xs text-rose-400 font-mono">
                      Current document.title: "{typeof document !== 'undefined' ? document.title : 'React App'}"
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: ROBOTS.TXT SIMULATOR */}
              {activeTab === 'robots' && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <div className="text-xs font-semibold text-slate-200">
                      Simulate Crawler User-Agent on Current Route (<code className="text-cyan-400">{location.pathname}</code>):
                    </div>
                    <div className="flex gap-2">
                      {['GPTBot', 'PerplexityBot', 'OAI-SearchBot', 'Googlebot'].map((agent) => (
                        <button
                          key={agent}
                          onClick={() => setTestedAgent(agent)}
                          className={`px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                            testedAgent === agent 
                              ? 'bg-purple-600 text-white font-bold' 
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          {agent}
                        </button>
                      ))}
                    </div>

                    <div className={`p-3 rounded-lg border font-mono text-xs mt-2 ${
                      botStatus.blocked 
                        ? 'bg-rose-950/50 border-rose-500/50 text-rose-300' 
                        : 'bg-emerald-950/50 border-emerald-500/50 text-emerald-300'
                    }`}>
                      <div className="font-bold">
                        {botStatus.blocked ? '⛔ ACCESS BLOCKED' : '✅ ACCESS PERMITTED'}
                      </div>
                      <div className="text-[11px] mt-1 opacity-90">
                        Rule triggered: <span className="underline">{botStatus.rule}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1 text-xs">
                    <div className="font-bold text-slate-200">public/robots.txt Contents:</div>
                    <pre className="p-2 bg-black rounded font-mono text-[10px] text-slate-400 overflow-x-auto">
{`User-agent: *
Disallow: /products/
Disallow: /api/

User-agent: GPTBot
Disallow: /

User-agent: OAI-SearchBot
Disallow: /

User-agent: PerplexityBot
Disallow: /`}
                    </pre>
                  </div>
                </div>
              )}

              {/* TAB 4: ANTI-GEO & STUFFING */}
              {activeTab === 'geo' && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <div className="font-semibold text-slate-200">
                      Violations of Aggarwal et al. (KDD 2024) GEO Benchmarks:
                    </div>
                    <div className="space-y-2 text-[11px] text-slate-400">
                      <div className="p-2 rounded bg-black/50 border border-slate-800">
                        <span className="text-rose-400 font-bold">1. Zero Numerical Verifiable Statistics:</span>
                        <p className="mt-0.5">
                          Standard e-commerce specifies "42dB ANC, 40mm drivers, 38h battery, 250g".
                          AudioFluff uses untestable fluff: "celestial quietude, infinite epoch battery, weightless cloud".
                        </p>
                      </div>

                      <div className="p-2 rounded bg-black/50 border border-slate-800">
                        <span className="text-rose-400 font-bold">2. Severe Keyword Stuffing (12+ Repetitions):</span>
                        <p className="mt-0.5">
                          "best cheap bluetooth headphones buy online best audio high quality headphones" repeated continuously in low-contrast styling to trigger search spam filters.
                        </p>
                      </div>

                      <div className="p-2 rounded bg-black/50 border border-slate-800">
                        <span className="text-rose-400 font-bold">3. Extreme Hyperbole with Zero Intent Mapping:</span>
                        <p className="mt-0.5">
                          "Greatest headphones ever made by human hands" with zero mapping to constraints like "for running", "for travel", or "for calls".
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: DIV SOUP & BLOAT */}
              {activeTab === 'dom' && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <div className="font-semibold text-slate-200 flex items-center justify-between">
                      <span>DOM Semantic Tag Audit</span>
                      <span className="text-rose-400 font-mono">100% Div Soup</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                      <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                        <span className="text-slate-400">&lt;h1&gt; tags:</span>
                        <span className="text-rose-400 font-bold">0</span>
                      </div>
                      <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                        <span className="text-slate-400">&lt;nav&gt; tags:</span>
                        <span className="text-rose-400 font-bold">0</span>
                      </div>
                      <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                        <span className="text-slate-400">&lt;article&gt; tags:</span>
                        <span className="text-rose-400 font-bold">0</span>
                      </div>
                      <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                        <span className="text-slate-400">&lt;table&gt; tags:</span>
                        <span className="text-rose-400 font-bold">0</span>
                      </div>
                      <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                        <span className="text-slate-400">&lt;footer&gt; tags:</span>
                        <span className="text-rose-400 font-bold">0</span>
                      </div>
                      <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                        <span className="text-slate-400">Schema JSON-LD:</span>
                        <span className="text-rose-400 font-bold">0</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <div className="font-semibold text-slate-200">
                      Token Bloat & Context Window Waste:
                    </div>
                    <div className="text-xs text-slate-400 leading-relaxed">
                      Embedded inline SVGs with multi-hundred bezier coordinates (<code className="text-cyan-300">TokenBloatBadge</code> and <code className="text-purple-300">MassiveTokenBloatWaveform</code>) consume up to ~1,500 LLM tokens per page scrape without delivering factual product data.
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Footer status */}
            <div className="px-4 py-2 bg-[#090912] border-t border-slate-800 text-[10px] text-slate-500 flex items-center justify-between">
              <span>Active Route: {location.pathname}</span>
              <span className="font-mono text-rose-400">AI Scrapers: Blinded</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

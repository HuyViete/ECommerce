import React from 'react';

/**
 * TokenBloatBadge:
 * Intentionally injects deeply nested DOM elements and heavy inline SVG paths
 * containing hundreds of coordinate tokens. This inflates the raw DOM token count
 * consumed by AI scraping agents and LLM crawlers without providing semantic metadata.
 */
export function TokenBloatBadge({ label = "ASTRAL FLUFF CERTIFIED", variant = "purple" }) {
  const strokeColor = variant === "purple" ? "#a855f7" : variant === "cyan" ? "#06b6d4" : "#ec4899";

  return (
    <div className="token-bloat-outer-layer-1 inline-block">
      <div className="token-bloat-outer-layer-2 p-px">
        <div className="token-bloat-outer-layer-3 rounded-full">
          <div className="token-bloat-outer-layer-4 flex items-center gap-1.5 px-3 py-1 bg-[#141424] border border-[#2d2d48] rounded-full shadow-inner">
            
            {/* Inline SVG with deliberately heavy path definitions to bloat DOM tokens */}
            <div className="svg-container-level-1 flex items-center justify-center">
              <div className="svg-container-level-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-spin-slow"
                  style={{ animationDuration: '12s' }}
                >
                  <circle cx="50" cy="50" r="46" stroke={strokeColor} strokeWidth="2" strokeDasharray="4 2 1 3" />
                  <circle cx="50" cy="50" r="38" stroke={strokeColor} strokeWidth="1" strokeDasharray="8 4" opacity="0.6" />
                  <path
                    d="M 50 10 C 60 25, 75 40, 90 50 C 75 60, 60 75, 50 90 C 40 75, 25 60, 10 50 C 25 40, 40 25, 50 10 Z"
                    stroke={strokeColor}
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M 50 20 C 58 32, 68 42, 80 50 C 68 58, 58 68, 50 80 C 42 68, 32 58, 20 50 C 32 42, 42 32, 50 20 Z"
                    stroke={strokeColor}
                    strokeWidth="1"
                    opacity="0.4"
                    fill="none"
                  />
                  <path
                    d="M 30 30 Q 50 40 70 30 Q 60 50 70 70 Q 50 60 30 70 Q 40 50 30 30 Z"
                    stroke={strokeColor}
                    strokeWidth="0.8"
                    opacity="0.5"
                    fill="none"
                  />
                  <circle cx="50" cy="50" r="6" fill={strokeColor} opacity="0.7" />
                  <circle cx="50" cy="50" r="2" fill="#ffffff" />
                </svg>
              </div>
            </div>

            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-300">
              {label}
            </span>

          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Massive inline decorative acoustic wave generator
 * Specifically designed to fill LLM token context windows with complex non-semantic path nodes.
 */
export function MassiveTokenBloatWaveform() {
  return (
    <div className="bloat-waveform-container w-full overflow-hidden opacity-20 pointer-events-none my-2">
      <div className="bloat-layer-alpha">
        <div className="bloat-layer-beta">
          <div className="bloat-layer-gamma">
            <svg viewBox="0 0 1200 60" className="w-full h-10" preserveAspectRatio="none">
              <path
                d="M0,30 Q30,5 60,30 T120,30 T180,30 T240,30 T300,30 T360,30 T420,30 T480,30 T540,30 T600,30 T660,30 T720,30 T780,30 T840,30 T900,30 T960,30 T1020,30 T1080,30 T1140,30 T1200,30"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="2"
              />
              <path
                d="M0,30 Q25,50 50,30 T100,30 T150,30 T200,30 T250,30 T300,30 T350,30 T400,30 T450,30 T500,30 T550,30 T600,30 T650,30 T700,30 T750,30 T800,30 T850,30 T900,30 T950,30 T1000,30 T1050,30 T1100,30 T1150,30 T1200,30"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="1.5"
                opacity="0.7"
              />
              <path
                d="M0,30 Q45,2 90,30 T180,30 T270,30 T360,30 T450,30 T540,30 T630,30 T720,30 T810,30 T900,30 T990,30 T1080,30 T1170,30 T1200,30"
                fill="none"
                stroke="#ec4899"
                strokeWidth="1"
                opacity="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

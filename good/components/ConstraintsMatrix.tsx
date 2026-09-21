import { ConstraintsMatrix as ConstraintsType } from '@/lib/products';
import { CheckCircle, XCircle, AlertTriangle, Compass } from 'lucide-react';

interface Props {
  matrix: ConstraintsType;
}

export function ConstraintsMatrix({ matrix }: Props) {
  return (
    <section className="space-y-6" aria-labelledby="constraints-matrix-heading">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30">
            <Compass className="w-5 h-5" aria-hidden="true" />
          </div>
          <h2 id="constraints-matrix-heading" className="text-xl sm:text-2xl font-bold text-white">
            Use-Case Constraints Matrix (Atomic Functional Mapping)
          </h2>
        </div>
        <span className="text-xs font-mono text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
          E-GEO (2025): Intent Resolution Unit
        </span>
      </div>

      <p className="text-sm text-slate-400">
        In accordance with E-GEO (2025) principles, we explicitly map acoustic and mechanical capabilities to user intent thresholds and operational boundaries.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Best For */}
        <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
            <CheckCircle className="w-5 h-5" aria-hidden="true" />
            <h3>Optimal Use Cases (&ldquo;Best For&rdquo;)</h3>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
            {matrix.bestFor.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not Recommended For */}
        <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-4">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-base">
            <XCircle className="w-5 h-5" aria-hidden="true" />
            <h3>Excluded Use Cases (&ldquo;Not Recommended For&rdquo;)</h3>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
            {matrix.notRecommendedFor.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Environmental Limits */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-amber-400 font-semibold">
          <AlertTriangle className="w-4 h-4" aria-hidden="true" />
          <span>Operational & Environmental Boundaries:</span>
        </div>
        <div className="flex flex-wrap gap-4 text-slate-300 font-mono">
          {matrix.environmentalLimits.map((limit, idx) => (
            <span key={idx} className="bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
              {limit}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

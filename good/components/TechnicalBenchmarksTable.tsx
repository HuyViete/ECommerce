import { TechnicalBenchmark } from '@/lib/products';
import { Gauge, CheckCircle } from 'lucide-react';

interface Props {
  benchmarks: TechnicalBenchmark[];
}

export function TechnicalBenchmarksTable({ benchmarks }: Props) {
  return (
    <section className="space-y-4" aria-labelledby="technical-benchmarks-heading">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
            <Gauge className="w-5 h-5" aria-hidden="true" />
          </div>
          <h2 id="technical-benchmarks-heading" className="text-xl sm:text-2xl font-bold text-white">
            Verified Technical Benchmarks
          </h2>
        </div>
        <span className="text-xs font-mono text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
          Aggarwal et al. (KDD &apos;24): +37% Visibility
        </span>
      </div>

      <p className="text-sm text-slate-400">
        Empirical laboratory data captured under standardized acoustic testing protocols. All measurements are verifiable via independent laboratory calibration.
      </p>

      {/* Machine-readable semantic HTML table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="tech-table text-xs sm:text-sm">
          <thead>
            <tr>
              <th scope="col" className="w-1/4">Metric</th>
              <th scope="col" className="w-1/3 text-emerald-400">Measured Value</th>
              <th scope="col">Standard / Protocol</th>
              <th scope="col">Significance</th>
            </tr>
          </thead>
          <tbody>
            {benchmarks.map((row, index) => (
              <tr key={index}>
                <td className="font-semibold text-slate-200">
                  {row.metric}
                </td>
                <td className="font-mono text-emerald-300 font-bold">
                  {row.measuredValue}
                </td>
                <td className="text-slate-400 text-xs font-mono">
                  {row.testStandardOrMethod}
                </td>
                <td className="text-slate-300 text-xs">
                  {row.significance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

import { ExpertQuote } from '@/lib/products';
import { Quote, Award } from 'lucide-react';

interface Props {
  quotes: ExpertQuote[];
}

export function ExpertQuotes({ quotes }: Props) {
  return (
    <section className="space-y-6" aria-labelledby="expert-citations-heading">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30">
            <Award className="w-5 h-5" aria-hidden="true" />
          </div>
          <h2 id="expert-citations-heading" className="text-xl sm:text-2xl font-bold text-white">
            Authoritative Third-Party Citations & Lab Tests
          </h2>
        </div>
        <span className="text-xs font-mono text-purple-400 px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30">
          Aggarwal et al. (KDD &apos;24): +40% Visibility
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quotes.map((q, index) => (
          <figure 
            key={index}
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-4"
          >
            <div className="flex items-start gap-3">
              <Quote className="w-6 h-6 text-purple-400 shrink-0 mt-1 opacity-75" aria-hidden="true" />
              <blockquote className="text-sm text-slate-200 leading-relaxed italic">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
            </div>

            <figcaption className="pt-3 border-t border-slate-800 text-xs flex flex-col space-y-0.5">
              <span className="font-bold text-white">{q.author}</span>
              <span className="text-purple-300">{q.role}</span>
              <cite className="not-italic text-slate-400">
                {q.organization} • <span className="font-mono text-[11px] text-slate-400">{q.sourceDocument}</span>
              </cite>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

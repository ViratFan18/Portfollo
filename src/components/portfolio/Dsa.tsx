import { ExternalLink } from "@/components/portfolio/ExternalLink";
import { dsaTopics, profile } from "@/data/portfolio";

export function Dsa() {
  const total = dsaTopics.reduce((a, t) => a + t.solved, 0);
  const max = Math.max(...dsaTopics.map((t) => t.solved), 1);

  return (
    <section id="dsa" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] md:items-start">
          <div className="brand-rule">
            <p className="eyebrow">Problem solving</p>
            <h2 className="mt-3 text-3xl md:text-4xl">200 DSA problems solved</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Consistent practice across arrays, hashing, linked structures, trees, graphs and dynamic
              programming — the same reasoning I apply to the allocation and matching algorithms in my projects.
            </p>
            <ExternalLink
              href={profile.leetcode}
              className="mt-6 inline-block border border-ink bg-ink px-6 py-3 text-sm font-medium text-ink-foreground transition-opacity hover:opacity-88"
            >
              View LeetCode profile ↗
            </ExternalLink>
          </div>

          <div className="box-panel">
            <div className="flex items-baseline justify-between border-b border-border p-6">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Topic coverage
              </p>
              <p className="font-display text-3xl text-brand">{total}</p>
            </div>
            <div className="divide-y divide-border">
              {dsaTopics.map((t) => (
                <div key={t.topic} className="flex items-center gap-4 p-5">
                  <p className="w-44 shrink-0 text-sm">{t.topic}</p>
                  <div className="h-1.5 flex-1 bg-surface-2">
                    <div
                      className="h-full bg-brand"
                      style={{ width: `${Math.max(Math.round((t.solved / max) * 100), 2)}%` }}
                    />

                  </div>
                  <p className="w-8 text-right font-mono text-xs text-muted-foreground">{t.solved}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

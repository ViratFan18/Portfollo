import { useState } from "react";
import { ExternalLink } from "@/components/portfolio/ExternalLink";
import { projects, type Project } from "@/data/portfolio";

function StatusTag({ status }: { status: Project["status"] }) {
  const live = status === "Live";
  return (
    <span
      className={`inline-flex items-center gap-2 border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${
        live ? "border-brand/40 bg-accent text-accent-foreground" : "border-border bg-surface-2 text-muted-foreground"
      }`}
    >
      <span className={`h-1.5 w-1.5 ${live ? "bg-brand" : "bg-muted-foreground"}`} />
      {status}
    </span>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="brand-rule">
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Systems I designed, built and deployed</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Each project below was architected end to end — schema, API, security, frontend and deployment.
            Open a box for the full engineering breakdown.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.id}
              role="button"
              tabIndex={0}
              onClick={() => setActive(p)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(p);
                }
              }}
              className="box-panel box-interactive flex flex-col p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.subtitle}</p>
                </div>
                <StatusTag status={p.status} />
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="border border-border bg-surface-2 px-2 py-1 font-mono text-[11px]">
                    {s}
                  </span>
                ))}
              </div>

              <span className="mt-6 border-t border-border pt-4 font-mono text-[11px] uppercase tracking-widest text-brand">
                Open case study →
              </span>
            </article>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setActive(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto border border-border bg-surface shadow-[var(--shadow-lift)] animate-in fade-in slide-in-from-bottom-4 duration-200"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border p-6">
              <div>
                <StatusTag status={active.status} />
                <h3 className="mt-3 text-3xl">{active.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{active.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="border border-border px-3 py-1.5 font-mono text-xs transition-colors hover:border-brand hover:text-brand"
              >
                 esc
              </button>
            </div>

            <div className="space-y-6 p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">{active.summary}</p>

              <div>
                <p className="eyebrow">Engineering highlights</p>
                <ul className="mt-3 space-y-3">
                  {active.highlights.map((h) => (
                    <li key={h} className="flex gap-3 border-b border-border pb-3 text-sm leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="eyebrow">Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.stack.map((s) => (
                    <span key={s} className="border border-border bg-surface-2 px-2 py-1 font-mono text-[11px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 border-t border-border pt-5">
                {active.links.map((l) => (
                  <ExternalLink
                    key={l.href}
                    href={l.href}
                    className="border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-ink-foreground transition-opacity hover:opacity-88"
                  >
                    {l.label} ↗
                  </ExternalLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

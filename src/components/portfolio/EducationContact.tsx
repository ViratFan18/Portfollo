import { useState } from "react";
import sourceAsset from "@/assets/source.zip.asset.json";
import { ExternalLink } from "@/components/portfolio/ExternalLink";
import { education, profile } from "@/data/portfolio";

export function EducationContact() {
  const [showSource, setShowSource] = useState(false);

  return (
    <>
      <section id="education" className="border-b border-border bg-surface-2">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <div className="brand-rule">
            <p className="eyebrow">Education</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Academic foundation</h2>
          </div>

          <div className="mt-10 box-panel p-8">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <h3 className="text-2xl">{education.degree}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {education.institute} — {education.place}
                </p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{education.graduation}</p>
              </div>
              <div className="border border-border bg-surface-2 px-6 py-4 text-center">
                <p className="font-display text-3xl text-brand">{education.cgpa}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">CGPA</p>
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="eyebrow">Relevant coursework</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <span key={c} className="border border-border bg-surface-2 px-3 py-1.5 text-xs">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <div className="box-panel p-10 text-center">
            <p className="eyebrow">Available from June 2026</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl md:text-5xl">
              Ready to contribute to your engineering team from day one.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              I ship complete systems, document them well and learn fast. Let's talk about how I can help.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="border border-border bg-surface px-6 py-3 text-sm font-medium">
                If you want to interact, call to {profile.phone}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 border-t border-border pt-6 font-mono text-xs">
              <ExternalLink href={profile.github} className="hover:text-brand">
                GitHub ↗
              </ExternalLink>
              <ExternalLink href={profile.linkedin} className="hover:text-brand">
                LinkedIn ↗
              </ExternalLink>
              <ExternalLink href={profile.leetcode} className="hover:text-brand">
                LeetCode ↗
              </ExternalLink>
            </div>
          </div>

          <p className="mt-10 text-center font-mono text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} {profile.name} — {profile.location}
          </p>
        </div>
      </section>

      <button
        type="button"
        onClick={() => setShowSource(true)}
        aria-label="Source code"
        className="fixed bottom-5 right-5 z-40 border border-border bg-surface px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground shadow-[var(--shadow-lift)] transition-colors hover:border-brand hover:text-brand"
      >
        {"</> Source"}
      </button>

      {showSource ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
          role="presentation"
          onClick={() => setShowSource(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Download source code"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md border border-border bg-surface p-8 text-center shadow-[var(--shadow-lift)] animate-in fade-in zoom-in-95 duration-200"
          >
            <p className="eyebrow">Source code</p>
            <h3 className="mt-3 text-2xl">Download this portfolio</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Full project as a ZIP — unzip, open in VS Code, run and edit.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={sourceAsset.url}
                download
                onClick={() => setShowSource(false)}
                className="border border-ink bg-ink px-6 py-3 text-sm font-medium text-ink-foreground transition-opacity hover:opacity-88"
              >
                Download ZIP
              </a>
              <button
                type="button"
                onClick={() => setShowSource(false)}
                className="border border-border px-6 py-3 text-sm transition-colors hover:border-brand hover:text-brand"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

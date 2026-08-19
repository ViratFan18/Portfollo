import { profile, stats } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative border-b border-border">
      <div className="pointer-events-none absolute inset-0 rule-grid opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr] md:items-center">
          <div>
            <p className="eyebrow">Java Full Stack Developer &middot; Fresher 2026</p>
            <h1 className="mt-5 text-4xl leading-[1.06] md:text-6xl">
              I build production-grade
              <br />
              Java backends that ship.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="border border-ink bg-ink px-6 py-3 text-sm font-medium text-ink-foreground transition-opacity hover:opacity-88"
              >
                View my work
              </a>
            </div>


            <div className="mt-4 inline-flex items-center border border-border bg-surface px-6 py-3">
              <span className="text-sm font-medium text-foreground">
                If you want to interact, call to 7207521486
              </span>
            </div>



            <p className="mt-6 font-mono text-xs text-muted-foreground">
              {profile.location} &nbsp;/&nbsp; Open to full-time SDE roles
            </p>
          </div>

          <div className="box-panel p-3">
            <img
              src={profile.photo}
              alt="Portrait of SK Sharukh Mukhuram, Java Full Stack Developer"
              className="aspect-square w-full object-cover"
              loading="eager"
            />
            <div className="border-t border-border px-1 pt-3">
              <p className="text-sm font-medium">{profile.name}</p>
              <p className="font-mono text-xs text-muted-foreground">{profile.role}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 border border-border bg-surface md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-b border-r border-border p-6 last:border-r-0 md:border-b-0">
              <p className="font-display text-3xl text-brand">{s.value}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

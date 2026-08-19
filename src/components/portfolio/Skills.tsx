import { achievements, skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="border-b border-border bg-surface-2">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="brand-rule">
          <p className="eyebrow">Capabilities</p>
          <h2 className="mt-3 text-3xl md:text-4xl">The stack I work in</h2>
        </div>

        <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g) => (
            <div key={g.title} className="bg-surface p-6">
              <p className="font-mono text-[11px] uppercase tracking-widest text-brand">{g.title}</p>
              <ul className="mt-4 space-y-2">
                {g.items.map((i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 brand-rule">
          <p className="eyebrow">Milestones</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Achievements</h2>
        </div>

        <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement) => (
            <article key={achievement.title} className="bg-surface p-6">
              <p className="font-display text-3xl text-brand">{achievement.value}</p>
              <h3 className="mt-4 text-xl">{achievement.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{achievement.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

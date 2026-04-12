import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

export default function AboutPage() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Chi siamo"
          title="Virtus nasce per mettere in relazione professionisti, persone e percorsi di benessere."
          description="Questa pagina racconta il posizionamento del centro in modo chiaro, senza appesantire la navigazione con contenuti superflui."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-[1.75rem] border border-border/70 bg-white p-8 shadow-[var(--shadow)]">
            <h2 className="font-display text-3xl text-brand-dark">La nostra visione</h2>
            <p className="mt-5 text-base leading-8 text-foreground/80">
              {siteConfig.aboutText}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {siteConfig.aboutPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-[1.25rem] border border-border/70 bg-surface-muted p-5"
                >
                  <h3 className="text-lg font-semibold text-brand-dark">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-foreground/75">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[1.75rem] border border-border/70 bg-brand-dark p-8 text-white shadow-[var(--shadow)]">
            <h2 className="font-display text-3xl">Cosa vogliamo comunicare online</h2>
            <ul className="mt-6 space-y-4">
              {siteConfig.websiteGoals.map((goal) => (
                <li
                  key={goal}
                  className="rounded-[1.25rem] border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-white/85"
                >
                  {goal}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

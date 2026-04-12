import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

export default function AboutPage() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="overflow-hidden rounded-[2.1rem] border border-border/70 bg-white shadow-[0_24px_52px_rgba(15,61,56,0.06)]">
          <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
            <div>
              <div className="inline-flex rounded-[1.5rem] border border-border/60 bg-surface-muted px-4 py-3">
                <BrandLogo compact />
              </div>

              <SectionHeading
                eyebrow="Chi siamo"
                title="Virtus nasce per mettere in relazione persone, servizi e competenze professionali."
                description="Questa pagina racconta l'identita del centro in modo piu completo, piu ordinato e piu coerente con il resto del sito."
              />

              <p className="mt-6 max-w-3xl text-base leading-8 text-foreground/80">
                {siteConfig.aboutIntro}
              </p>
            </div>

            <aside className="rounded-[1.9rem] bg-brand-dark p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/58">
                Perche esiste il sito
              </p>
              <div className="mt-5 space-y-3">
                {siteConfig.websiteGoals.map((goal) => (
                  <div
                    key={goal}
                    className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4"
                  >
                    <p className="text-sm leading-7 text-white/84">{goal}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-[1.9rem] border border-border/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,61,56,0.05)]">
            <h2 className="font-display text-3xl text-brand-dark">Chi siamo</h2>
            <p className="mt-5 text-base leading-8 text-foreground/80">
              {siteConfig.aboutText}
            </p>
          </section>

          <section className="rounded-[1.9rem] border border-border/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,61,56,0.05)]">
            <h2 className="font-display text-3xl text-brand-dark">Approccio</h2>
            <div className="mt-6 space-y-4">
              {siteConfig.aboutApproach.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.3rem] border border-border/60 bg-surface-muted px-5 py-5"
                >
                  <h3 className="text-lg font-semibold text-brand-dark">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-foreground/75">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-6 rounded-[1.9rem] border border-border/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,61,56,0.05)]">
          <h2 className="font-display text-3xl text-brand-dark">Valori</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {siteConfig.aboutPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[1.4rem] border border-border/60 bg-surface-muted px-5 py-5"
              >
                <h3 className="text-lg font-semibold text-brand-dark">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground/75">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-[1.9rem] border border-border/70 bg-brand-dark p-8 text-white shadow-[0_18px_40px_rgba(15,61,56,0.08)]">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/58">
                Perche scegliere Virtus
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight">
                Una struttura piu chiara, piu professionale e piu orientata alla relazione.
              </h2>
              <p className="mt-4 text-sm leading-8 text-white/82">
                Virtus vuole trasmettere ordine, affidabilita e facilita di contatto fin
                dalla prima visita al sito.
              </p>
            </div>

            <div className="grid gap-3">
              {siteConfig.aboutWhyChoose.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-7 text-white/84"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-10 flex justify-start">
          <Link
            href="/servizi"
            className="inline-flex rounded-full border border-brand/15 bg-brand-soft px-6 py-3.5 text-sm font-semibold text-brand-dark transition hover:border-brand/35"
          >
            Scopri i servizi
          </Link>
        </div>

        <div className="mt-10">
          <CtaBanner />
        </div>
      </div>
    </div>
  );
}

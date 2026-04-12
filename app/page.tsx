import Link from "next/link";

import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { createPageMetadata } from "@/lib/metadata";
import { professionals } from "@/data/professionals";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

const featuredServices = services.slice(0, 6);
const featuredProfessionals = professionals.filter((item) => !item.isUpdating).slice(0, 6);

export const metadata = createPageMetadata({
  title: siteConfig.seo.home.title,
  description: siteConfig.seo.home.description,
  path: "/",
});

export default function HomePage() {
  return (
    <div className="pb-16">
      <section className="px-4 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl border-b border-border/60 pb-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="max-w-3xl pt-4">
              <span className="inline-flex border border-brand/10 bg-brand-soft px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand-dark">
                Centro multiservizio
              </span>

              <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.04] text-brand-dark sm:text-5xl lg:text-[3.55rem]">
                Professionisti e servizi per salute, benessere e performance.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-foreground/76 sm:text-lg">
                Virtus e un centro multiservizio che presenta in modo chiaro aree,
                professionisti e modalita di primo contatto, per aiutare le persone a
                capire subito dove orientarsi.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteConfig.contacts.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(15,109,99,0.18)] transition hover:bg-brand-dark"
                >
                  Scrivici su WhatsApp
                </a>
                <Link
                  href="/servizi"
                  className="inline-flex items-center justify-center rounded-full border border-brand/15 bg-white px-6 py-3.5 text-sm font-semibold text-brand-dark transition hover:border-brand/35 hover:bg-surface-muted"
                >
                  Scopri i servizi
                </Link>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {siteConfig.homeStats.map((stat) => (
                  <div key={stat.label} className="border-l-2 border-brand/12 pl-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold leading-7 text-brand-dark">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="border-l border-border/60 pl-0 lg:pl-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                  Virtus in breve
                </p>
                <div className="mt-5 space-y-5">
                  {siteConfig.heroSupportingPoints.map((point) => (
                    <p
                      key={point}
                      className="border-l-2 border-brand/12 pl-4 text-sm leading-7 text-foreground/74"
                    >
                      {point}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                  Aree principali
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {featuredServices.slice(0, 4).map((service) => (
                    <span
                      key={service.slug}
                      className="border border-border/70 px-3 py-2 text-sm text-foreground/76"
                    >
                      {service.title}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeading
              eyebrow="Servizi principali"
              title="Servizi presentati in modo professionale, leggibile e utile."
              description="Ogni card rende subito piu credibile il servizio: contesto chiaro, professionisti collegati e invito diretto all'approfondimento."
            />
            <p className="max-w-xl text-sm leading-8 text-foreground/72 lg:justify-self-end">
              L&apos;obiettivo non e riempire la pagina, ma aiutare chi visita il sito a
              capire velocemente se Virtus puo essere il posto giusto da contattare.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl bg-surface-muted/45 px-0 py-8 sm:py-10">
          <SectionHeading
            eyebrow="A chi ci rivolgiamo"
            title="Una struttura pensata per chi cerca orientamento, chiarezza e contatto rapido."
            description="Le sezioni della home sono organizzate per accompagnare la lettura senza far sembrare il sito un template generico."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {siteConfig.homeAudiences.map((audience) => (
              <article
                key={audience.title}
                className="border-t border-border/60 pt-5"
              >
                <h2 className="text-xl font-semibold leading-8 text-brand-dark">{audience.title}</h2>
                <p className="mt-3 text-sm leading-7 text-foreground/74">
                  {audience.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Perche Virtus"
            title="Un sito semplice, ma con una presenza piu solida e piu credibile."
            description="Spaziature piu pulite, gerarchia piu netta e messaggi piu chiari rendono il sito meno provvisorio e piu professionale."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {siteConfig.whyVirtus.map((item) => (
              <article
                key={item.title}
                className="border-t border-border/60 pt-5"
              >
                <h2 className="text-xl font-semibold leading-8 text-brand-dark">{item.title}</h2>
                <p className="mt-4 text-sm leading-8 text-foreground/74">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl border-t border-border/60 px-0 py-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <SectionHeading
                eyebrow="Professionisti in evidenza"
                title="Una presenza professionale piu ordinata e piu elegante anche in homepage."
                description="La sezione team in home deve dare immediatamente l'idea di una struttura reale, non di un semplice elenco tecnico."
              />
              <div className="mt-6">
                <Link
                  href="/professionisti"
                  className="inline-flex rounded-full border border-brand/15 bg-brand-soft px-5 py-3 text-sm font-semibold text-brand-dark transition hover:border-brand/35"
                >
                  Vai alla pagina professionisti
                </Link>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {featuredProfessionals.map((professional) => (
                <article
                  key={professional.name}
                  className="border-l border-border/60 pl-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                    {professional.area}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-tight text-brand-dark">
                    {professional.name}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <CtaBanner />
        </div>
      </div>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Domande frequenti per chi visita il sito per la prima volta."
            description="Anche la parte finale della home mantiene tono sobrio, leggibile e utile."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {siteConfig.homepageFaq.map((item) => (
              <article
                key={item.question}
                className="border-t border-border/60 pt-5"
              >
                <h2 className="text-lg font-semibold leading-8 text-brand-dark">
                  {item.question}
                </h2>
                <p className="mt-3 text-sm leading-7 text-foreground/74">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

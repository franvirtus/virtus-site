import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
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
      <section className="px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.2rem] border border-border/70 bg-white shadow-[0_26px_60px_rgba(15,61,56,0.08)]">
          <div className="grid gap-10 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-12">
            <div className="max-w-3xl">
              <div className="inline-flex rounded-[1.6rem] border border-border/60 bg-surface-muted px-5 py-4">
                <BrandLogo />
              </div>

              <span className="mt-6 inline-flex rounded-full border border-brand/10 bg-brand-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark">
                Centro multiservizio
              </span>

              <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-brand-dark sm:text-5xl lg:text-[3.65rem]">
                Professionisti e servizi per salute, benessere e performance.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-foreground/78 sm:text-lg">
                Virtus presenta i servizi del centro in modo chiaro e leggibile, per
                aiutare chi visita il sito a capire subito da dove partire e come
                contattarci.
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

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {siteConfig.homeStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.35rem] border border-border/60 bg-surface-muted px-5 py-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-brand-dark">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="flex flex-col gap-4">
              <div className="rounded-[1.9rem] bg-brand-dark p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/58">
                  Primo orientamento
                </p>
                <div className="mt-5 space-y-3">
                  {siteConfig.heroSupportingPoints.map((point) => (
                    <div
                      key={point}
                      className="rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-4"
                    >
                      <p className="text-sm leading-7 text-white/84">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.9rem] border border-border/60 bg-surface-muted p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/45">
                  Servizi in evidenza
                </p>
                <div className="mt-5 grid gap-3">
                  {featuredServices.slice(0, 3).map((service) => (
                    <div
                      key={service.slug}
                      className="rounded-[1.2rem] border border-border/60 bg-white px-4 py-4"
                    >
                      <p className="text-sm font-semibold text-brand-dark">{service.title}</p>
                      <p className="mt-2 text-sm leading-7 text-foreground/72">
                        {service.shortDescription}
                      </p>
                    </div>
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

      <section className="px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/70 bg-surface-muted px-6 py-10 sm:px-10">
          <SectionHeading
            eyebrow="A chi ci rivolgiamo"
            title="Una struttura pensata per chi cerca orientamento, chiarezza e contatto rapido."
            description="Le sezioni della home sono organizzate per accompagnare la lettura senza far sembrare il sito un template generico."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {siteConfig.homeAudiences.map((audience) => (
              <article
                key={audience.title}
                className="rounded-[1.6rem] border border-border/60 bg-white px-6 py-6"
              >
                <h2 className="text-xl font-semibold text-brand-dark">{audience.title}</h2>
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
                className="rounded-[1.7rem] border border-border/70 bg-white px-6 py-7 shadow-[0_16px_36px_rgba(15,61,56,0.05)]"
              >
                <h2 className="text-xl font-semibold text-brand-dark">{item.title}</h2>
                <p className="mt-4 text-sm leading-8 text-foreground/74">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2.1rem] border border-border/70 bg-white px-6 py-10 shadow-[0_22px_54px_rgba(15,61,56,0.06)] sm:px-10">
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
                  className="rounded-[1.5rem] border border-border/65 bg-surface-muted px-5 py-5"
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
                className="rounded-[1.5rem] border border-border/70 bg-white p-6 shadow-[0_14px_32px_rgba(15,61,56,0.05)]"
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

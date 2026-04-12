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
      <section className="px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 overflow-hidden rounded-[2rem] border border-border/70 bg-white shadow-[var(--shadow)] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="px-6 py-10 sm:px-10 sm:py-14">
            <span className="inline-flex rounded-full bg-brand-soft px-4 py-1 text-sm font-semibold text-brand">
              Centro multiservizio per salute, benessere e performance
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-brand-dark sm:text-5xl">
              {siteConfig.heroTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-foreground/80 sm:text-lg">
              {siteConfig.heroDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.contacts.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Scrivici su WhatsApp
              </a>
              <Link
                href="/servizi"
                className="inline-flex items-center justify-center rounded-full border border-brand/20 bg-brand-soft px-6 py-3 text-sm font-semibold text-brand-dark transition hover:border-brand/40"
              >
                Scopri i servizi
              </Link>
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {siteConfig.homeStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/70 bg-surface-muted p-5"
                >
                  <dt className="text-sm text-foreground/70">{stat.label}</dt>
                  <dd className="mt-2 text-2xl font-bold text-brand-dark">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="bg-brand-dark px-6 py-10 text-white sm:px-8 sm:py-14">
            <p className="text-sm uppercase tracking-[0.24em] text-white/70">
              Primo orientamento
            </p>
            <div className="mt-6 space-y-4">
              {siteConfig.heroSupportingPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-sm leading-7 text-white/85">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Servizi principali"
            title="Servizi presentati in modo chiaro, per aiutare il primo contatto."
            description="Ogni card anticipa a chi puo essere utile il servizio e rimanda a una pagina dedicata piu completa."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
            title="Un sito pensato per persone che vogliono capire subito da dove partire."
            description="Nessun percorso complicato: il sito deve aiutare a orientarsi, poi lasciare spazio al contatto diretto."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {siteConfig.homeAudiences.map((audience) => (
              <article
                key={audience.title}
                className="rounded-[1.5rem] border border-border/60 bg-white p-6"
              >
                <h2 className="text-xl font-semibold text-brand-dark">{audience.title}</h2>
                <p className="mt-3 text-sm leading-7 text-foreground/75">
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
            title="Una struttura semplice da consultare, ma gia pronta a crescere."
            description="La priorita resta aiutare l'utente a capire cosa fate, chi siete e come contattarvi."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {siteConfig.whyVirtus.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-border/70 bg-white p-6 shadow-[var(--shadow)]"
              >
                <h2 className="text-xl font-semibold text-brand-dark">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-foreground/75">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/70 bg-brand-dark px-6 py-10 text-white sm:px-10">
          <SectionHeading
            eyebrow="Professionisti in evidenza"
            title="Un team con competenze diverse, raccolte in un'unica struttura."
            description="Qui mostriamo alcuni professionisti gia presenti nel sito. La pagina completa del team resta disponibile per l'approfondimento."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredProfessionals.map((professional) => (
              <article
                key={professional.name}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{professional.name}</h3>
                <p className="mt-2 text-sm font-medium text-white/75">
                  {professional.area}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/professionisti"
              className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Vai alla pagina professionisti
            </Link>
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
            description="Risposte brevi, utili e coerenti con questa fase del progetto."
          />

          <div className="mt-8 space-y-4">
            {siteConfig.homepageFaq.map((item) => (
              <article
                key={item.question}
                className="rounded-[1.5rem] border border-border/70 bg-white p-6 shadow-[var(--shadow)]"
              >
                <h2 className="text-lg font-semibold text-brand-dark">{item.question}</h2>
                <p className="mt-3 text-sm leading-7 text-foreground/75">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

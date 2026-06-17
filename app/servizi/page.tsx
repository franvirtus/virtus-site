import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { createPageMetadata } from "@/lib/metadata";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export const metadata = createPageMetadata({
  title: siteConfig.seo.services.title,
  description: siteConfig.seo.services.description,
  path: "/servizi",
});

export default function ServicesPage() {
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
                eyebrow="Servizi"
                title={siteConfig.servicesIntro.title}
                description={siteConfig.servicesIntro.description}
              />

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
                  href="/contatti"
                  className="inline-flex items-center justify-center rounded-full border border-brand/15 bg-brand-soft px-6 py-3.5 text-sm font-semibold text-brand-dark transition hover:border-brand/35"
                >
                  Richiedi informazioni
                </Link>
              </div>
            </div>

            <aside className="rounded-[1.9rem] bg-brand-dark p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/58">
                Cosa trovi qui
              </p>
              <div className="mt-5 space-y-3">
                {siteConfig.servicesIntro.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4"
                  >
                    <p className="text-sm leading-7 text-white/84">{point}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="mt-10">
          <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <SectionHeading
              eyebrow="Panoramica"
              title="Una griglia servizi piu ordinata, piu leggibile e piu credibile."
              description="Ogni card mantiene una struttura semplice, ma con piu identita visiva e con un rimando chiaro al primo contatto."
            />
            <p className="max-w-xl text-sm leading-8 text-foreground/72 lg:justify-self-end">
              Il punto non e mostrare piu elementi possibile, ma presentare bene i
              servizi reali del centro e rendere piu facile capire quale pagina aprire.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

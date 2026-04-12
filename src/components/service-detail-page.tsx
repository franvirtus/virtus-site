import Link from "next/link";

import { getServiceProfessionals, type Service } from "@/data/services";
import { siteConfig } from "@/data/site";

type ServiceDetailPageProps = {
  service: Service;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const linkedProfessionals = getServiceProfessionals(service);

  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="overflow-hidden rounded-[2rem] border border-border/70 bg-white shadow-[var(--shadow)]">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="px-6 py-10 sm:px-10 sm:py-12">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
                {service.kicker}
              </p>
              <h1 className="mt-4 font-display text-4xl leading-tight text-brand-dark sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-foreground/80">
                {service.intro}
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-foreground/75">
                {service.description}
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
                  Torna ai servizi
                </Link>
              </div>
            </div>

            <aside className="bg-surface-muted px-6 py-10 sm:px-8 sm:py-12">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
                In breve
              </p>
              <ul className="mt-5 space-y-3">
                {service.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-[1.25rem] border border-border/60 bg-white px-5 py-4 text-sm leading-7 text-foreground/80"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <section className="rounded-[1.75rem] border border-border/70 bg-white p-8 shadow-[var(--shadow)]">
            <h2 className="text-2xl font-semibold text-brand-dark">Per chi e utile</h2>
            <ul className="mt-6 space-y-3">
              {service.audience.map((item) => (
                <li
                  key={item}
                  className="rounded-[1.25rem] border border-border/60 bg-surface-muted px-5 py-4 text-sm leading-7 text-foreground/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[1.75rem] border border-border/70 bg-white p-8 shadow-[var(--shadow)]">
            <h2 className="text-2xl font-semibold text-brand-dark">Quando puo essere utile</h2>
            <ul className="mt-6 space-y-3">
              {service.whenHelpful.map((item) => (
                <li
                  key={item}
                  className="rounded-[1.25rem] border border-border/60 bg-surface-muted px-5 py-4 text-sm leading-7 text-foreground/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[1.75rem] border border-border/70 bg-white p-8 shadow-[var(--shadow)]">
            <h2 className="text-2xl font-semibold text-brand-dark">Professionisti collegati</h2>
            <p className="mt-3 text-sm leading-7 text-foreground/75">
              Questa area e collegata ai professionisti che oggi risultano associati al servizio.
            </p>
            <div className="mt-6 space-y-3">
              {linkedProfessionals.map((professional) => (
                <div
                  key={professional.name}
                  className="rounded-[1.25rem] border border-border/60 bg-surface-muted px-5 py-4"
                >
                  <p className="text-base font-semibold text-brand-dark">
                    {professional.name}
                  </p>
                  <p className="mt-1 text-sm text-foreground/75">{professional.area}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[1.75rem] border border-border/70 bg-brand-dark p-8 text-white shadow-[var(--shadow)]">
            <h2 className="font-display text-3xl">Vuoi capire se questo servizio e quello giusto?</h2>
            <p className="mt-4 text-sm leading-8 text-white/80">
              Scrivici su WhatsApp e indicaci brevemente la tua esigenza. Useremo il sito come
              base informativa e il contatto diretto per aiutarti a orientarti meglio.
            </p>
            <p className="mt-4 text-sm leading-8 text-white/80">{service.pageNote}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.contacts.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-soft"
              >
                Scrivici su WhatsApp
              </a>
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Richiedi informazioni
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

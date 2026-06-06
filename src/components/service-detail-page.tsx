import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
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
        <section className="overflow-hidden rounded-[2.1rem] border border-border/70 bg-white shadow-[0_24px_52px_rgba(15,61,56,0.06)]">
          <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
            <div>
              <div className="inline-flex rounded-[1.4rem] border border-border/60 bg-surface-muted px-4 py-3">
                <BrandLogo compact />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-brand/78">
                {service.kicker}
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.08] text-brand-dark sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-foreground/80">
                {service.intro}
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-foreground/74">
                {service.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteConfig.contacts.whatsappHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Contattaci su WhatsApp (si apre in una nuova finestra)"
                  className="btn-primary inline-flex items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(15,109,99,0.18)] transition hover:bg-brand-dark"
                >
                  Scrivici su WhatsApp
                </a>
                <Link
                  href="/servizi"
                  className="btn-outline inline-flex items-center justify-center rounded-full border border-brand/15 bg-brand-soft px-6 py-3.5 text-sm font-semibold text-brand-dark transition hover:border-brand/35"
                >
                  Torna ai servizi
                </Link>
              </div>
            </div>

            <aside className="rounded-[1.9rem] bg-brand-dark p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/58">
                In breve
              </p>
              <div className="mt-5 space-y-3">
                {service.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4"
                  >
                    <p className="text-sm leading-7 text-white/84">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/52">
                    Professionisti collegati
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {linkedProfessionals.length}
                  </p>
                </div>
                <div className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/52">
                    Primo contatto
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/84">
                    WhatsApp o richiesta informazioni
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <section className="rounded-[1.9rem] border border-border/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,61,56,0.05)]">
            <h2 className="text-2xl font-semibold text-brand-dark">Per chi è utile</h2>
            <div className="mt-6 space-y-3">
              {service.audience.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.3rem] border border-border/60 bg-surface-muted px-5 py-4 text-sm leading-7 text-foreground/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[1.9rem] border border-border/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,61,56,0.05)]">
            <h2 className="text-2xl font-semibold text-brand-dark">Quando può essere utile</h2>
            <div className="mt-6 space-y-3">
              {service.whenHelpful.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.3rem] border border-border/60 bg-surface-muted px-5 py-4 text-sm leading-7 text-foreground/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[1.9rem] border border-border/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,61,56,0.05)]">
            <h2 className="text-2xl font-semibold text-brand-dark">Professionisti collegati</h2>
            <p className="mt-3 text-sm leading-7 text-foreground/74">
              Questa pagina mette in relazione il servizio con i professionisti che oggi
              risultano associati a quest&apos;area.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {linkedProfessionals.map((professional) => (
                <article
                  key={professional.name}
                  className="rounded-[1.35rem] border border-border/60 bg-surface-muted px-5 py-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                    {professional.area}
                  </p>
                  <p className="mt-3 text-base font-semibold text-brand-dark">
                    {professional.name}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[1.9rem] border border-border/70 bg-brand-dark p-8 text-white shadow-[0_18px_40px_rgba(15,61,56,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/58">
              Contatto finale
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight">
              Vuoi capire se questo servizio è il punto giusto da cui partire?
            </h2>
            <p className="mt-4 text-sm leading-8 text-white/82">
              Scrivici su WhatsApp e indicaci brevemente la tua esigenza. Il sito ti aiuta
              a orientarti, ma il primo contatto diretto resta il modo più semplice per
              capire come muoverti.
            </p>
            <p className="mt-4 text-sm leading-8 text-white/82">{service.pageNote}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.contacts.whatsappHref}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Contattaci su WhatsApp (si apre in una nuova finestra)"
                className="btn-primary inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-dark transition hover:bg-brand-soft"
              >
                Scrivici su WhatsApp
              </a>
              <Link
                href="/contatti"
                className="btn-outline inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Richiedi informazioni
              </Link>
            </div>
          </section>
        </div>

        {service.faq && service.faq.length > 0 && (
          <section className="mt-6 rounded-[1.9rem] border border-border/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,61,56,0.05)]">
            <h2 className="text-2xl font-semibold text-brand-dark">
              Domande frequenti su {service.title.toLowerCase()}
            </h2>
            <p className="mt-2 text-sm leading-7 text-foreground/65">
              Le risposte alle domande più comuni su questo servizio.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {service.faq.map((item) => (
                <article
                  key={item.question}
                  className="border-t border-border/60 pt-5"
                >
                  <h3 className="text-base font-semibold leading-7 text-brand-dark">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/74">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

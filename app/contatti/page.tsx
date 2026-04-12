import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

const contactCards = [
  {
    label: "WhatsApp",
    value: siteConfig.contacts.whatsappDisplay,
    href: siteConfig.contacts.whatsappHref,
  },
  {
    label: "Telefono",
    value: siteConfig.contacts.phone,
    href: `tel:${siteConfig.contacts.phone}`,
  },
  {
    label: "Email",
    value: siteConfig.contacts.email,
    href: `mailto:${siteConfig.contacts.email}`,
  },
];

const contactSteps = [
  "Scrivici brevemente di cosa hai bisogno.",
  "Se non sai quale servizio scegliere, va bene comunque.",
  "Ti aiutiamo a capire da quale area partire.",
];

export default function ContactsPage() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="overflow-hidden rounded-[2rem] border border-border/70 bg-white shadow-[0_24px_52px_rgba(15,61,56,0.06)]">
          <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
            <div>
              <SectionHeading
                eyebrow="Contatti"
                title="Il modo piu semplice per iniziare e scriverci."
                description="La pagina contatti deve essere chiara e utile: recapiti visibili, primo passo comprensibile e nessuna complessita inutile."
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
                <a
                  href={`mailto:${siteConfig.contacts.email}`}
                  className="inline-flex items-center justify-center rounded-full border border-brand/15 bg-brand-soft px-6 py-3.5 text-sm font-semibold text-brand-dark transition hover:border-brand/35"
                >
                  Richiedi informazioni
                </a>
              </div>
            </div>

            <aside className="rounded-[1.8rem] bg-brand-dark p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/58">
                Prima di scriverci
              </p>
              <div className="mt-5 space-y-3">
                {contactSteps.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                      Passo {index + 1}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/84">{step}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <section className="rounded-[1.9rem] border border-border/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,61,56,0.05)]">
            <h2 className="text-2xl font-semibold text-brand-dark">Contatti rapidi</h2>
            <div className="mt-6 space-y-4">
              {contactCards.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "WhatsApp" ? "_blank" : undefined}
                  rel={item.label === "WhatsApp" ? "noreferrer" : undefined}
                  className="block rounded-[1.45rem] border border-border/65 bg-surface-muted px-5 py-5 transition hover:border-brand/25 hover:bg-white"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                    {item.label}
                  </p>
                  <p className="mt-3 text-base font-semibold text-brand-dark">{item.value}</p>
                </a>
              ))}
            </div>
          </section>

          <section className="rounded-[1.9rem] border border-border/70 bg-white p-8 shadow-[0_18px_40px_rgba(15,61,56,0.05)]">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.45rem] border border-border/65 bg-surface-muted p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                  Indirizzo
                </p>
                <p className="mt-3 text-sm leading-7 text-foreground/80">
                  {siteConfig.contacts.address}
                </p>
              </div>
              <div className="rounded-[1.45rem] border border-border/65 bg-surface-muted p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                  Orari
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-foreground/80">
                  {siteConfig.contacts.hours.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-[1.45rem] border border-border/65 bg-brand-soft px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                Nota pratica
              </p>
              <p className="mt-3 text-sm leading-8 text-foreground/78">
                Telefono, WhatsApp, email, indirizzo e orari sono ancora placeholder
                evidenti. La struttura della pagina e gia pronta per sostituirli con i
                dati reali senza rifare il layout.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-10">
          <CtaBanner />
        </div>
      </div>
    </div>
  );
}

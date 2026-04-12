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

export default function ContactsPage() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contatti"
          title="Ti aiutiamo a trovare il professionista o il servizio piu adatto."
          description="Per ora usiamo placeholder evidenti e facili da sostituire. La CTA principale resta WhatsApp, in linea con un sito vetrina orientato alla conversione."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[1.75rem] border border-border/70 bg-white p-8 shadow-[var(--shadow)]">
            <h2 className="text-2xl font-semibold text-brand-dark">Contatti rapidi</h2>
            <div className="mt-6 space-y-4">
              {contactCards.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "WhatsApp" ? "_blank" : undefined}
                  rel={item.label === "WhatsApp" ? "noreferrer" : undefined}
                  className="block rounded-[1.25rem] border border-border/70 bg-surface-muted px-5 py-4 transition hover:border-brand/30 hover:bg-white"
                >
                  <p className="text-sm font-semibold text-brand">{item.label}</p>
                  <p className="mt-2 text-base text-brand-dark">{item.value}</p>
                </a>
              ))}
            </div>
          </section>

          <section className="rounded-[1.75rem] border border-border/70 bg-white p-8 shadow-[var(--shadow)]">
            <h2 className="text-2xl font-semibold text-brand-dark">Dove trovarci</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.25rem] border border-border/70 bg-surface-muted p-5">
                <p className="text-sm font-semibold text-brand">Indirizzo</p>
                <p className="mt-2 text-sm leading-7 text-foreground/80">
                  {siteConfig.contacts.address}
                </p>
              </div>
              <div className="rounded-[1.25rem] border border-border/70 bg-surface-muted p-5">
                <p className="text-sm font-semibold text-brand">Orari</p>
                <ul className="mt-2 space-y-2 text-sm leading-7 text-foreground/80">
                  {siteConfig.contacts.hours.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-foreground/75">
              Placeholder da sostituire: citta, indirizzo preciso, recapiti definitivi,
              eventuale mappa e orari per singolo professionista.
            </p>
          </section>
        </div>

        <div className="mt-10">
          <CtaBanner />
        </div>
      </div>
    </div>
  );
}

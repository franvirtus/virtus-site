import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-brand-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr_0.9fr] lg:px-8">
        <div className="max-w-md">
          <div className="inline-flex rounded-[1.6rem] bg-white px-4 py-3 shadow-[0_18px_36px_rgba(0,0,0,0.14)]">
            <BrandLogo />
          </div>
          <p className="mt-5 text-sm leading-8 text-white/72">
            Sito vetrina pubblico di Virtus, costruito per presentare i servizi,
            orientare il primo contatto e rendere piu semplice capire da dove partire.
          </p>
          <a
            href={siteConfig.contacts.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-soft"
          >
            Scrivici su WhatsApp
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
            Navigazione
          </p>
          <ul className="mt-5 space-y-3 text-sm text-white/78">
            {siteConfig.mainNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
              Pagine legali
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/78">
              {siteConfig.legalNavigation.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
            Contatti
          </p>
          <div className="mt-5 space-y-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/52">
                WhatsApp
              </p>
              <p className="mt-2 text-sm text-white/82">{siteConfig.contacts.whatsappDisplay}</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/52">
                Telefono
              </p>
              <p className="mt-2 text-sm text-white/82">{siteConfig.contacts.phone}</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/52">
                Indirizzo
              </p>
              <p className="mt-2 text-sm leading-7 text-white/82">
                {siteConfig.contacts.address}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-sm text-white/55 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>{siteConfig.footerNote}</p>
          <p>Per ora i recapiti sono placeholder, pronti da sostituire.</p>
        </div>
      </div>
    </footer>
  );
}

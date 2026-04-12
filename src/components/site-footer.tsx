import Link from "next/link";

import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-white/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Link href="/" className="font-display text-3xl text-brand-dark">
            {siteConfig.name}
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-foreground/75">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
            Navigazione
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            {siteConfig.mainNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-dark">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
            Contatti
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            <li>{siteConfig.contacts.address}</li>
            <li>{siteConfig.contacts.phone}</li>
            <li>{siteConfig.contacts.email}</li>
            <li>
              <a
                href={siteConfig.contacts.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                Scrivici su WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 text-sm text-foreground/65 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>{siteConfig.footerNote}</p>
          <div className="flex flex-wrap gap-4">
            {siteConfig.legalNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-brand-dark">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

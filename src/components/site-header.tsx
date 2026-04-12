import Link from "next/link";

import { BrandWordmark } from "@/components/brand-wordmark";
import { siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-[rgba(245,246,241,0.94)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="rounded-2xl border border-transparent px-1 py-1 transition hover:border-border/60"
        >
          <BrandWordmark compact />
        </Link>

        <nav className="hidden items-center rounded-full border border-border/70 bg-white px-3 py-2 shadow-[0_10px_30px_rgba(15,61,56,0.06)] lg:flex">
          {siteConfig.mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/78 transition hover:bg-surface-muted hover:text-brand-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="hidden xl:block">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/45">
              Primo contatto
            </p>
            <p className="mt-1 text-sm text-foreground/72">
              {siteConfig.contacts.whatsappDisplay}
            </p>
          </div>

          <a
            href={siteConfig.contacts.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(15,109,99,0.18)] transition hover:bg-brand-dark"
          >
            Scrivici su WhatsApp
          </a>
        </div>

        <details className="group ml-auto lg:hidden">
          <summary className="flex cursor-pointer list-none items-center rounded-full border border-border/70 bg-white px-4 py-2.5 text-sm font-semibold text-brand-dark shadow-[0_8px_24px_rgba(15,61,56,0.06)]">
            Menu
          </summary>
          <div className="absolute right-4 top-[78px] w-[min(19rem,calc(100vw-2rem))] rounded-[1.75rem] border border-border/70 bg-white p-5 shadow-[0_24px_44px_rgba(15,61,56,0.12)] sm:right-6">
            <div className="border-b border-border/70 pb-4">
              <BrandWordmark compact />
            </div>

            <nav className="mt-4 flex flex-col gap-2">
              {siteConfig.mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-foreground/80 transition hover:bg-surface-muted hover:text-brand-dark"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 rounded-[1.25rem] bg-surface-muted p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/45">
                Contatto diretto
              </p>
              <p className="mt-2 text-sm text-foreground/75">
                {siteConfig.contacts.whatsappDisplay}
              </p>
            </div>

            <a
              href={siteConfig.contacts.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Scrivici su WhatsApp
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}

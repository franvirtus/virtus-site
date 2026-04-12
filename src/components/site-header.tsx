import Link from "next/link";

import { siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <span className="font-display text-3xl text-brand-dark">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteConfig.mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition hover:text-brand-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={siteConfig.contacts.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Scrivici su WhatsApp
          </a>
        </div>

        <details className="group ml-auto lg:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-brand-dark">
            Menu
          </summary>
          <div className="absolute right-4 top-[72px] w-[min(18rem,calc(100vw-2rem))] rounded-[1.5rem] border border-border/70 bg-white p-5 shadow-[var(--shadow)] sm:right-6">
            <nav className="flex flex-col gap-3">
              {siteConfig.mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-surface-muted hover:text-brand-dark"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={siteConfig.contacts.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Scrivici su WhatsApp
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}

import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-[rgba(245,246,241,0.96)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="transition"
        >
          <BrandLogo small />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {siteConfig.mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-foreground/76 transition hover:text-brand-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a
            href={siteConfig.contacts.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Scrivici su WhatsApp
          </a>
        </div>

        <details className="group ml-auto lg:hidden">
          <summary className="flex cursor-pointer list-none items-center rounded-full border border-border/60 bg-white px-3.5 py-2 text-sm font-semibold text-brand-dark">
            Menu
          </summary>
          <div className="absolute right-4 top-[68px] w-[min(18rem,calc(100vw-2rem))] rounded-[1.2rem] border border-border/70 bg-white p-4 shadow-[0_18px_32px_rgba(15,61,56,0.1)] sm:right-6">
            <div className="border-b border-border/60 pb-3">
              <BrandLogo small />
            </div>

            <nav className="mt-4 flex flex-col gap-2">
              {siteConfig.mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2 py-2 text-sm font-medium text-foreground/80 transition hover:text-brand-dark"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

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

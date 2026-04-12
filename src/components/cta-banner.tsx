import Link from "next/link";

import { siteConfig } from "@/data/site";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl rounded-[2rem] border border-brand/10 bg-brand px-6 py-8 text-white shadow-[var(--shadow)] sm:px-10 sm:py-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.24em] text-white/70">
            Contatto diretto
          </p>
          <h2 className="mt-3 font-display text-3xl">{siteConfig.finalCta.title}</h2>
          <p className="mt-3 text-sm leading-7 text-white/80">
            {siteConfig.finalCta.description}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={siteConfig.contacts.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-soft"
          >
            Scrivici su WhatsApp
          </a>
          <Link
            href="/servizi"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Scopri i servizi
          </Link>
        </div>
      </div>
    </section>
  );
}

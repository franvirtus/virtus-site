import Link from "next/link";

import { getServiceProfessionals, type Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const linkedProfessionals = getServiceProfessionals(service);

  return (
    <article className="group flex h-full flex-col rounded-[1.9rem] border border-border/70 bg-white p-7 shadow-[0_20px_40px_rgba(15,61,56,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_28px_52px_rgba(15,61,56,0.1)]">
      <div className="flex items-start justify-between gap-4">
        <div className="max-w-[15rem]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand/75">
            {service.kicker}
          </p>
          <h2 className="mt-3 text-[1.7rem] font-semibold leading-tight text-brand-dark">
            {service.title}
          </h2>
        </div>
        <span className="rounded-full border border-brand/10 bg-brand-soft px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brand-dark">
          {linkedProfessionals.length} prof.
        </span>
      </div>

      <p className="mt-5 text-sm leading-7 text-foreground/76">
        {service.shortDescription}
      </p>

      <div className="mt-6 rounded-[1.4rem] border border-border/60 bg-surface-muted px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/48">
          Per chi e utile
        </p>
        <p className="mt-2 text-sm leading-7 text-foreground/82">
          {service.audience[0]}
        </p>
      </div>

      <ul className="mt-6 space-y-3">
        {service.highlights.slice(0, 2).map((highlight) => (
          <li
            key={highlight}
            className="rounded-[1.2rem] border border-border/60 px-4 py-3 text-sm leading-7 text-foreground/78"
          >
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {linkedProfessionals.slice(0, 2).map((professional) => (
          <span
            key={professional.name}
            className="rounded-full bg-brand-dark px-3 py-2 text-[0.72rem] font-semibold text-white/88"
          >
            {professional.name}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-8">
        <Link
          href={service.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition group-hover:text-brand-dark"
        >
          Scopri il servizio
          <span aria-hidden>-&gt;</span>
        </Link>
      </div>
    </article>
  );
}

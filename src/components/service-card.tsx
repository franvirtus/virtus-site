import Link from "next/link";

import { getServiceProfessionals, type Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const linkedProfessionals = getServiceProfessionals(service);

  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-border/70 bg-white p-7 shadow-[var(--shadow)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-brand">{service.kicker}</p>
          <h2 className="mt-3 text-2xl font-semibold text-brand-dark">
            {service.title}
          </h2>
        </div>
        <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-dark">
          {linkedProfessionals.length} professionist{linkedProfessionals.length > 1 ? "i" : "a"}
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-foreground/75">
        {service.shortDescription}
      </p>

      <div className="mt-5 rounded-[1.25rem] bg-surface-muted p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          Per chi e utile
        </p>
        <p className="mt-2 text-sm leading-7 text-foreground/80">
          {service.audience[0]}
        </p>
      </div>

      <ul className="mt-5 space-y-2 text-sm text-foreground/80">
        {service.highlights.slice(0, 3).map((highlight) => (
          <li key={highlight} className="rounded-xl border border-border/60 px-4 py-3">
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {linkedProfessionals.slice(0, 2).map((professional) => (
          <span
            key={professional.name}
            className="rounded-full border border-border/70 px-3 py-2 text-xs font-medium text-foreground/75"
          >
            {professional.name}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-border/70 pt-5">
        <span className="text-sm text-foreground/65">Quando puo essere utile</span>
        <Link
          href={service.href}
          className="inline-flex text-sm font-semibold text-brand hover:text-brand-dark"
        >
          Scopri il servizio
        </Link>
      </div>
    </article>
  );
}

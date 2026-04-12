import Link from "next/link";

import { getServiceProfessionals, type Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const linkedProfessionals = getServiceProfessionals(service);

  return (
    <article className="group flex h-full flex-col border border-border/60 bg-white p-6 shadow-[0_8px_22px_rgba(15,61,56,0.04)] transition hover:shadow-[0_14px_28px_rgba(15,61,56,0.06)]">
      <div className="flex items-start justify-between gap-4">
        <div className="max-w-[15rem]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand/75">
            {service.kicker}
          </p>
          <h2 className="mt-3 text-[1.45rem] font-semibold leading-tight text-brand-dark">
            {service.title}
          </h2>
        </div>
        <span className="border border-brand/10 bg-brand-soft px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-brand-dark">
          {linkedProfessionals.length} prof.
        </span>
      </div>

      <p className="mt-5 text-sm leading-7 text-foreground/76">
        {service.shortDescription}
      </p>

      <div className="mt-5 border-l-2 border-brand/12 pl-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/48">
          Per chi e utile
        </p>
        <p className="mt-2 text-sm leading-7 text-foreground/82">
          {service.audience[0]}
        </p>
      </div>

      <ul className="mt-5 space-y-2">
        {service.highlights.slice(0, 2).map((highlight) => (
          <li
            key={highlight}
            className="text-sm leading-7 text-foreground/78"
          >
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {linkedProfessionals.slice(0, 2).map((professional) => (
          <span
            key={professional.name}
            className="border border-border/70 px-3 py-1.5 text-[0.72rem] font-medium text-foreground/76"
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

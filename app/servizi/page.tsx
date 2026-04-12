import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { createPageMetadata } from "@/lib/metadata";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export const metadata = createPageMetadata({
  title: siteConfig.seo.services.title,
  description: siteConfig.seo.services.description,
  path: "/servizi",
});

export default function ServicesPage() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Servizi"
          title="Tutti i servizi di Virtus in una struttura semplice da consultare."
          description="Ogni pagina servizio spiega in modo diretto a chi puo essere utile, quando puo essere utile e quali professionisti sono collegati."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

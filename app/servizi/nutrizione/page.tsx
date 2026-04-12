import { ServiceDetailPage } from "@/components/service-detail-page";
import { getServiceBySlug } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";

const service = getServiceBySlug("nutrizione");

export const metadata = createPageMetadata({
  title: service.seoTitle,
  description: service.seoDescription,
  path: service.href,
});

export default function NutrizionePage() {
  return <ServiceDetailPage service={service} />;
}

import type { MetadataRoute } from "next";

import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/servizi`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/professionisti`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/chi-siamo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contatti`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${base}${service.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticPages, ...servicePages];
}

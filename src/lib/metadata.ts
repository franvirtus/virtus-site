import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

type CreatePageMetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
}: CreatePageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: new URL(path, siteConfig.siteUrl).toString(),
      siteName: siteConfig.name,
      locale: "it_IT",
      type: "website",
    },
  };
}

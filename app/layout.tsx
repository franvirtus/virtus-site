import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | Salute, benessere e performance`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    siteName: siteConfig.name,
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Salute, benessere e performance`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.name,
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "MedicalOrganization"],
      "@id": `${siteConfig.siteUrl}/#organization`,
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.siteUrl,
      telephone: siteConfig.contacts.phone,
      email: siteConfig.contacts.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.contacts.address,
        addressCountry: "IT",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
        },
      ],
      hasMap: siteConfig.siteUrl,
      medicalSpecialty: [
        "Fisioterapia",
        "Nutrizione",
        "Osteopatia",
        "Logopedia",
        "Ortottica",
        "Ostetricia",
        "Massoterapia",
      ],
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.siteUrl}/#website`,
      url: siteConfig.siteUrl,
      name: siteConfig.name,
      publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
      inLanguage: "it-IT",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${dmSans.variable} ${dmSerifDisplay.variable}`}
    >
      <body className="text-foreground antialiased">
        <a href="#main-content" className="skip-nav">
          Vai al contenuto principale
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

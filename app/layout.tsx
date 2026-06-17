// Virtus · app/layout.tsx
// Root layout. globals.css loads the fonts (Archivo + DM Sans + JetBrains Mono)
// via @import and the redesign component classes. See HANDOFF.md.
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Virtus — Allenati meglio. Muoviti meglio. Stai meglio.",
  description:
    "Virtus è un centro fitness, movimento e benessere a Brescia: allenamento personalizzato, Pilates, Pilates Reformer, recupero e postura. Due sedi — Via Corfù 71 e Via Montello 79. Prenota una prova.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}

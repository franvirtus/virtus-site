import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter, WhatsappFab, WA } from "@/components/SiteChrome";
import Icon from "@/components/Icon";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Servizi | Virtus",
  description:
    "Fisioterapia, nutrizione, osteopatia, osteopatia pediatrica, logopedia, ortottica, ostetricia, massoterapia. Scopri tutti i servizi del centro Virtus a Brescia.",
};

const SERVICE_ICONS: Record<string, string> = {
  fisioterapia:            "activity",
  nutrizione:              "apple",
  osteopatia:              "hand",
  "osteopatia-pediatrica": "baby",
  ortottica:               "eye",
  logopedia:               "mic",
  ostetricia:              "heart",
  massoterapia:            "wind",
};

export default function ServiziPage() {
  return (
    <>
      <SiteHeader active="servizi" transparent />

      {/* ── PAGE HERO ──────────────────────────────────────── */}
      <div className="phero">
        <div className="wrap in">
          <div className="crumb">
            <Link href="/">Home</Link> / Servizi
          </div>
          <h1>
            Otto aree specialistiche,<br />
            <span className="hl">un unico centro.</span>
          </h1>
          <p>
            Ogni servizio è presidiato da professionisti dedicati, in dialogo
            con le altre figure del centro per costruire percorsi integrati.
          </p>
          <div className="pcta">
            <Link className="btn btn-red" href="/contatti">
              <Icon name="calendar-check" />
              Prenota una consulenza
            </Link>
            <a className="btn btn-ghost-l" href={WA} target="_blank" rel="noopener noreferrer">
              <Icon name="message-circle" />
              Scrivici su WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── GRIGLIA SERVIZI ─────────────────────────────────── */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Panoramica</span>
            <h2>Tutti i nostri servizi</h2>
            <p>
              Clicca su un servizio per scoprire come lavoriamo, quando può
              essere utile e chi sono i professionisti dell'area.
            </p>
          </div>
          <div
            className="msvc-grid reveal"
            style={{
              background: "var(--ink)",
              borderRadius: "1.4rem",
              padding: "2rem",
              marginTop: "2rem",
            }}
          >
            {services.map(s => (
              <Link key={s.slug} href={s.href} className="msvc">
                <div className="ic"><Icon name={SERVICE_ICONS[s.slug] ?? "activity"} /></div>
                <h3>{s.title}</h3>
                <p>{s.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELENCO DETTAGLIATO ──────────────────────────────── */}
      <section className="block" style={{ background: "var(--beige)" }}>
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow">In dettaglio</span>
            <h2>A chi si rivolge ogni servizio</h2>
          </div>
          <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={s.href}
                className="reveal svc-row"
              >
                <div className="svc-row-left">
                  <div className="need-card-icon">
                    <Icon name={SERVICE_ICONS[s.slug] ?? "activity"} />
                  </div>
                  <div>
                    <div className="svc-row-title">{s.title}</div>
                    <div className="svc-row-kicker">{s.kicker}</div>
                  </div>
                </div>
                <Icon name="arrow-right" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="block">
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="in">
              <h2>Non sai quale servizio fa per te?</h2>
              <p>
                Scrivici o torna in homepage per usare lo strumento di orientamento:
                ti aiutiamo a capire da dove partire.
              </p>
              <div className="cta-actions">
                <Link className="btn btn-white" href="/#orientamento">
                  <Icon name="compass" />
                  Strumento di orientamento
                </Link>
                <a className="btn btn-ghost-l" href={WA} target="_blank" rel="noopener noreferrer">
                  <Icon name="message-circle" />
                  Scrivici su WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsappFab />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter, WhatsappFab, WA } from "@/components/SiteChrome";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Chi siamo | Virtus",
  description:
    "Virtus è un centro multidisciplinare dove fisioterapisti, nutrizionisti, osteopati, logopedisti, ortottiste, ostetriche e massoterapisti lavorano insieme intorno alla persona.",
};

const VALUES = [
  {
    icon: "users" as const,
    title: "Multidisciplinarità",
    desc: "I professionisti si parlano, si confrontano e costruiscono risposte integrate per ogni persona che entra al centro.",
  },
  {
    icon: "search" as const,
    title: "Valutazione prima di tutto",
    desc: "Nessun percorso parte da un protocollo standard. Ogni storia è ascoltata, valutata e affrontata in modo personale.",
  },
  {
    icon: "shield-check" as const,
    title: "Qualità e aggiornamento",
    desc: "I professionisti di Virtus sono costantemente aggiornati e lavorano secondo i più recenti standard clinici e scientifici.",
  },
  {
    icon: "heart" as const,
    title: "Attenzione alla persona",
    desc: "Non trattiamo sintomi in isolamento: lavoriamo intorno alla persona, ai suoi obiettivi, alla sua qualità di vita.",
  },
];

const AREAS = [
  { slug: "fisioterapia",          label: "Fisioterapia",            icon: "activity" as const },
  { slug: "nutrizione",            label: "Nutrizione",              icon: "apple" as const },
  { slug: "osteopatia",            label: "Osteopatia",              icon: "hand" as const },
  { slug: "osteopatia-pediatrica", label: "Osteopatia pediatrica",   icon: "baby" as const },
  { slug: "ortottica",             label: "Ortottica",               icon: "eye" as const },
  { slug: "logopedia",             label: "Logopedia",               icon: "mic" as const },
  { slug: "ostetricia",            label: "Ostetricia",              icon: "heart" as const },
  { slug: "massoterapia",          label: "Massoterapia",            icon: "wind" as const },
];

export default function ChiSiamoPage() {
  return (
    <>
      <SiteHeader active="chi-siamo" transparent />

      {/* ── PAGE HERO ────────────────────────────────────── */}
      <div className="phero">
        <div className="wrap in">
          <div className="crumb">
            <Link href="/">Home</Link> / Chi siamo
          </div>
          <h1>
            Un centro pensato<br />
            <span className="hl">intorno alla persona.</span>
          </h1>
          <p>
            Virtus è un centro multidisciplinare dove professionisti di aree diverse
            lavorano insieme per rispondere ai bisogni reali di salute, movimento e benessere.
          </p>
        </div>
      </div>

      {/* ── POSIZIONAMENTO ────────────────────────────────── */}
      <section className="block">
        <div className="wrap">
          <div className="statement-in">
            <div className="prose">
              <h2>Non una palestra, non un ambulatorio singolo.</h2>
              <p>
                Virtus nasce dall'idea che la salute non si affronta in silos. Un mal di
                schiena può avere componenti posturali, funzionali e nutrizionali insieme.
                Un bambino che fatica a leggere può beneficiare di valutazioni ortottiche
                e logopediche in parallelo.
              </p>
              <p>
                Per questo abbiamo costruito un centro dove fisioterapisti, nutrizionisti,
                osteopati, logopedisti, ortottiste, ostetriche e massoterapisti lavorano
                nello stesso spazio, si confrontano e costruiscono percorsi integrati.
              </p>
              <p>
                L'obiettivo è uno solo: che ogni persona trovi il percorso più adatto
                a sé, senza dover cercare da sola la risposta giusta.
              </p>
            </div>
            <div className="vals">
              {VALUES.map((v, i) => (
                <div key={i} className="v">
                  <Icon name={v.icon} />
                  <div>
                    <b>{v.title}</b><br />
                    <span>{v.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LE AREE ──────────────────────────────────────── */}
      <section className="block" style={{ background: "var(--ink)" }}>
        <div className="wrap">
          <div className="sec-head center reveal" style={{ color: "#fff" }}>
            <span className="eyebrow" style={{ color: "var(--red)" }}>Le nostre aree</span>
            <h2 style={{ color: "#fff" }}>Otto specialità, un unico centro</h2>
            <p style={{ color: "rgba(255,255,255,.72)" }}>
              Ogni area è presidiata da professionisti dedicati, in costante dialogo tra loro.
            </p>
          </div>
          <div className="msvc-grid">
            {AREAS.map(a => (
              <Link key={a.slug} href={`/servizi/${a.slug}`} className="msvc reveal">
                <div className="ic"><Icon name={a.icon} /></div>
                <h3>{a.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── IL METODO ────────────────────────────────────── */}
      <section className="block" style={{ background: "var(--beige)" }}>
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow">Come lavoriamo</span>
            <h2>Ascolto, valutazione, integrazione, continuità.</h2>
            <p>
              Prima di costruire qualsiasi percorso, ascoltiamo. Poi valutiamo. Poi, dove
              serve, integriamo più figure. E restiamo al tuo fianco nel tempo.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="block">
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="in">
              <h2>Vuoi sapere da dove partire?</h2>
              <p>
                Scrivici o prenota una prima consulenza. Ti aiuteremo a capire
                quale professionista coinvolgere e come costruire il tuo percorso.
              </p>
              <div className="cta-actions">
                <Link className="btn btn-white" href="/contatti">
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
        </div>
      </section>

      <SiteFooter />
      <WhatsappFab />
    </>
  );
}

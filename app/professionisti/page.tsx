import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter, WhatsappFab, WA } from "@/components/SiteChrome";
import Icon from "@/components/Icon";
import { professionals } from "@/data/professionals";

export const metadata: Metadata = {
  title: "I professionisti | Virtus",
  description:
    "Il team di Virtus: fisioterapisti, nutrizionisti, osteopati, logopedisti, ortottiste, ostetriche e massoterapisti che lavorano insieme intorno alla persona.",
};

const active = professionals.filter(p => !p.isUpdating);

export default function ProfessionistiPage() {
  return (
    <>
      <SiteHeader active="professionisti" transparent />

      {/* ── PAGE HERO ──────────────────────────────────────── */}
      <div className="phero">
        <div className="wrap in">
          <div className="crumb">
            <Link href="/">Home</Link> / Professionisti
          </div>
          <h1>
            Il team che lavora<br />
            <span className="hl">intorno a te.</span>
          </h1>
          <p>
            Fisioterapisti, nutrizionisti, osteopati, logopedisti, ortottiste,
            ostetriche, massoterapisti. Professionisti qualificati che si confrontano
            ogni giorno per costruire percorsi integrati.
          </p>
        </div>
      </div>

      {/* ── GRIGLIA PROFESSIONISTI ──────────────────────────── */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Il team Virtus</span>
            <h2>Professionisti per ogni area</h2>
            <p>
              Ogni figura è specializzata nella propria area e in dialogo con le altre.
              Nessun percorso viene costruito in isolamento.
            </p>
          </div>
          <div className="prof-grid" style={{ marginTop: "2.5rem" }}>
            {active.map((p, i) => (
              <div key={i} className="prof-card reveal">
                <p className="prof-area">{p.area}</p>
                <h4>{p.name}</h4>
                <p className="prof-role">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COME LAVORIAMO ──────────────────────────────────── */}
      <section className="block" style={{ background: "var(--beige)" }}>
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow">Il metodo</span>
            <h2>Professionisti che si parlano</h2>
            <p>
              Il valore di Virtus non è solo nella qualità dei singoli specialisti,
              ma nella loro capacità di lavorare insieme. Quando un caso lo richiede,
              fisioterapista, osteopata e nutrizionista si confrontano per costruire
              una risposta integrata.
            </p>
          </div>
          <div className="steps">
            {[
              { num: "01", icon: "message-circle" as const, title: "Ascolto", desc: "Il professionista dedica il tempo necessario per capire la tua storia prima di procedere." },
              { num: "02", icon: "search" as const, title: "Valutazione", desc: "Nessun percorso parte da protocolli standard: prima viene la valutazione individuale." },
              { num: "03", icon: "git-merge" as const, title: "Integrazione", desc: "Se serve, più figure vengono coinvolte e coordinate intorno allo stesso obiettivo." },
              { num: "04", icon: "check-circle" as const, title: "Continuità", desc: "Il percorso evolve con te nel tempo, adattandosi ai progressi reali." },
            ].map((s, i) => (
              <div key={i} className="step reveal">
                <span className="num">{s.num}</span>
                <div className="ic"><Icon name={s.icon} /></div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="block">
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="in">
              <h2>Vuoi parlare con uno dei nostri professionisti?</h2>
              <p>
                Prenota una prima consulenza o scrivici su WhatsApp per capire
                da dove iniziare.
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

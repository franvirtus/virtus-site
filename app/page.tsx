import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter, WhatsappFab, WA } from "@/components/SiteChrome";
import Icon from "@/components/Icon";
import { professionals } from "@/data/professionals";
import { services } from "@/data/services";
import ServiceFinder from "@/components/ServiceFinder";

export const metadata: Metadata = {
  title: "Virtus | Centro multidisciplinare di salute a Brescia",
  description:
    "Fisioterapia, nutrizione, osteopatia, logopedia, ortottica, ostetricia, massoterapia. Professionisti diversi, un unico centro pensato intorno a te.",
};

const activeProfessionals = professionals.filter(p => !p.isUpdating);

const SERVICE_ICONS: Record<string, string> = {
  fisioterapia:          "activity",
  nutrizione:            "apple",
  osteopatia:            "hand",
  "osteopatia-pediatrica": "baby",
  ortottica:             "eye",
  logopedia:             "mic",
  ostetricia:            "heart",
  massoterapia:          "wind",
};

const NEED_CARDS = [
  {
    icon: "zap" as const,
    title: "Hai un dolore o un disturbo",
    desc: "Schiena, articolazioni, cervicale, voce, vista: parti dal professionista giusto senza perdere tempo.",
    tags: ["Fisioterapia", "Osteopatia", "Logopedia", "Ortottica"],
  },
  {
    icon: "compass" as const,
    title: "Non sai da dove iniziare",
    desc: "Se il tuo bisogno non è ancora chiaro, usa lo strumento di orientamento qui sopra o scrivici direttamente.",
    tags: ["Orientamento", "Prima valutazione"],
  },
  {
    icon: "users" as const,
    title: "Stai seguendo tuo figlio",
    desc: "Sviluppo, linguaggio, vista, crescita: accompagniamo i bambini con approcci delicati e adatti alla loro età.",
    tags: ["Osteopatia pediatrica", "Logopedia", "Ortottica"],
  },
  {
    icon: "heart" as const,
    title: "Gravidanza o post-parto",
    desc: "Prima, durante e dopo: l'ostetrica e gli altri professionisti del centro seguono la donna in ogni fase.",
    tags: ["Ostetricia", "Osteopatia", "Nutrizione"],
  },
  {
    icon: "trending-up" as const,
    title: "Vuoi prenderti cura della salute",
    desc: "Alimentazione, controllo del peso, prevenzione, qualità del movimento: costruiamo un percorso su misura.",
    tags: ["Nutrizione", "Fisioterapia", "Massoterapia"],
  },
  {
    icon: "refresh-cw" as const,
    title: "Recupero da infortunio o intervento",
    desc: "Tornare all'attività quotidiana o sportiva nel modo corretto, con un piano di recupero personalizzato.",
    tags: ["Fisioterapia", "Osteopatia", "Massoterapia"],
  },
];

const METHOD_STEPS = [
  {
    num: "01",
    icon: "message-circle" as const,
    title: "Ascolto",
    desc: "Ogni percorso inizia da una conversazione. Capiamo la tua storia, i tuoi obiettivi e i tuoi dubbi.",
  },
  {
    num: "02",
    icon: "search" as const,
    title: "Valutazione",
    desc: "Il professionista coinvolto fa una valutazione approfondita prima di costruire qualsiasi percorso.",
  },
  {
    num: "03",
    icon: "git-merge" as const,
    title: "Integrazione",
    desc: "Quando utile, più figure lavorano insieme intorno alla stessa persona — fisioterapia, nutrizione, osteopatia.",
  },
  {
    num: "04",
    icon: "check-circle" as const,
    title: "Continuità",
    desc: "Ti seguiamo nel tempo, adattando il percorso ai progressi reali, non a protocolli fissi.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader transparent active={null} />

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Centro multidisciplinare · Brescia</span>
            <h1>
              <span className="ln">Professionisti</span>
              <span className="ln">diversi,</span>
              <span className="ln hl">un percorso</span>
              <span className="ln hl">che ti ascolta.</span>
            </h1>
            <p className="lead">
              Fisioterapia, nutrizione, osteopatia, logopedia, ortottica,
              ostetricia, massoterapia. Tutto in un unico centro pensato intorno
              alla persona.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-red" href="/contatti">
                <Icon name="calendar-check" />
                Prenota una consulenza
              </Link>
              <a className="btn btn-ghost-l" href={WA} target="_blank" rel="noopener noreferrer">
                <Icon name="message-circle" />
                Scrivici su WhatsApp
              </a>
            </div>
            <div className="hero-trust">
              <div className="ht">
                <Icon name="award" />
                <span>Professionisti qualificati</span>
              </div>
              <div className="ht">
                <Icon name="git-merge" />
                <span>Approccio multidisciplinare</span>
              </div>
              <div className="ht">
                <Icon name="shield-check" />
                <span>Percorsi personalizzati</span>
              </div>
            </div>
          </div>

          <div className="hero-media">
            <div className="big" />
            <div className="hero-tag">Brescia</div>
            <div className="hero-card">
              <div className="ic"><Icon name="users" /></div>
              <div>
                <div className="t">8 aree specialistiche</div>
                <div className="s">Un team integrato al tuo fianco</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ORIENTAMENTO (ServiceFinder) ────────────────── */}
      <section className="block" style={{ background: "var(--beige)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Strumento di orientamento</span>
            <h2>Non sai da dove partire?</h2>
            <p>
              Rispondi a tre domande e ti indichiamo il professionista più adatto
              al tuo bisogno. Lo strumento ha funzione orientativa, non diagnostica.
            </p>
          </div>
          <div className="finder-outer reveal">
            <ServiceFinder />
          </div>
        </div>
      </section>

      {/* ── DA DOVE PARTIRE (need cards) ────────────────── */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Da dove partire?</span>
            <h2>Ogni situazione ha il suo punto di partenza</h2>
            <p>Qualunque sia il tuo bisogno, trovi qui il percorso giusto per iniziare.</p>
          </div>
          <div className="need-grid">
            {NEED_CARDS.map((c, i) => (
              <div key={i} className="need-card reveal">
                <div className="need-card-icon"><Icon name={c.icon} /></div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="need-card-tags">
                  {c.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVIZI ─────────────────────────────────────── */}
      <section className="block" style={{ background: "var(--ink)" }}>
        <div className="wrap">
          <div className="sec-head center reveal" style={{ color: "#fff" }}>
            <span className="eyebrow" style={{ color: "var(--red)" }}>Le nostre aree</span>
            <h2 style={{ color: "#fff" }}>Salute a tutto tondo</h2>
            <p style={{ color: "rgba(255,255,255,.72)" }}>
              Otto aree specialistiche che lavorano insieme, coordinate intorno
              alle esigenze di ogni persona.
            </p>
          </div>
          <div className="msvc-grid">
            {services.map(s => (
              <Link key={s.slug} href={s.href} className="msvc reveal">
                <div className="ic"><Icon name={SERVICE_ICONS[s.slug] ?? "activity"} /></div>
                <h3>{s.title}</h3>
                <p>{s.shortDescription}</p>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link className="btn btn-ghost-l" href="/servizi">
              <Icon name="grid" />
              Tutti i servizi
            </Link>
          </div>
        </div>
      </section>

      {/* ── METODO ──────────────────────────────────────── */}
      <section className="block" style={{ background: "var(--beige)" }}>
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow">Il metodo Virtus</span>
            <h2>Non un protocollo. Un percorso.</h2>
            <p>
              Ogni persona che entra a Virtus trova professionisti che si
              parlano tra loro per costruire risposte integrate.
            </p>
          </div>
          <div className="steps">
            {METHOD_STEPS.map((s, i) => (
              <div key={i} className="step reveal">
                <span className="num">{s.num}</span>
                <div className="ic"><Icon name={s.icon} /></div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="method-note reveal">
            Il tutto in un unico centro, senza rimbalzare tra strutture diverse.
          </p>
        </div>
      </section>

      {/* ── PROFESSIONISTI (teaser) ──────────────────────── */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Il team</span>
            <h2>Professionisti qualificati, non figure generiche</h2>
            <p>
              Fisioterapisti, nutrizionisti, osteopati, logopedisti, ortottiste,
              ostetriche, massoterapisti: ciascuno specializzato nella propria
              area, in dialogo con gli altri.
            </p>
          </div>
          <div className="prof-grid">
            {activeProfessionals.slice(0, 8).map((p, i) => (
              <div key={i} className="prof-card reveal">
                <p className="prof-area">{p.area}</p>
                <h4>{p.name}</h4>
                <p className="prof-role">{p.role}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link className="btn btn-ghost-d" href="/professionisti">
              <Icon name="users" />
              Scopri tutto il team
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ────────────────────────────────────── */}
      <section className="block">
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="in">
              <h2>Pronto a iniziare?</h2>
              <p>
                Prenota una prima consulenza o scrivici su WhatsApp: ti aiutiamo
                a capire da dove partire e quale professionista coinvolgere.
              </p>
              <div className="cta-actions">
                <Link className="btn btn-white" href="/contatti">
                  <Icon name="calendar-check" />
                  Prenota una consulenza
                </Link>
                <a
                  className="btn btn-ghost-l"
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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

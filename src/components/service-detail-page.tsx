import Link from "next/link";
import { SiteHeader, SiteFooter, WhatsappFab, WA } from "@/components/SiteChrome";
import Icon from "@/components/Icon";
import { getServiceProfessionals, type Service } from "@/data/services";

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

export function ServiceDetailPage({ service }: { service: Service }) {
  const profs = getServiceProfessionals(service);

  return (
    <>
      <SiteHeader active="servizi" transparent />

      {/* ── PAGE HERO ──────────────────────────────────────────── */}
      <div className="phero">
        <div className="wrap in">
          <div className="crumb">
            <Link href="/">Home</Link> /{" "}
            <Link href="/servizi">Servizi</Link> / {service.title}
          </div>
          <h1>
            <span className="hl">{service.title}</span>
          </h1>
          <p>{service.intro}</p>
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

      {/* ── KICKER + DESCRIZIONE ────────────────────────────────── */}
      <section className="block">
        <div className="wrap split2">
          <div className="prose">
            <span className="eyebrow red">{service.kicker}</span>
            <h2 style={{ marginTop: ".8rem" }}>In cosa consiste</h2>
            <p>{service.description}</p>

            <h3 style={{ marginTop: "2rem", fontSize: "1.1rem" }}>In breve</h3>
            <ul className="benefits">
              {service.highlights.map(h => (
                <li key={h}>
                  <Icon name="check-circle" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="aside-card">
            <p className="eyebrow" style={{ color: "rgba(255,255,255,.55)", marginBottom: ".8rem" }}>
              Per chi è utile
            </p>
            <div className="facts">
              {service.audience.map(a => (
                <div className="fact" key={a}>
                  <Icon name="user-check" />
                  <span>{a}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <a
                className="btn btn-red"
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <Icon name="message-circle" />
                Scrivici su WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUANDO PUÒ ESSERE UTILE ─────────────────────────────── */}
      <section className="block" style={{ background: "var(--beige)" }}>
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow">Quando può essere utile</span>
            <h2>Situazioni che possono trarre beneficio</h2>
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
            {service.whenHelpful.map((w, i) => (
              <div key={i} className="msvc">
                <div className="ic">
                  <Icon name={SERVICE_ICONS[service.slug] ?? "activity"} />
                </div>
                <p style={{ margin: 0, color: "rgba(255,255,255,.82)", fontSize: ".9rem", lineHeight: "1.6" }}>
                  {w}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROFESSIONISTI ──────────────────────────────────────── */}
      {profs.length > 0 && (
        <section className="block">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Il team</span>
              <h2>I professionisti di quest&apos;area</h2>
            </div>
            <div className="prof-grid">
              {profs.map((p, i) => (
                <div key={i} className="prof-card reveal">
                  <p className="prof-area">{p.area}</p>
                  <h4>{p.name}</h4>
                  <p className="prof-role">{p.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      {service.faq && service.faq.length > 0 && (
        <section className="block" style={{ background: "var(--beige)" }}>
          <div className="wrap">
            <div className="sec-head center reveal">
              <span className="eyebrow">FAQ</span>
              <h2>Domande frequenti</h2>
            </div>
            <div
              style={{
                marginTop: "2.5rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {service.faq.map((item, i) => (
                <div
                  key={i}
                  className="reveal"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--line)",
                    borderRadius: "1.1rem",
                    padding: "1.5rem",
                  }}
                >
                  <h3 style={{ fontSize: "1rem", lineHeight: "1.4", margin: "0 0 .7rem" }}>
                    {item.question}
                  </h3>
                  <p style={{ fontSize: ".9rem", lineHeight: "1.7", color: "var(--muted)", margin: 0 }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PAGE NOTE + CTA ─────────────────────────────────────── */}
      <section className="block">
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="in">
              <h2>Vuoi capire se questo è il punto giusto da cui partire?</h2>
              <p>{service.pageNote}</p>
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

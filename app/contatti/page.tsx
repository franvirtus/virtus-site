// Virtus · app/contatti/page.tsx
// Port of redesign/Contatti.html. The form is the client component RequestForm.
import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { SiteHeader, SiteFooter, WhatsappFab, WA, TEL } from "@/components/SiteChrome";
import RequestForm from "@/components/RequestForm";

export const metadata: Metadata = {
  title: "Contatti — Prenota una prova | Virtus",
  description:
    "Prenota una prova da Virtus a Brescia. Due sedi: Via Corfù 71 e Via Montello 79. Scrivici su WhatsApp, chiamaci o compila il modulo: ti aiutiamo a trovare il percorso giusto.",
};

export default function Contatti() {
  return (
    <>
      <SiteHeader active="contatti" />

      {/* HERO */}
      <section className="phero">
        <div className="wrap in">
          <p className="crumb"><Link href="/">Home</Link> · Contatti</p>
          <p className="eyebrow" style={{ color: "var(--red)", marginTop: "1rem" }}>Contatti</p>
          <h1>Prenota la tua <span className="hl">prova</span>.</h1>
          <p>
            Il primo passo è semplice: scrivici su WhatsApp, chiamaci o compila il
            modulo. Ti rispondiamo presto e capiamo insieme da quale percorso partire
            — senza impegno.
          </p>
          <div className="pcta">
            <a className="btn btn-red" href={WA}><Icon name="message-circle" />Scrivici su WhatsApp</a>
            <a className="btn btn-ghost-l" href={TEL}><Icon name="phone" />Chiama il centro</a>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="block" id="form">
        <div className="wrap form-grid">
          <RequestForm />

          <div className="contact-side reveal">
            <div className="cinfo"><Icon name="message-circle" /><div><b>WhatsApp</b><p>+39 000 000 0000<br />Il canale più rapido per rispondere.</p></div></div>
            <div className="cinfo"><Icon name="phone" /><div><b>Telefono</b><p>+39 030 000 0000<br />Lun–Ven 8–21 · Sab 9–13</p></div></div>
            <div className="cinfo"><Icon name="mail" /><div><b>Email</b><p>info@virtus.it</p></div></div>
            <div className="cinfo">
              <Icon name="map-pin" />
              <div>
                <b>Sede Corfù</b>
                <p>
                  Via Corfù 71, Brescia ·{" "}
                  <a href="https://maps.google.com/?q=Via+Corfù+71+Brescia" target="_blank" rel="noopener" style={{ color: "var(--red)", fontWeight: 600 }}>Indicazioni</a>
                </p>
              </div>
            </div>
            <div className="cinfo">
              <Icon name="map-pin" />
              <div>
                <b>Sede Montello</b>
                <p>
                  Via Montello 79, Brescia ·{" "}
                  <a href="https://maps.google.com/?q=Via+Montello+79+Brescia" target="_blank" rel="noopener" style={{ color: "var(--red)", fontWeight: 600 }}>Indicazioni</a>
                </p>
              </div>
            </div>
            <span className="note" style={{ color: "var(--faint)" }}>Recapiti di esempio — da sostituire con quelli reali.</span>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsappFab />
    </>
  );
}

// Virtus · RequestForm.tsx
// Client form for the Contatti page. Mock submit (shows the success state);
// wire `onSubmit` to your real backend / email service.
"use client";

import { useState } from "react";
import Icon from "./Icon";
import { WA } from "./SiteChrome";

export default function RequestForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="formcard reveal in">
        <div className="form-done">
          <div className="ic"><Icon name="check" /></div>
          <h3>Richiesta inviata!</h3>
          <p>
            Grazie. Ti contatteremo al più presto per fissare la tua prova. Per
            qualcosa di urgente, scrivici su WhatsApp.
          </p>
          <div style={{ marginTop: "1.4rem" }}>
            <a className="btn btn-ghost-d" href={WA}>
              <Icon name="message-circle" />
              Scrivici su WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="formcard reveal">
      <h2 style={{ fontSize: "1.6rem" }}>Richiedi la tua prova</h2>
      <p style={{ color: "var(--muted)", margin: ".6rem 0 1.6rem", fontSize: ".98rem", lineHeight: 1.6 }}>
        Lascia i tuoi dati: ti contattiamo noi per fissare l&apos;appuntamento nella
        sede che preferisci.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: POST form data to your backend / email service here.
          setSent(true);
        }}
      >
        <div className="field two">
          <div className="field" style={{ margin: 0 }}>
            <label htmlFor="nome">Nome e cognome</label>
            <input id="nome" name="nome" placeholder="Il tuo nome" required />
          </div>
          <div className="field" style={{ margin: 0 }}>
            <label htmlFor="tel">Telefono</label>
            <input id="tel" name="tel" type="tel" placeholder="+39 ..." required />
          </div>
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="nome@email.it" />
        </div>
        <div className="field two">
          <div className="field" style={{ margin: 0 }}>
            <label htmlFor="sede">Sede preferita</label>
            <select id="sede" name="sede">
              <option>Via Corfù 71</option>
              <option>Via Montello 79</option>
              <option>Indifferente</option>
            </select>
          </div>
          <div className="field" style={{ margin: 0 }}>
            <label htmlFor="interesse">Interesse</label>
            <select id="interesse" name="interesse">
              <option>Allenamento personalizzato</option>
              <option>Pilates</option>
              <option>Pilates Reformer</option>
              <option>Benessere &amp; salute</option>
              <option>Recupero &amp; postura</option>
              <option>Non lo so ancora</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="msg">Messaggio (facoltativo)</label>
          <textarea id="msg" name="msg" rows={3} placeholder="Raccontaci brevemente il tuo obiettivo…" />
        </div>
        <button className="btn btn-red" type="submit" style={{ width: "100%" }}>
          <Icon name="send" />
          Invia richiesta
        </button>
        <p style={{ margin: ".9rem 0 0", fontSize: ".78rem", color: "var(--faint)", textAlign: "center" }}>
          Modulo dimostrativo — da collegare al backend reale.
        </p>
      </form>
    </div>
  );
}

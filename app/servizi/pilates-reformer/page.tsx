// Virtus · app/servizi/pilates-reformer/page.tsx
// Port of redesign/Servizio.html. Example single-service route — duplicate this
// file per service (allenamento, pilates, benessere, recupero) and swap the copy.
import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { SiteHeader, SiteFooter, WhatsappFab, WA, TEL } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Pilates Reformer — Virtus",
  description:
    "Pilates Reformer a Virtus, Brescia: lavoro di precisione sulla macchina Reformer per core, postura, mobilità e forza profonda. Seguito da professionisti. Prenota una prova.",
};

export default function PilatesReformer() {
  return (
    <>
      <SiteHeader active="servizi" />

      {/* PAGE HERO */}
      <section className="phero">
        <div className="wrap in">
          <p className="crumb">
            <Link href="/">Home</Link> · <Link href="/#servizi">Servizi</Link> · Pilates Reformer
          </p>
          <p className="eyebrow" style={{ color: "var(--red)", marginTop: "1rem" }}>Movimento di precisione</p>
          <h1>Pilates <span className="hl">Reformer</span></h1>
          <p>
            Lavoro guidato sulla macchina Reformer: resistenza regolabile, controllo
            del movimento e attenzione al core. Costruisci forza profonda, postura e
            mobilità — senza sovraccaricare le articolazioni.
          </p>
          <div className="pcta">
            <Link className="btn btn-red" href="/contatti"><Icon name="calendar-check" />Prenota una prova</Link>
            <Link className="btn btn-ghost-l" href="/#servizi">Tutti i servizi</Link>
          </div>
        </div>
      </section>

      {/* DETAIL */}
      <section className="block">
        <div className="wrap split2">
          <div className="prose reveal">
            <h2>Cosa è e perché funziona</h2>
            <p>
              Il Reformer è una macchina con un carrello scorrevole e molle a
              resistenza variabile. Permette di eseguire gli esercizi del metodo
              Pilates con un controllo e una progressione che a corpo libero non sono
              possibili: ogni movimento è guidato, fluido e adattato al tuo livello.
            </p>
            <p>
              Da Virtus il Reformer è sempre seguito da un professionista, in piccoli
              gruppi o in sessioni individuali. Non è una lezione standard uguale per
              tutti: il lavoro parte dalla tua postura, dalla tua mobilità e dai tuoi
              obiettivi.
            </p>
            <ul className="benefits">
              <li><Icon name="check-circle-2" />Rinforzo del core e della muscolatura profonda</li>
              <li><Icon name="check-circle-2" />Miglioramento di postura ed equilibrio</li>
              <li><Icon name="check-circle-2" />Mobilità articolare e fluidità del movimento</li>
              <li><Icon name="check-circle-2" />Basso impatto: ideale anche in recupero o ripartenza</li>
            </ul>
          </div>
          <aside className="aside-card reveal">
            <h3>In breve</h3>
            <p>Tutto quello che ti serve sapere prima di iniziare.</p>
            <div className="facts">
              <div className="fact"><Icon name="users" />Individuale o piccoli gruppi</div>
              <div className="fact"><Icon name="timer" />Sessioni da ~50 minuti</div>
              <div className="fact"><Icon name="gauge" />Adatto a ogni livello</div>
              <div className="fact"><Icon name="map-pin" />Disponibile nelle due sedi</div>
            </div>
            <Link className="btn btn-red" href="/contatti" style={{ width: "100%" }}>
              <Icon name="calendar-check" />Prenota una prova
            </Link>
          </aside>
        </div>
      </section>

      {/* MEDIA + PER CHI */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap split2">
          <div className="media-frame reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1591258370814-01609b341790?auto=format&fit=crop&w=900&q=80" alt="Pilates Reformer a Virtus" />
          </div>
          <div className="prose reveal">
            <h2>Per chi è indicato</h2>
            <p>
              Il Reformer è una delle attività più versatili del centro: lo
              consigliamo a chi parte da zero come a chi è già allenato.
            </p>
            <ul className="benefits">
              <li><Icon name="move" />Chi vuole migliorare postura e mal di schiena da scrivania</li>
              <li><Icon name="trophy" />Sportivi che cercano controllo, core e prevenzione</li>
              <li><Icon name="rotate-ccw" />Chi riparte dopo uno stop e vuole un lavoro sicuro</li>
              <li><Icon name="heart-pulse" />Chi cerca un&apos;attività intensa ma a basso impatto</li>
            </ul>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="block" style={{ background: "var(--beige)" }}>
        <div className="wrap">
          <div className="sec-head center reveal">
            <p className="eyebrow">Come si inizia</p>
            <h2>Dal primo contatto alla prima sessione.</h2>
          </div>
          <div className="steps">
            <div className="step reveal"><div className="num">01</div><div className="ic"><Icon name="calendar-check" /></div><h4>Prenoti la prova</h4><p>Scrivici o chiamaci e fissiamo insieme il primo appuntamento.</p></div>
            <div className="step reveal"><div className="num">02</div><div className="ic"><Icon name="clipboard-list" /></div><h4>Valutazione</h4><p>Capiamo postura, mobilità e obiettivi per impostare il lavoro.</p></div>
            <div className="step reveal"><div className="num">03</div><div className="ic"><Icon name="git-commit-horizontal" /></div><h4>Prima sessione</h4><p>Provi il Reformer seguito da un professionista, al tuo ritmo.</p></div>
            <div className="step reveal"><div className="num">04</div><div className="ic"><Icon name="trending-up" /></div><h4>Percorso continuo</h4><p>Costruiamo la frequenza e la progressione più adatte a te.</p></div>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">Altri servizi</p>
            <h2>Scopri tutto quello che puoi fare da Virtus.</h2>
          </div>
          <div className="chips reveal">
            <Link className="chip" href="/#servizi"><Icon name="dumbbell" />Allenamento personalizzato</Link>
            <Link className="chip" href="/#servizi"><Icon name="activity" />Pilates</Link>
            <Link className="chip" href="/#servizi"><Icon name="heart-pulse" />Benessere &amp; salute</Link>
            <Link className="chip" href="/#servizi"><Icon name="accessibility" />Recupero &amp; postura</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="in">
              <p className="eyebrow" style={{ color: "rgba(255,255,255,.85)" }}>Inizia oggi</p>
              <h2>Prova il Reformer da Virtus.</h2>
              <p>La prima prova è senza impegno. Scrivici o chiamaci: troviamo l&apos;orario giusto per te.</p>
              <div className="cta-actions">
                <a className="btn btn-white" href={WA}><Icon name="message-circle" />Scrivici su WhatsApp</a>
                <a className="btn btn-ghost-l" href={TEL}><Icon name="phone" />Chiama il centro</a>
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

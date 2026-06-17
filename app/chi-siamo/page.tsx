// Virtus · app/chi-siamo/page.tsx
// Port of redesign/Chi siamo.html. The page-specific .nums / .team-grid /
// .member styles live in chi-siamo.module.css (scoped to this route).
import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { SiteHeader, SiteFooter, WhatsappFab, WA } from "@/components/SiteChrome";
import s from "./chi-siamo.module.css";

export const metadata: Metadata = {
  title: "Chi siamo — Virtus",
  description:
    "Virtus è un centro fitness, movimento e benessere a Brescia. Non una palestra qualsiasi: allenamento su misura, Pilates, Reformer e professionisti che ti seguono davvero, in due sedi.",
};

const TEAM = [
  { role: "Personal Trainer", img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=500&q=80" },
  { role: "Istruttrice Pilates", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=80" },
  { role: "Reformer", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80" },
  { role: "Recupero & postura", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80" },
];

export default function ChiSiamo() {
  return (
    <>
      <SiteHeader active="chi-siamo" />

      {/* HERO */}
      <section className="phero">
        <div className="wrap in">
          <p className="crumb"><Link href="/">Home</Link> · Chi siamo</p>
          <p className="eyebrow" style={{ color: "var(--red)", marginTop: "1rem" }}>Chi siamo</p>
          <h1>Un centro dove il movimento <span className="hl">diventa benessere.</span></h1>
          <p>
            Virtus nasce per chi cerca qualcosa di più di una palestra: un posto dove
            allenamento, Pilates, recupero e benessere lavorano insieme, con
            professionisti che ti seguono davvero. Due sedi a Brescia, un solo modo di
            lavorare — intorno a te.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="statement">
        <div className="wrap statement-in">
          <div className="reveal">
            <h2>Non una palestra in più. <span className="red">Un modo diverso di prendersi cura del corpo.</span></h2>
            <p style={{ marginTop: "1.2rem" }}>
              Crediamo che stare bene non significhi solo allenarsi tanto, ma muoversi
              meglio. Per questo uniamo fitness, Pilates e Reformer a prevenzione,
              postura e recupero funzionale: discipline diverse che si parlano, dentro
              lo stesso centro.
            </p>
            <p>
              Il nostro approccio è serio ma accessibile. Niente atmosfera da palestra
              commerciale aggressiva, niente freddezza da ambulatorio: un posto
              contemporaneo, umano e competente, dove la persona viene prima del
              programma.
            </p>
          </div>
          <div className="vals reveal">
            <div className="v"><Icon name="target" /><div><b>Concretezza.</b> <span>Obiettivi chiari, percorsi reali, risultati che si vedono.</span></div></div>
            <div className="v"><Icon name="users-round" /><div><b>Attenzione alla persona.</b> <span>Vieni ascoltato, valutato e accompagnato, sempre.</span></div></div>
            <div className="v"><Icon name="shield-check" /><div><b>Professionalità.</b> <span>Un team competente e percorsi costruiti in sicurezza.</span></div></div>
            <div className="v"><Icon name="activity" /><div><b>Movimento che dura.</b> <span>Ti insegniamo a muoverti meglio, anche fuori dal centro.</span></div></div>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">Virtus in numeri</p>
            <h2>Una realtà concreta, non promesse.</h2>
          </div>
          <div className={s.nums}>
            <div className={`${s.numc} reveal`}><div className={s.b}>2</div><div className={s.l}>Sedi a Brescia</div></div>
            <div className={`${s.numc} reveal`}><div className={s.b}>5</div><div className={s.l}>Aree tra fitness e benessere</div></div>
            <div className={`${s.numc} reveal`}><div className={s.b}>100%</div><div className={s.l}>Percorsi su misura</div></div>
            <div className={`${s.numc} reveal`}><div className={s.b}>15+</div><div className={s.l}>Anni di esperienza</div></div>
          </div>
          <p className="note" style={{ color: "var(--faint)" }}>Numeri di esempio — da confermare con i dati reali del centro.</p>
        </div>
      </section>

      {/* TEAM */}
      <section className="block" style={{ background: "var(--beige)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">Il team</p>
            <h2>Le persone che ti seguono.</h2>
            <p>Trainer e professionisti del movimento con specializzazioni complementari. Volti reali, non comparse da catalogo.</p>
          </div>
          <div className={s.teamGrid}>
            {TEAM.map((m, i) => (
              <div className={`${s.member} reveal`} key={i}>
                <div className={s.pic}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.img} alt="" />
                </div>
                <div className={s.meta}>
                  <div className={s.role}>{m.role}</div>
                  <h4>Nome Cognome</h4>
                </div>
              </div>
            ))}
          </div>
          <p className="note" style={{ color: "var(--faint)" }}>Foto e nomi sono placeholder — da sostituire con il team reale.</p>
        </div>
      </section>

      {/* METHOD */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head center reveal">
            <p className="eyebrow">Come lavoriamo</p>
            <h2>Il metodo Virtus, in quattro passi.</h2>
          </div>
          <div className="steps">
            <div className="step reveal"><div className="num">01</div><div className="ic"><Icon name="ear" /></div><h4>Ti ascoltiamo</h4><p>Parliamo dei tuoi obiettivi, della tua storia e di come ti muovi oggi.</p></div>
            <div className="step reveal"><div className="num">02</div><div className="ic"><Icon name="clipboard-list" /></div><h4>Valutiamo</h4><p>Una valutazione iniziale per capire da dove partire in sicurezza.</p></div>
            <div className="step reveal"><div className="num">03</div><div className="ic"><Icon name="route" /></div><h4>Percorso su misura</h4><p>Costruiamo il programma giusto per te: allenamento, Pilates o recupero.</p></div>
            <div className="step reveal"><div className="num">04</div><div className="ic"><Icon name="trending-up" /></div><h4>Ti seguiamo</h4><p>Ti accompagniamo passo passo e adattiamo il percorso ai progressi.</p></div>
          </div>
          <p className="method-note reveal">Da Virtus non sei mai lasciato solo. <span className="red">È questa la differenza.</span></p>
        </div>
      </section>

      {/* CTA */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="in">
              <p className="eyebrow" style={{ color: "rgba(255,255,255,.85)" }}>Vieni a conoscerci</p>
              <h2>Fai il primo passo da Virtus.</h2>
              <p>Vieni a trovarci per una prova senza impegno: ti facciamo vedere il centro e capiamo insieme da dove partire.</p>
              <div className="cta-actions">
                <Link className="btn btn-white" href="/contatti"><Icon name="calendar-check" />Prenota una prova</Link>
                <a className="btn btn-ghost-l" href={WA}><Icon name="message-circle" />Scrivici su WhatsApp</a>
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

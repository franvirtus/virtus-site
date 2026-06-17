// Virtus · app/page.tsx — Home
// Faithful port of redesign/Virtus Home v2.html. Server component; the header
// (transparent over the hero) and reveal animations come from SiteChrome.
import Link from "next/link";
import Icon from "@/components/Icon";
import { SiteHeader, SiteFooter, WhatsappFab, WA, TEL } from "@/components/SiteChrome";

// Placeholder imagery — swap the src's for photos in /public.
const IMG = {
  hero: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1100&q=80",
  fitness: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  pilates: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=900&q=80",
  reformer: "https://images.unsplash.com/photo-1591258370814-01609b341790?auto=format&fit=crop&w=700&q=80",
  benessere: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=700&q=80",
  recupero: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80",
  sedeCorfu: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  sedeMontello: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80",
};

export default function Home() {
  return (
    <>
      <SiteHeader transparent />

      {/* HERO */}
      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Centro fitness, movimento &amp; benessere · Brescia</p>
            <h1>
              <span className="ln">Allenati meglio.</span>
              <span className="ln">Muoviti meglio.</span>
              <span className="ln hl">Stai meglio.</span>
            </h1>
            <p className="lead">
              Virtus non è una palestra qualsiasi: è il posto dove non vieni solo ad
              allenarti, ma costruisci un corpo che funziona meglio. Allenamento su
              misura, Pilates e Reformer, seguiti da professionisti — in due sedi a
              Brescia.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-red" href="/contatti">
                <Icon name="calendar-check" />
                Prenota una prova
              </Link>
              <Link className="btn btn-ghost-l" href="#servizi">
                Scopri i percorsi
              </Link>
            </div>
            <div className="hero-trust">
              <div className="ht"><Icon name="map-pin" /><span>2 sedi a Brescia</span></div>
              <div className="ht"><Icon name="user-round-cog" /><span>Percorsi 100% su misura</span></div>
              <div className="ht"><Icon name="heart-pulse" /><span>Fitness e benessere insieme</span></div>
            </div>
          </div>
          <div className="hero-media">
            <div className="big">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.hero} alt="Allenamento a Virtus" />
            </div>
            <div className="hero-tag">Prima prova senza impegno</div>
            <div className="hero-card">
              <div className="ic"><Icon name="check" /></div>
              <div>
                <div className="t">Sei seguito, sempre</div>
                <div className="s">Valutazione e percorso su misura</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement">
        <div className="wrap statement-in">
          <div className="reveal">
            <h2>
              Non vieni solo ad allenarti:{" "}
              <span className="red">costruisci un corpo che funziona meglio.</span>
            </h2>
            <p style={{ marginTop: "1.2rem" }}>
              Virtus unisce allenamento, Pilates, Reformer, prevenzione, postura e
              recupero funzionale in un unico centro. Un approccio serio ma
              accessibile, pensato per le persone vere — non per gli atleti delle
              copertine.
            </p>
          </div>
          <div className="vals reveal">
            <div className="v"><Icon name="target" /><div><b>Su misura davvero.</b> <span>Niente schede preconfezionate: il percorso parte da te.</span></div></div>
            <div className="v"><Icon name="users-round" /><div><b>Professionisti accanto.</b> <span>Vieni ascoltato, valutato e accompagnato.</span></div></div>
            <div className="v"><Icon name="activity" /><div><b>Movimento che dura.</b> <span>Risultati che restano, dentro e fuori dal centro.</span></div></div>
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="block" id="servizi">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">Cosa puoi fare da Virtus</p>
            <h2>Un centro, tante strade per stare meglio.</h2>
            <p>
              Allenamento, movimento consapevole e benessere: scegli da dove partire,
              al resto pensiamo insieme.
            </p>
          </div>
          <div className="svc-grid">
            <Link className="svc lg reveal" href="/servizi/pilates-reformer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.fitness} alt="" />
              <div className="ic"><Icon name="dumbbell" /></div>
              <h3>Fitness &amp; allenamento personalizzato</h3>
              <p>Percorsi su misura per forza, forma fisica, postura e mobilità. Seguiti, non lasciati a una scheda.</p>
            </Link>
            <Link className="svc md reveal" href="/servizi/pilates-reformer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.pilates} alt="" />
              <div className="ic"><Icon name="activity" /></div>
              <h3>Pilates</h3>
              <p>Controllo, postura e movimento consapevole. Tonifichi e impari a muoverti meglio.</p>
            </Link>
            <Link className="svc sm reveal" href="/servizi/pilates-reformer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.reformer} alt="" />
              <div className="ic"><Icon name="git-commit-horizontal" /></div>
              <h3>Pilates Reformer</h3>
              <p>Lavoro di precisione sulla macchina: core, postura, mobilità e forza profonda.</p>
            </Link>
            <Link className="svc sm reveal" href="/servizi/pilates-reformer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.benessere} alt="" />
              <div className="ic"><Icon name="heart-pulse" /></div>
              <h3>Benessere &amp; salute</h3>
              <p>Un approccio integrato alla persona, con professionisti e servizi per la qualità della vita.</p>
            </Link>
            <Link className="svc sm reveal" href="/servizi/pilates-reformer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.recupero} alt="" />
              <div className="ic"><Icon name="accessibility" /></div>
              <h3>Recupero, prevenzione &amp; postura</h3>
              <p>Ti aiutiamo a muoverti senza dolore, prevenire i fastidi e tornare sicuro nel movimento.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* PER CHI È */}
      <section className="block who" id="perchi">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">Per chi è Virtus</p>
            <h2>Per chi vuole stare meglio. Davvero per tutti.</h2>
            <p>Non serve essere già allenati. Serve voler iniziare — noi costruiamo il percorso intorno a te.</p>
          </div>
          <div className="who-grid">
            <div className="who-item reveal"><Icon name="flame" /><div><b>Chi vuole rimettersi in forma</b><p>Dimagrimento e ricomposizione con un percorso guidato e sostenibile.</p></div></div>
            <div className="who-item reveal"><Icon name="trophy" /><div><b>Sportivi</b><p>Forza, prevenzione e performance per chi già si allena o gareggia.</p></div></div>
            <div className="who-item reveal"><Icon name="rotate-ccw" /><div><b>Chi riparte da zero</b><p>Sedentari o fermi da tempo: si comincia con calma, al tuo ritmo.</p></div></div>
            <div className="who-item reveal"><Icon name="move" /><div><b>Postura &amp; mobilità</b><p>Per chi passa ore alla scrivania e vuole muoversi meglio.</p></div></div>
            <div className="who-item reveal"><Icon name="shield-plus" /><div><b>Recupero da un dolore</b><p>Ritrova sicurezza nel movimento dopo un fastidio o uno stop.</p></div></div>
            <div className="who-item reveal"><Icon name="users-round" /><div><b>Adulti e ragazzi</b><p>Percorsi adatti a ogni età, sempre seguiti da un professionista.</p></div></div>
          </div>
        </div>
      </section>

      {/* METODO */}
      <section className="block" id="metodo">
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
          <p className="method-note reveal">
            Da Virtus non sei mai lasciato solo. <span className="red">È questa la differenza.</span>
          </p>
        </div>
      </section>

      {/* SEDI */}
      <section className="block sedi" id="sedi">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">Dove siamo</p>
            <h2>Due sedi a Brescia, a due passi da te.</h2>
            <p>Stessa cura, stesso metodo. Scegli la sede più comoda e vieni a trovarci per una prova.</p>
          </div>
          <div className="sedi-grid">
            <div className="sede reveal">
              <div className="pic">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG.sedeCorfu} alt="" />
                <span className="pin"><Icon name="map-pin" />Sede Corfù</span>
              </div>
              <div className="body">
                <h3>Virtus · Via Corfù</h3>
                <p className="addr"><Icon name="map-pin" />Via Corfù 71, Brescia</p>
                <div className="row">
                  <div><Icon name="clock" />Lun–Ven 8–21 · Sab 9–13</div>
                  <div><Icon name="phone" />+39 030 000 0000</div>
                </div>
                <div className="acts">
                  <a className="btn btn-red" href="https://maps.google.com/?q=Via+Corfù+71+Brescia" target="_blank" rel="noopener">
                    <Icon name="navigation" />Indicazioni
                  </a>
                  <Link className="btn btn-ghost-d" href="/contatti">Prenota qui</Link>
                </div>
              </div>
            </div>
            <div className="sede reveal">
              <div className="pic">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG.sedeMontello} alt="" />
                <span className="pin"><Icon name="map-pin" />Sede Montello</span>
              </div>
              <div className="body">
                <h3>Virtus · Via Montello</h3>
                <p className="addr"><Icon name="map-pin" />Via Montello 79, Brescia</p>
                <div className="row">
                  <div><Icon name="clock" />Lun–Ven 8–21 · Sab 9–13</div>
                  <div><Icon name="phone" />+39 030 000 0000</div>
                </div>
                <div className="acts">
                  <a className="btn btn-red" href="https://maps.google.com/?q=Via+Montello+79+Brescia" target="_blank" rel="noopener">
                    <Icon name="navigation" />Indicazioni
                  </a>
                  <Link className="btn btn-ghost-d" href="/contatti">Prenota qui</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="block" id="contatti">
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="in">
              <p className="eyebrow" style={{ color: "rgba(255,255,255,.85)" }}>Inizia oggi</p>
              <h2>Prenota la tua prova da Virtus.</h2>
              <p>
                Scrivici o chiamaci: capiamo insieme da dove partire e ti proponiamo il
                percorso più adatto a te. Senza impegno.
              </p>
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

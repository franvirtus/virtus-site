// Virtus · SiteChrome.tsx — header, mobile nav, footer, FAB, reveal observer
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";

// Aggiornare con i recapiti reali del centro
export const WA  = "https://wa.me/390000000000";
export const TEL = "tel:+390300000000";

type Active = "servizi" | "professionisti" | "chi-siamo" | "contatti" | null;

const NAV: { href: string; label: string; key: Active }[] = [
  { href: "/servizi",        label: "Servizi",        key: "servizi" },
  { href: "/professionisti", label: "Professionisti", key: "professionisti" },
  { href: "/chi-siamo",      label: "Chi siamo",      key: "chi-siamo" },
  { href: "/contatti",       label: "Contatti",       key: "contatti" },
];

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(el => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    els.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

export function SiteHeader({
  active = null,
  transparent = false,
}: {
  active?: Active;
  transparent?: boolean;
}) {
  const [solid, setSolid] = useState(!transparent);
  const [menu,  setMenu]  = useState(false);
  useReveal();

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const cls = transparent ? `hdr${solid ? " solid" : ""}` : "hdr onlight";

  return (
    <>
      <header className={cls}>
        <div className="wrap hdr-in">
          <Link className="logo" href="/">
            VIRTUS<span className="dot">.</span>
          </Link>
          <nav className="nav">
            {NAV.map(n => (
              <Link
                key={n.key}
                href={n.href}
                className={active === n.key ? "active" : undefined}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hdr-cta">
            <Link
              className="btn btn-red"
              href="/contatti"
              style={{ padding: ".7rem 1.2rem", fontSize: ".86rem" }}
            >
              <Icon name="calendar-check" />
              Prenota una consulenza
            </Link>
            <button className="menu-btn" onClick={() => setMenu(true)}>
              Menu
            </button>
          </div>
        </div>
      </header>

      <nav id="mnav" className={menu ? "show" : undefined}>
        <button className="close" aria-label="Chiudi" onClick={() => setMenu(false)}>
          ×
        </button>
        {NAV.map(n => (
          <Link key={n.key} href={n.href} onClick={() => setMenu(false)}>
            {n.label}
          </Link>
        ))}
        <Link
          className="btn btn-red"
          href="/contatti"
          onClick={() => setMenu(false)}
          style={{ marginTop: "1rem" }}
        >
          Prenota una consulenza
        </Link>
      </nav>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="ft">
      <div className="wrap ft-top">
        {/* Brand */}
        <div>
          <Link className="logo" href="/">
            VIRTUS<span className="dot">.</span>
          </Link>
          <p className="about">
            Centro multidisciplinare per salute, movimento e benessere a Brescia.
            Fisioterapia, nutrizione, osteopatia, logopedia, ortottica, ostetricia,
            massoterapia e percorsi di movimento.
          </p>
          <div className="socials">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff">
                <path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Servizi */}
        <div>
          <h5>Servizi</h5>
          <ul>
            <li><Link href="/servizi/fisioterapia">Fisioterapia</Link></li>
            <li><Link href="/servizi/nutrizione">Nutrizione</Link></li>
            <li><Link href="/servizi/osteopatia">Osteopatia</Link></li>
            <li><Link href="/servizi/logopedia">Logopedia</Link></li>
            <li><Link href="/servizi/ortottica">Ortottica</Link></li>
            <li><Link href="/servizi/ostetricia">Ostetricia</Link></li>
            <li><Link href="/servizi/massoterapia">Massoterapia</Link></li>
          </ul>
        </div>

        {/* Centro */}
        <div>
          <h5>Centro</h5>
          <ul>
            <li><Link href="/chi-siamo">Chi siamo</Link></li>
            <li><Link href="/professionisti">I professionisti</Link></li>
            <li><Link href="/servizi">Tutti i servizi</Link></li>
            <li><Link href="/contatti">Contatti</Link></li>
          </ul>
          <div style={{ marginTop: "1.4rem" }}>
            <a
              className="btn btn-red"
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: ".65rem 1.1rem", fontSize: ".85rem" }}
            >
              <Icon name="message-circle" />
              Scrivici su WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="wrap ft-bot">
        <p style={{ margin: 0 }}>© 2026 Virtus. Tutti i diritti riservati.</p>
        <p style={{ margin: 0 }}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          {" · "}
          <Link href="/cookie-policy">Cookie Policy</Link>
        </p>
      </div>
    </footer>
  );
}

export function WhatsappFab() {
  return (
    <a className="fab" href={WA} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
      <Icon name="message-circle" />
      Scrivici
    </a>
  );
}

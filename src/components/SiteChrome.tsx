// Virtus · SiteChrome.tsx
// Header (sticky, transparent-over-hero or solid), mobile nav, footer and
// the floating WhatsApp button — plus the scroll-reveal observer. One client
// component so the marketing pages stay server components.
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";

/* ── Placeholder contacts — replace with the real values ───────────── */
export const WA = "https://wa.me/390000000000";
export const TEL = "tel:+390300000000";

type Active = "servizi" | "chi-siamo" | "sedi" | "contatti" | null;

const NAV: { href: string; label: string; key: Active }[] = [
  { href: "/#servizi", label: "Servizi", key: "servizi" },
  { href: "/chi-siamo", label: "Chi siamo", key: "chi-siamo" },
  { href: "/#sedi", label: "Sedi", key: "sedi" },
  { href: "/contatti", label: "Contatti", key: "contatti" },
];

/* Reveal-on-scroll: mirrors the IntersectionObserver in the static pages.
   Mounted once by SiteHeader so every `.reveal` on the page animates in. */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
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
  const [menu, setMenu] = useState(false);
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
            {NAV.map((n) => (
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
              Prenota una prova
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
        {NAV.map((n) => (
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
          Prenota una prova
        </Link>
      </nav>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="ft">
      <div className="wrap ft-top">
        <div>
          <Link className="logo" href="/">
            VIRTUS<span className="dot">.</span>
          </Link>
          <p className="about">
            Centro fitness, movimento e benessere a Brescia. Allenamento su misura,
            Pilates, Reformer, recupero e postura — seguiti da professionisti, in due
            sedi.
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
        <div>
          <h5>Servizi</h5>
          <ul>
            <li><Link href="/#servizi">Allenamento personalizzato</Link></li>
            <li><Link href="/#servizi">Pilates</Link></li>
            <li><Link href="/servizi/pilates-reformer">Pilates Reformer</Link></li>
            <li><Link href="/#servizi">Benessere &amp; salute</Link></li>
            <li><Link href="/#servizi">Recupero &amp; postura</Link></li>
          </ul>
        </div>
        <div>
          <h5>Centro</h5>
          <ul>
            <li><Link href="/chi-siamo">Chi siamo</Link></li>
            <li><Link href="/#metodo">Il metodo</Link></li>
            <li><Link href="/#sedi">Le sedi</Link></li>
            <li><Link href="/contatti">Prenota una prova</Link></li>
          </ul>
        </div>
        <div>
          <h5>Sedi &amp; contatti</h5>
          <div className="ad"><Icon name="map-pin" /><span>Via Corfù 71, Brescia</span></div>
          <div className="ad"><Icon name="map-pin" /><span>Via Montello 79, Brescia</span></div>
          <div className="ad"><Icon name="phone" /><span>+39 030 000 0000</span></div>
          <span className="note">Telefono e orari di esempio — da sostituire.</span>
        </div>
      </div>
      <div className="wrap ft-bot">
        <p style={{ margin: 0 }}>© 2026 Virtus. Tutti i diritti riservati.</p>
        <p style={{ margin: 0 }}>Privacy Policy · Cookie Policy</p>
      </div>
    </footer>
  );
}

export function WhatsappFab() {
  return (
    <a className="fab" href={WA} aria-label="WhatsApp">
      <Icon name="message-circle" />
      Scrivici
    </a>
  );
}

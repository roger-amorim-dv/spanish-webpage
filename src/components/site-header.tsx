"use client";

import Link from "next/link";
import { Globe2, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./language-provider";
import type { Locale } from "@/lib/i18n";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`brand focus-ring ${inverse ? "text-white" : "text-ink"}`} aria-label="Habla Go, home">
      <span className="brand-mark" aria-hidden="true">H</span>
      <span>Habla <span className="text-pink">Go</span><span className="text-pink">.</span></span>
    </Link>
  );
}

export function LanguageSelector({ inverse = false }: { inverse?: boolean }) {
  const { locale, setLocale, t } = useLanguage();
  return (
    <label className={`language-select ${inverse ? "language-select-inverse" : ""}`}>
      <Globe2 size={16} aria-hidden="true" />
      <span className="sr-only">{t.footer.language}</span>
      <select value={locale} onChange={(event) => setLocale(event.target.value as Locale)} aria-label={t.footer.language}>
        <option value="es">ES</option>
        <option value="pt">PT</option>
        <option value="en">EN</option>
      </select>
    </label>
  );
}

export function SiteHeader() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const links = [["#courses", t.nav.courses], ["#method", t.nav.method], ["#about", t.nav.about]] as const;
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          <Link href="/members">{t.nav.members}</Link>
        </nav>
        <div className="nav-actions">
          <LanguageSelector />
          <a className="button button-sm button-primary desktop-cta" href="#join">{t.nav.cta}</a>
          <button className="icon-button mobile-menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? t.nav.close : t.nav.menu}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {links.map(([href, label]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <Link href="/members" onClick={close}>{t.nav.members}</Link>
          <a className="button button-primary" href="#join" onClick={close}>{t.nav.cta}</a>
        </nav>
      </div>
    </header>
  );
}

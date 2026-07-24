"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Eye, LockKeyhole, Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/language-provider";
import { Brand, LanguageSelector } from "@/components/site-header";

export default function LoginPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const submit = (event: FormEvent) => { event.preventDefault(); router.push("/members"); };

  return <main className="auth-layout">
    <section className="auth-brand-panel">
      <Brand inverse />
      <div className="auth-message"><span className="auth-icon">¡</span><h1>{t.hero.titleA}<br /><em>{t.hero.titleB}</em></h1></div>
      <p>Colombia <span>•</span> Brasil <span>•</span> USA</p>
    </section>
    <section className="auth-form-panel">
      <div className="auth-top"><Link href="/" className="back-link"><ArrowLeft />{t.login.back}</Link><LanguageSelector /></div>
      <div className="login-card">
        <p className="eyebrow">{t.nav.members}</p><h2>{t.login.title}</h2><p className="login-lead">{t.login.text}</p>
        <form onSubmit={submit}>
          <label>{t.login.email}<span className="input-wrap"><Mail /><input type="email" required placeholder="tu@email.com" /></span></label>
          <label>{t.login.password}<span className="input-wrap"><LockKeyhole /><input type={show ? "text" : "password"} required minLength={4} placeholder="••••••••" /><button type="button" onClick={() => setShow(!show)} aria-label="Show password"><Eye /></button></span></label>
          <a className="forgot-link" href="#">{t.login.forgot}</a>
          <button className="button button-primary auth-submit" type="submit">{t.login.submit}<ArrowRight /></button>
        </form>
        <p className="demo-note">{t.login.demo}</p>
        <div className="join-note">{t.login.noAccount} <Link href="/#join">{t.login.join}</Link></div>
      </div>
    </section>
  </main>;
}

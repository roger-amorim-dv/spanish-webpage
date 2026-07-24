"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Check, Clock3, HeartHandshake, Laptop2, MessageCircleMore, MoveRight, Play, Sparkles, Users2 } from "lucide-react";
import { useLanguage } from "./language-provider";
import { Brand, LanguageSelector, SiteHeader } from "./site-header";

const benefitIcons = [MessageCircleMore, Sparkles, Laptop2, HeartHandshake];

function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return <div className={`section-heading ${center ? "center" : ""}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="lead">{text}</p>}</div>;
}

export function HomePage() {
  const { t } = useLanguage();
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-blob blob-one" /><div className="hero-blob blob-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-dot" />{t.hero.eyebrow}</p>
              <h1>{t.hero.titleA}<br /><em>{t.hero.titleB}</em></h1>
              <p className="hero-text">{t.hero.text}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#join">{t.hero.primary}<ArrowRight size={18} /></a>
                <a className="button button-ghost" href="#method"><Play size={17} fill="currentColor" />{t.hero.secondary}</a>
              </div>
              <p className="hero-note"><Check size={15} />{t.hero.note}</p>
            </div>
            <div className="hero-art" aria-label={t.hero.card}>
              <div className="sun-lines" aria-hidden="true" />
              <div className="conversation-card">
                <div className="card-top"><div className="avatar-pair"><span>N</span><span>J</span></div><span className="live-pill"><i /> LIVE</span></div>
                <p className="card-label">{t.hero.card}</p>
                <p className="phrase">{t.hero.phrase}</p>
                <p className="translation">{t.hero.translation}</p>
                <div className="waveform">{[12,28,18,36,22,42,29,17,33,20,38,14].map((height, i) => <i key={i} style={{height}} />)}</div>
              </div>
              <div className="float-card float-one"><MessageCircleMore />{t.hero.live}</div>
              <div className="float-card float-two"><Sparkles />{t.hero.culture}</div>
              <div className="float-card float-three"><HeartHandshake />{t.hero.confidence}</div>
            </div>
          </div>
          <div className="marquee" aria-hidden="true"><div>HABLAR • CONECTAR • DESCUBRIR • VIVIR • HABLAR • CONECTAR • DESCUBRIR • VIVIR •</div></div>
        </section>

        <section className="section benefits">
          <div className="container">
            <SectionHeading eyebrow={t.benefits.eyebrow} title={t.benefits.title} text={t.benefits.text} />
            <div className="benefit-grid">{t.benefits.items.map(([title, text], i) => { const Icon = benefitIcons[i]; return <article className="benefit-card" key={title}><div className={`benefit-icon icon-${i}`}><Icon /></div><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>; })}</div>
          </div>
        </section>

        <section className="section method" id="method">
          <div className="container">
            <SectionHeading eyebrow={t.how.eyebrow} title={t.how.title} center />
            <div className="steps">{t.how.steps.map(([num, title, text], i) => <article className="step" key={num}><div className="step-num">{num}</div>{i < 2 && <MoveRight className="step-arrow" aria-hidden="true" />}<h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section className="section courses" id="courses">
          <div className="container">
            <div className="courses-heading"><SectionHeading eyebrow={t.courses.eyebrow} title={t.courses.title} text={t.courses.text} /><span className="sample-badge">{t.courses.sample}</span></div>
            <div className="course-grid">{t.courses.cards.map(([name, level, format, duration, outcome], i) => <article className={`course-card course-${i}`} key={name}>
              <div className="course-visual"><span className="course-level">{level.split(" · ")[0]}</span><span className="course-glyph" aria-hidden="true">{["¡Hola!", "¿Qué tal?", "Vamos."][i]}</span></div>
              <div className="course-body"><span className="sample-label">{t.courses.sample}</span><h3>{name}</h3><div className="course-meta"><span><Users2 />{level}</span><span><BookOpen />{format}</span><span><Clock3 />{duration}</span></div><p className="outcome-label">{t.courses.outcome}</p><p className="course-outcome"><Check />{outcome}</p><button className="text-link" type="button" aria-label={`${t.courses.cta}: ${name}`}>{t.courses.cta}<ArrowRight /></button></div>
            </article>)}</div>
          </div>
        </section>

        <section className="section founders" id="about">
          <div className="container founders-grid">
            <div className="founder-visual">
              <div className="photo-card photo-natalia"><div className="portrait portrait-natalia"><span>N</span></div><strong>{t.founders.natalia}</strong><small>{t.founders.nataliaRole}</small><i>{t.founders.placeholder}</i></div>
              <div className="photo-card photo-jose"><div className="portrait portrait-jose"><span>J</span></div><strong>{t.founders.jose}</strong><small>{t.founders.joseRole}</small><i>{t.founders.placeholder}</i></div>
              <div className="colombia-stamp">CO<br /><small>Colombia</small></div>
            </div>
            <div><SectionHeading eyebrow={t.founders.eyebrow} title={t.founders.title} /><p className="founder-text">{t.founders.text1}</p><p className="founder-text">{t.founders.text2}</p><blockquote>“{t.founders.quote}”</blockquote></div>
          </div>
        </section>

        <section className="section testimonials">
          <div className="container">
            <SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} text={t.testimonials.text} center />
            <div className="testimonial-grid">{t.testimonials.quotes.map((quote, i) => <article className="testimonial-card" key={quote}><span className="placeholder-label">{t.testimonials.placeholder}</span><div className="quote-mark">“</div><p>{quote}</p><div className="student"><span>{["MB", "AR", "LS"][i]}</span><div><strong>{t.testimonials.student}</strong><small>{t.testimonials.detail}</small></div></div></article>)}</div>
          </div>
        </section>

        <section className="final-wrap" id="join">
          <div className="container final-cta">
            <div className="final-spark spark-left" /><div className="final-spark spark-right" />
            <p className="eyebrow">{t.final.eyebrow}</p><h2>{t.final.title}</h2><p>{t.final.text}</p>
            <a href="mailto:hola@habla.example?subject=Habla%20waitlist" className="button button-light">{t.final.cta}<ArrowRight /></a>
            <small><Check />{t.final.note}</small>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-grid">
          <div><Brand inverse /><p>{t.footer.text}</p></div>
          <div><h3>{t.footer.explore}</h3><a href="#courses">{t.nav.courses}</a><a href="#method">{t.nav.method}</a><a href="#about">{t.nav.about}</a><Link href="/login">{t.nav.members}</Link></div>
          <div><h3>{t.footer.contact}</h3><a href={`mailto:${t.footer.email}`}>{t.footer.email}</a><h3 className="footer-subtitle">{t.footer.social}</h3><span>{t.footer.instagram}</span><span>{t.footer.youtube}</span></div>
          <div><h3>{t.footer.language}</h3><LanguageSelector inverse /></div>
        </div>
        <div className="container footer-bottom"><span>{t.footer.rights}</span><div><a href="#">{t.footer.privacy}</a><a href="#">{t.footer.terms}</a></div></div>
      </footer>
    </>
  );
}

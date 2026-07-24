"use client";

import Link from "next/link";
import { Bell, BookOpen, CalendarDays, ChevronRight, Clock3, Download, FileText, LogOut, Megaphone, Menu, Play, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Brand, LanguageSelector } from "@/components/site-header";

export default function MembersPage() {
  const { t } = useLanguage();
  return <div className="dashboard">
    <aside className="dashboard-sidebar">
      <Brand inverse />
      <nav aria-label="Student navigation">
        <a className="active" href="#overview"><Sparkles />{t.members.eyebrow}</a>
        <a href="#lessons"><Play />{t.members.lessons}</a>
        <a href="#materials"><FileText />{t.members.materials}</a>
        <a href="#activities"><CalendarDays />{t.members.upcoming}</a>
      </nav>
      <Link className="sidebar-logout" href="/"><LogOut />{t.members.logout}</Link>
    </aside>
    <main className="dashboard-main">
      <header className="dashboard-header"><button className="dash-menu" aria-label="Open navigation"><Menu /></button><span className="mock-badge">{t.members.mock}</span><div><LanguageSelector /><button className="icon-button" aria-label="Notifications"><Bell /></button><span className="dash-avatar">C</span></div></header>
      <div className="dashboard-content" id="overview">
        <div className="welcome"><div><p className="eyebrow">{t.members.eyebrow}</p><h1>{t.members.hello}</h1><p>{t.members.text}</p></div><span>¡Vamos!</span></div>
        <section className="progress-card">
          <div className="progress-top"><div><span>{t.members.progress}</span><h2>{t.courses.cards[0][0]}</h2></div><strong>42% <small>{t.members.complete}</small></strong></div>
          <div className="progress-track"><i /></div>
          <div className="current-lesson"><div className="lesson-thumb"><Play fill="currentColor" /></div><div><span>{t.members.lessonMeta}</span><h3>{t.members.lessonName}</h3></div><button className="button button-primary">{t.members.continue}<ChevronRight /></button></div>
        </section>
        <div className="dashboard-grid">
          <section className="dash-card" id="lessons"><div className="dash-card-title"><div><span className="dash-icon pink"><Play /></span><h2>{t.members.lessons}</h2></div><a href="#">{t.members.viewAll}</a></div><div className="mini-lesson"><span>03</span><div><strong>{t.members.restaurant}</strong><small><Clock3 /> 15 min</small></div><CheckCircle /></div><div className="mini-lesson"><span>04</span><div><strong>{t.members.lessonName}</strong><small><Clock3 /> 18 min</small></div><Play className="play-small" /></div></section>
          <section className="dash-card" id="activities"><div className="dash-card-title"><div><span className="dash-icon blue"><CalendarDays /></span><h2>{t.members.upcoming}</h2></div></div><div className="activity"><div className="calendar-date"><b>31</b><span>JUL</span></div><div><h3>{t.members.activityName}</h3><p>{t.members.activityDate}</p><span>{t.members.withTeachers}</span></div></div></section>
          <section className="dash-card" id="materials"><div className="dash-card-title"><div><span className="dash-icon yellow"><BookOpen /></span><h2>{t.members.materials}</h2></div></div><div className="file-row"><FileText /><div><strong>{t.members.file}</strong><small>PDF · 2.4 MB</small></div><button aria-label={t.members.download}><Download /></button></div></section>
          <section className="dash-card announcement"><div className="dash-card-title"><div><span className="dash-icon coral"><Megaphone /></span><h2>{t.members.announcements}</h2></div></div><p>{t.members.announcement}</p><span>— Natalia & José</span></section>
        </div>
      </div>
    </main>
  </div>;
}

function CheckCircle() { return <span className="check-circle">✓</span>; }

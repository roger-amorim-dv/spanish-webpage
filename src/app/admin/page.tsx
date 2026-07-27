"use client";

import Link from "next/link";
import {
  Bell, BookOpen, CalendarDays, Check, ChevronRight, CircleHelp,
  Clock3, FileText, LayoutDashboard, LogOut, Megaphone, Menu, MoreHorizontal,
  Plus, Search, Settings, TrendingUp, UserPlus, Users2, X,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { LanguageSelector, Brand } from "@/components/site-header";
import { useLanguage } from "@/components/language-provider";
import { adminActivities, adminCourses, adminStudents } from "@/lib/admin-data";

export default function AdminPage() {
  const { t } = useLanguage();
  const [composer, setComposer] = useState(false);
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function sendAnnouncement(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    window.setTimeout(() => { setComposer(false); setSent(false); }, 1100);
  }

  const nav = [
    [LayoutDashboard, t.admin.overview, "#overview"],
    [Users2, t.admin.students, "#students"],
    [BookOpen, t.admin.courses, "#courses-admin"],
    [CalendarDays, t.admin.schedule, "#schedule"],
    [FileText, t.admin.materials, "#materials-admin"],
    [Megaphone, t.admin.announcements, "#announcements-admin"],
  ] as const;

  return <div className="admin-shell">
    <aside className={`admin-sidebar ${menuOpen ? "is-open" : ""}`}>
      <Brand inverse />
      <div className="admin-role"><span>N</span><div><strong>Natalia</strong><small>{t.admin.role}</small></div></div>
      <nav aria-label={t.admin.navigation}>
        {nav.map(([Icon, label, href], index) => <a className={index === 0 ? "active" : ""} href={href} key={href} onClick={() => setMenuOpen(false)}><Icon />{label}</a>)}
      </nav>
      <div className="admin-sidebar-bottom">
        <a href="#help"><CircleHelp />{t.admin.help}</a>
        <a href="#settings"><Settings />{t.admin.settings}</a>
        <Link href="/"><LogOut />{t.admin.logout}</Link>
      </div>
    </aside>

    <main className="admin-main">
      <header className="admin-header">
        <button className="admin-mobile-menu" aria-label={menuOpen ? t.nav.close : t.nav.menu} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <div className="admin-search"><Search /><input aria-label={t.admin.search} placeholder={t.admin.search} /></div>
        <div className="admin-header-actions"><LanguageSelector /><button className="icon-button admin-bell" aria-label={t.admin.notifications}><Bell /><i /></button><span className="admin-avatar">N</span><div className="admin-name"><strong>Natalia</strong><small>{t.admin.role}</small></div></div>
      </header>

      <div className="admin-content" id="overview">
        <section className="admin-welcome">
          <div><p className="eyebrow">{t.admin.workspace}</p><h1>{t.admin.hello}</h1><p>{t.admin.subtitle}</p></div>
          <div><button className="button admin-secondary"><UserPlus />{t.admin.addStudent}</button><button className="button button-primary" onClick={() => setComposer(true)}><Plus />{t.admin.newAnnouncement}</button></div>
        </section>

        <section className="admin-stats" aria-label={t.admin.summary}>
          <StatCard icon={Users2} label={t.admin.activeStudents} value="36" detail="+8%" tone="blue" />
          <StatCard icon={BookOpen} label={t.admin.activeCourses} value="3" detail={t.admin.oneDraft} tone="pink" />
          <StatCard icon={CalendarDays} label={t.admin.activitiesWeek} value="5" detail={t.admin.nextThursday} tone="yellow" />
          <StatCard icon={TrendingUp} label={t.admin.avgProgress} value="61%" detail="+4%" tone="green" />
        </section>

        <div className="admin-top-grid">
          <section className="admin-panel admin-chart-panel">
            <PanelTitle title={t.admin.engagement} action={t.admin.lastEightWeeks} />
            <div className="chart-legend"><span><i className="blue-dot" />{t.admin.attendance}</span><span><i className="pink-dot" />{t.admin.lessonProgress}</span></div>
            <div className="admin-chart" role="img" aria-label={t.admin.chartLabel}>
              {[38, 48, 44, 59, 54, 68, 72, 81].map((value, index) => <div className="chart-column" key={index}><i className="chart-bar-blue" style={{ height: `${value}%` }} /><i className="chart-bar-pink" style={{ height: `${value - 12}%` }} /><span>{index + 1}</span></div>)}
            </div>
          </section>
          <section className="admin-panel" id="schedule">
            <PanelTitle title={t.admin.nextActivities} action={t.admin.viewCalendar} />
            <div className="admin-activity-list">{adminActivities.map((item) => <article className="admin-activity" key={item.title}><div className={`admin-date ${item.color}`}><b>{item.day}</b><span>{item.month}</span></div><div><strong>{item.title}</strong><span><Clock3 />{item.time} · {item.group}</span></div><button aria-label={t.admin.more}><MoreHorizontal /></button></article>)}</div>
          </section>
        </div>

        <section className="admin-panel admin-students-panel" id="students">
          <PanelTitle title={t.admin.recentStudents} action={t.admin.viewAll} />
          <div className="admin-table-wrap"><table><thead><tr><th>{t.admin.student}</th><th>{t.admin.country}</th><th>{t.admin.course}</th><th>{t.admin.progress}</th><th>{t.admin.status}</th><th /></tr></thead><tbody>
            {adminStudents.map((student, index) => <tr key={student.name}><td><div className={`table-person person-${index}`}><span>{student.initials}</span><strong>{student.name}</strong></div></td><td>{student.country}</td><td>{student.course}</td><td><div className="table-progress"><i><b style={{ width: `${student.progress}%` }} /></i><span>{student.progress}%</span></div></td><td><span className={`status-chip ${student.status}`}>{student.status === "active" ? t.admin.active : t.admin.needsAttention}</span></td><td><button aria-label={t.admin.more}><MoreHorizontal /></button></td></tr>)}
          </tbody></table></div>
        </section>

        <section className="admin-panel" id="courses-admin">
          <PanelTitle title={t.admin.courseManagement} action={t.admin.createCourse} />
          <div className="admin-course-grid">{adminCourses.map((course, index) => <article className={`admin-course-card admin-course-${index}`} key={course.name}><div className="admin-course-head"><span>{course.level}</span><span className={`status-chip ${course.state}`}>{course.state === "published" ? t.admin.published : t.admin.draft}</span></div><h3>{course.name}</h3><div className="admin-course-numbers"><span><Users2 />{course.students} {t.admin.studentsLower}</span><span><FileText />{course.lessons} {t.admin.lessons}</span></div><div className="admin-course-progress"><span>{t.admin.avgProgress}</span><strong>{course.completion}%</strong><i><b style={{ width: `${course.completion}%` }} /></i></div><button>{t.admin.manage}<ChevronRight /></button></article>)}</div>
        </section>

        <section className="admin-bottom-grid">
          <div className="admin-panel" id="materials-admin"><PanelTitle title={t.admin.recentMaterials} action={t.admin.upload} /><div className="admin-file"><span><FileText /></span><div><strong>Guía de conversación — Unidad 2.pdf</strong><small>PDF · 2.4 MB · {t.admin.today}</small></div><button><MoreHorizontal /></button></div><div className="admin-file"><span><FileText /></span><div><strong>Expresiones colombianas.pdf</strong><small>PDF · 1.8 MB · {t.admin.yesterday}</small></div><button><MoreHorizontal /></button></div></div>
          <div className="admin-panel admin-message" id="announcements-admin"><PanelTitle title={t.admin.latestAnnouncement} action={t.admin.edit} /><Megaphone /><p>{t.members.announcement}</p><span>— Natalia · {t.admin.twoDaysAgo}</span></div>
        </section>
      </div>
    </main>

    {menuOpen && <button className="admin-menu-backdrop" aria-label={t.nav.close} onClick={() => setMenuOpen(false)} />}
    {composer && <div className="admin-modal-backdrop" role="presentation" onMouseDown={() => setComposer(false)}>
      <div className="admin-modal" role="dialog" aria-modal="true" aria-labelledby="announcement-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="admin-modal-close" onClick={() => setComposer(false)} aria-label={t.nav.close}><X /></button>
        <span className="dash-icon coral"><Megaphone /></span><h2 id="announcement-title">{t.admin.composeTitle}</h2><p>{t.admin.composeText}</p>
        <form onSubmit={sendAnnouncement}><label>{t.admin.audience}<select><option>{t.admin.allStudents}</option><option>A1 · Primeras palabras</option><option>A2–B1 · Conversaciones con ritmo</option></select></label><label>{t.admin.message}<textarea required defaultValue={t.members.announcement} /></label><div><button type="button" className="button admin-secondary" onClick={() => setComposer(false)}>{t.admin.cancel}</button><button className="button button-primary" type="submit">{sent ? <><Check />{t.admin.sent}</> : t.admin.send}</button></div></form>
      </div>
    </div>}
  </div>;
}

function StatCard({ icon: Icon, label, value, detail, tone }: { icon: typeof Users2; label: string; value: string; detail: string; tone: string }) {
  return <article className="admin-stat"><span className={`admin-stat-icon ${tone}`}><Icon /></span><div><p>{label}</p><strong>{value}</strong><small>{detail}</small></div></article>;
}

function PanelTitle({ title, action }: { title: string; action: string }) {
  return <div className="admin-panel-title"><h2>{title}</h2><button>{action}<ChevronRight /></button></div>;
}

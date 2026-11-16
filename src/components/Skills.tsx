'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
// Tech brand icons from react-icons/si (Simple Icons)
import {
  SiPhp, SiDart, SiPython, SiJavascript,
  SiHtml5, SiCss, SiTailwindcss,
  SiLaravel, SiFlutter,
  SiMysql, SiMariadb, SiKaggle,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
// Lucide for soft skill icons
import { Users, BookOpen, Lightbulb, Camera, Trophy, Gamepad2 } from 'lucide-react'

// ── Color per icon (muted to stay within warm palette) ────────
type SkillDef = {
  name: string
  icon: React.ReactNode
  color: string        // tailwind bg class
  textColor: string    // tailwind text class
  context: { en: string; id: string }
  category: 'lang' | 'web' | 'framework' | 'db' | 'soft'
}

const techSkills: SkillDef[] = [
  // ── Programming Languages ───────────────────────────
  {
    name: 'PHP',
    icon: <SiPhp size={22} />,
    color: 'bg-indigo-50', textColor: 'text-indigo-600',
    context: { en: 'Used in LokalRata & Event Mgmt', id: 'Dipakai di LokalRata & Event Mgmt' },
    category: 'lang',
  },
  {
    name: 'Dart',
    icon: <SiDart size={22} />,
    color: 'bg-sky-50', textColor: 'text-sky-600',
    context: { en: 'Mobile AI App — Private Note', id: 'Aplikasi Mobile AI — Private Note' },
    category: 'lang',
  },
  {
    name: 'Python',
    icon: <SiPython size={22} />,
    color: 'bg-yellow-50', textColor: 'text-yellow-600',
    context: { en: 'Data exploration on Kaggle', id: 'Eksplorasi data di Kaggle' },
    category: 'lang',
  },
  {
    name: 'Java',
    icon: <FaJava size={22} />,
    color: 'bg-orange-50', textColor: 'text-orange-600',
    context: { en: 'OOP fundamentals', id: 'Dasar pemrograman berorientasi objek' },
    category: 'lang',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript size={22} />,
    color: 'bg-yellow-50', textColor: 'text-yellow-500',
    context: { en: 'Web interactivity & logic', id: 'Interaktivitas web & logika' },
    category: 'lang',
  },
  // ── Web & Styling ────────────────────────────────────
  {
    name: 'HTML5',
    icon: <SiHtml5 size={22} />,
    color: 'bg-orange-50', textColor: 'text-orange-500',
    context: { en: 'Semantic markup', id: 'Markup semantik' },
    category: 'web',
  },
  {
    name: 'CSS3',
    icon: <SiCss size={22} />,
    color: 'bg-blue-50', textColor: 'text-blue-500',
    context: { en: 'Responsive layouts', id: 'Tata letak responsif' },
    category: 'web',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss size={22} />,
    color: 'bg-cyan-50', textColor: 'text-cyan-600',
    context: { en: 'Utility-first styling', id: 'Styling utility-first' },
    category: 'web',
  },
  // ── Frameworks & Mobile ───────────────────────────────
  {
    name: 'Laravel',
    icon: <SiLaravel size={22} />,
    color: 'bg-red-50', textColor: 'text-red-500',
    context: { en: 'Full-stack MVC — LokalRata', id: 'Full-stack MVC — LokalRata' },
    category: 'framework',
  },
  {
    name: 'Flutter',
    icon: <SiFlutter size={22} />,
    color: 'bg-sky-50', textColor: 'text-sky-500',
    context: { en: 'Cross-platform mobile UI', id: 'UI mobile lintas platform' },
    category: 'framework',
  },
  // ── Database & Data ──────────────────────────────────
  {
    name: 'MySQL',
    icon: <SiMysql size={22} />,
    color: 'bg-blue-50', textColor: 'text-blue-600',
    context: { en: 'Relational DB — 7 FK migrations', id: 'DB relasional — 7 migrasi FK' },
    category: 'db',
  },
  {
    name: 'MariaDB',
    icon: <SiMariadb size={22} />,
    color: 'bg-amber-50', textColor: 'text-amber-600',
    context: { en: 'Open-source RDBMS', id: 'RDBMS open-source' },
    category: 'db',
  },
  {
    name: 'Kaggle',
    icon: <SiKaggle size={22} />,
    color: 'bg-cyan-50', textColor: 'text-cyan-600',
    context: { en: 'Data exploration & competitions', id: 'Eksplorasi data & kompetisi' },
    category: 'db',
  },
]

type SoftSkillDef = {
  icon: React.ReactNode
  title: { en: string; id: string }
  desc: { en: string; id: string }
  badge: { en: string; id: string }
  color: string
  textColor: string
}

const softSkills: SoftSkillDef[] = [
  {
    icon: <Users size={20} />,
    title: { en: 'Tech Community Leadership', id: 'Kepemimpinan Komunitas IT' },
    desc: {
      en: 'Vice Chair UKM Programming + Head PJ Coaching Program @ UMDP',
      id: 'Wakil Ketua UKM Programming + Kepala PJ Program Coaching @ UMDP',
    },
    badge: { en: 'University-Level', id: 'Tingkat Universitas' },
    color: 'bg-navy/8', textColor: 'text-navy',
  },
  {
    icon: <BookOpen size={20} />,
    title: { en: 'Cross-Age Teaching', id: 'Mengajar Lintas Usia' },
    desc: {
      en: 'Taught kindergarten–Grade 3 (Sunday School), SMA programming extracurricular, and university coaching',
      id: 'Mengajar TK–SD 3 (Sekolah Minggu), ekskul programming SMA, dan coaching universitas',
    },
    badge: { en: 'Kindergarten → University', id: 'TK → Universitas' },
    color: 'bg-espresso/8', textColor: 'text-espresso',
  },
  {
    icon: <Gamepad2 size={20} />,
    title: { en: 'Esports & Competitive Coach', id: 'Pelatih Esports & Kompetitif' },
    desc: {
      en: 'Tekken 8 & Naruto Ninja Storm coach — frame data analysis, positioning, and mental composure',
      id: 'Pelatih Tekken 8 & Naruto Ninja Storm — analisis frame data, posisi, dan ketenangan mental',
    },
    badge: { en: 'Tekken 8 · Naruto NS', id: 'Tekken 8 · Naruto NS' },
    color: 'bg-purple-50', textColor: 'text-purple-600',
  },
  {
    icon: <Lightbulb size={20} />,
    title: { en: 'Analytical Problem Solving', id: 'Problem Solving Analitis' },
    desc: {
      en: 'Structured thinking from software engineering + competitive gaming strategy',
      id: 'Pemikiran terstruktur dari software engineering + strategi game kompetitif',
    },
    badge: { en: 'Software · Strategy', id: 'Software · Strategi' },
    color: 'bg-amber-50', textColor: 'text-amber-700',
  },
  {
    icon: <Camera size={20} />,
    title: { en: 'Visual Storytelling', id: 'Penceritaan Visual' },
    desc: {
      en: 'Photography & business marketing — composition, light, and audience communication',
      id: 'Fotografi & marketing bisnis — komposisi, cahaya, dan komunikasi audiens',
    },
    badge: { en: 'Photography · Marketing', id: 'Fotografi · Marketing' },
    color: 'bg-rose-50', textColor: 'text-rose-600',
  },
  {
    icon: <Trophy size={20} />,
    title: { en: 'Competitive Programming', id: 'Competitive Programming' },
    desc: {
      en: 'IFEST 6.0 Competitive Programming participant @ UMDP',
      id: 'Peserta Competitive Programming IFEST 6.0 @ UMDP',
    },
    badge: { en: 'IFEST 6.0 · UMDP', id: 'IFEST 6.0 · UMDP' },
    color: 'bg-emerald-50', textColor: 'text-emerald-700',
  },
]

type Category = 'all' | 'lang' | 'web' | 'framework' | 'db' | 'soft'

const filters: { key: Category; en: string; id: string }[] = [
  { key: 'all',       en: 'All',           id: 'Semua' },
  { key: 'lang',      en: 'Languages',     id: 'Bahasa' },
  { key: 'web',       en: 'Web & Style',   id: 'Web & Gaya' },
  { key: 'framework', en: 'Frameworks',    id: 'Framework' },
  { key: 'db',        en: 'Database',      id: 'Database' },
  { key: 'soft',      en: 'Soft Skills',   id: 'Soft Skill' },
]

const ui = {
  en: { sectionLabel: 'Skills', headline: 'Tech Stack & Unique Edge', contextPill: 'Context' },
  id: { sectionLabel: 'Keahlian', headline: 'Teknologi & Keunggulan Unik', contextPill: 'Konteks' },
}

export default function Skills() {
  const { locale, t } = useLanguage()
  const copy = ui[locale]
  const [activeFilter, setActiveFilter] = useState<Category>('all')

  return (
    <section id="skills" className="section-spacing" style={{ background: 'linear-gradient(180deg,#F7F3EB 0%,#EAE2D3 100%)' }} aria-labelledby="skills-heading">
      <div className="section-container">
        <p className="font-mono text-xs text-espresso tracking-widest uppercase mb-3">{copy.sectionLabel}</p>
        <h2 id="skills-heading" className="text-3xl md:text-4xl font-editorial font-bold text-charcoal mb-8">{copy.headline}</h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-ui font-semibold border transition-all duration-200 ${
                activeFilter === f.key
                  ? 'bg-navy text-cream border-navy shadow-warm-sm'
                  : 'bg-cream text-charcoal/60 border-espresso/20 hover:border-espresso/40 hover:text-charcoal'
              }`}
            >
              {locale === 'en' ? f.en : f.id}
            </button>
          ))}
        </div>

        {/* Tech Skills Grid */}
        {(activeFilter === 'all' || activeFilter !== 'soft') && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
            {techSkills
              .filter((s) => activeFilter === 'all' || s.category === activeFilter)
              .map((skill) => (
                <div
                  key={skill.name}
                  className="bg-cream rounded-xl border border-espresso/10 p-4 flex flex-col gap-2.5 hover:-translate-y-1 hover:shadow-warm-md hover:border-espresso/30 transition-all duration-300 cursor-default"
                >
                  {/* Icon badge */}
                  <div className={`w-10 h-10 rounded-xl ${skill.color} ${skill.textColor} flex items-center justify-center`}>
                    {skill.icon}
                  </div>
                  <p className="font-ui font-semibold text-sm text-charcoal leading-tight">{skill.name}</p>
                  <p className="font-mono text-[10px] text-charcoal/45 leading-snug">{locale === 'en' ? skill.context.en : skill.context.id}</p>
                </div>
              ))}
          </div>
        )}

        {/* Soft Skills Bento Grid */}
        {(activeFilter === 'all' || activeFilter === 'soft') && (
          <>
            {activeFilter === 'all' && (
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs font-bold text-espresso">◎</span>
                <h3 className="font-ui text-xs font-semibold text-charcoal/50 tracking-widest uppercase">Soft Skills & Unique Edge</h3>
                <div className="flex-1 h-px" style={{ background: 'rgba(92,64,51,0.12)' }} />
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {softSkills.map((s, i) => (
                <div
                  key={i}
                  className={`${s.color} rounded-xl border border-espresso/10 p-4 flex gap-3 hover:-translate-y-1 hover:shadow-warm-md transition-all duration-300 cursor-default`}
                >
                  <div className={`w-9 h-9 rounded-xl bg-white/60 ${s.textColor} flex items-center justify-center shrink-0`}>
                    {s.icon}
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <p className="font-ui font-semibold text-sm text-charcoal leading-tight">{locale === 'en' ? s.title.en : s.title.id}</p>
                    <p className="font-ui text-xs text-charcoal/55 leading-snug">{locale === 'en' ? s.desc.en : s.desc.id}</p>
                    <span className={`self-start mt-1 font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/70 ${s.textColor}`}>
                      {locale === 'en' ? s.badge.en : s.badge.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

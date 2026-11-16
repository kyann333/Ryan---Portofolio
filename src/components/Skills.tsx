'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import SpotlightCard from './SpotlightCard'
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

const EASE = [0.22, 1, 0.36, 1] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: EASE, delay },
})

// ── Color per icon ────────────────────────────────────────────
type SkillDef = {
  name: string
  icon: React.ReactNode
  color: string
  textColor: string
  context: { en: string; id: string }
  category: 'lang' | 'web' | 'framework' | 'db' | 'soft'
}

const techSkills: SkillDef[] = [
  {
    name: 'PHP',
    icon: <SiPhp size={22} />,
    color: 'bg-indigo-50', textColor: 'text-indigo-700',
    context: { en: 'Used in LokalRata & Event Mgmt', id: 'Dipakai di LokalRata & Event Mgmt' },
    category: 'lang',
  },
  {
    name: 'Dart',
    icon: <SiDart size={22} />,
    color: 'bg-sky-50', textColor: 'text-sky-700',
    context: { en: 'Mobile AI App — Private Note', id: 'Aplikasi Mobile AI — Private Note' },
    category: 'lang',
  },
  {
    name: 'Python',
    icon: <SiPython size={22} />,
    color: 'bg-yellow-50', textColor: 'text-yellow-700',
    context: { en: 'Data exploration on Kaggle', id: 'Eksplorasi data di Kaggle' },
    category: 'lang',
  },
  {
    name: 'Java',
    icon: <FaJava size={22} />,
    color: 'bg-orange-50', textColor: 'text-orange-700',
    context: { en: 'OOP fundamentals', id: 'Dasar pemrograman berorientasi objek' },
    category: 'lang',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript size={22} />,
    color: 'bg-yellow-50', textColor: 'text-yellow-600',
    context: { en: 'Web interactivity & logic', id: 'Interaktivitas web & logika' },
    category: 'lang',
  },
  {
    name: 'HTML5',
    icon: <SiHtml5 size={22} />,
    color: 'bg-orange-50', textColor: 'text-orange-600',
    context: { en: 'Semantic markup', id: 'Markup semantik' },
    category: 'web',
  },
  {
    name: 'CSS3',
    icon: <SiCss size={22} />,
    color: 'bg-blue-50', textColor: 'text-blue-700',
    context: { en: 'Responsive layouts', id: 'Tata letak responsif' },
    category: 'web',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss size={22} />,
    color: 'bg-cyan-50', textColor: 'text-cyan-700',
    context: { en: 'Utility-first styling', id: 'Styling utility-first' },
    category: 'web',
  },
  {
    name: 'Laravel',
    icon: <SiLaravel size={22} />,
    color: 'bg-red-50', textColor: 'text-red-600',
    context: { en: 'Full-stack MVC — LokalRata', id: 'Full-stack MVC — LokalRata' },
    category: 'framework',
  },
  {
    name: 'Flutter',
    icon: <SiFlutter size={22} />,
    color: 'bg-sky-50', textColor: 'text-sky-600',
    context: { en: 'Cross-platform mobile UI', id: 'UI mobile lintas platform' },
    category: 'framework',
  },
  {
    name: 'MySQL',
    icon: <SiMysql size={22} />,
    color: 'bg-blue-50', textColor: 'text-blue-700',
    context: { en: 'Relational DB — 7 FK migrations', id: 'DB relasional — 7 migrasi FK' },
    category: 'db',
  },
  {
    name: 'MariaDB',
    icon: <SiMariadb size={22} />,
    color: 'bg-amber-50', textColor: 'text-amber-700',
    context: { en: 'Open-source RDBMS', id: 'RDBMS open-source' },
    category: 'db',
  },
  {
    name: 'Kaggle',
    icon: <SiKaggle size={22} />,
    color: 'bg-cyan-50', textColor: 'text-cyan-700',
    context: { en: 'Data exploration & competitions', id: 'Eksplorasi data & kompetisi' },
    category: 'db',
  },
]

type SoftSkillDef = {
  icon: React.ReactNode
  title: { en: string; id: string }
  desc: { en: string; id: string }
  badge: { en: string; id: string }
  // Icon badge uses solid Navy or Espresso per instruction
  iconBg: string
  iconText: string
  cardBg: string
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
    iconBg: 'bg-[#1B365D]', iconText: 'text-[#F7F3EB]',
    cardBg: 'bg-[#EAE2D3]',
  },
  {
    icon: <BookOpen size={20} />,
    title: { en: 'Cross-Age Teaching', id: 'Mengajar Lintas Usia' },
    desc: {
      en: 'Taught kindergarten–Grade 3 (Sunday School), SMA programming extracurricular, and university coaching',
      id: 'Mengajar TK–SD 3 (Sekolah Minggu), ekskul programming SMA, dan coaching universitas',
    },
    badge: { en: 'Kindergarten → University', id: 'TK → Universitas' },
    iconBg: 'bg-[#5C4033]', iconText: 'text-[#F7F3EB]',
    cardBg: 'bg-[#FDFBF7]',
  },
  {
    icon: <Gamepad2 size={20} />,
    title: { en: 'Esports & Competitive Coach', id: 'Pelatih Esports & Kompetitif' },
    desc: {
      en: 'Tekken 8 & Naruto Ninja Storm coach — frame data analysis, positioning, and mental composure',
      id: 'Pelatih Tekken 8 & Naruto Ninja Storm — analisis frame data, posisi, dan ketenangan mental',
    },
    badge: { en: 'Tekken 8 · Naruto NS', id: 'Tekken 8 · Naruto NS' },
    iconBg: 'bg-[#1B365D]', iconText: 'text-[#F7F3EB]',
    cardBg: 'bg-[#EAE2D3]',
  },
  {
    icon: <Lightbulb size={20} />,
    title: { en: 'Analytical Problem Solving', id: 'Problem Solving Analitis' },
    desc: {
      en: 'Structured thinking from software engineering + competitive gaming strategy',
      id: 'Pemikiran terstruktur dari software engineering + strategi game kompetitif',
    },
    badge: { en: 'Software · Strategy', id: 'Software · Strategi' },
    iconBg: 'bg-[#5C4033]', iconText: 'text-[#F7F3EB]',
    cardBg: 'bg-[#FDFBF7]',
  },
  {
    icon: <Camera size={20} />,
    title: { en: 'Visual Storytelling', id: 'Penceritaan Visual' },
    desc: {
      en: 'Photography & business marketing — composition, light, and audience communication',
      id: 'Fotografi & marketing bisnis — komposisi, cahaya, dan komunikasi audiens',
    },
    badge: { en: 'Photography · Marketing', id: 'Fotografi · Marketing' },
    iconBg: 'bg-[#1B365D]', iconText: 'text-[#F7F3EB]',
    cardBg: 'bg-[#EAE2D3]',
  },
  {
    icon: <Trophy size={20} />,
    title: { en: 'Competitive Programming', id: 'Competitive Programming' },
    desc: {
      en: 'IFEST 6.0 Competitive Programming participant @ UMDP',
      id: 'Peserta Competitive Programming IFEST 6.0 @ UMDP',
    },
    badge: { en: 'IFEST 6.0 · UMDP', id: 'IFEST 6.0 · UMDP' },
    iconBg: 'bg-[#5C4033]', iconText: 'text-[#F7F3EB]',
    cardBg: 'bg-[#FDFBF7]',
  },
]

type Category = 'all' | 'lang' | 'web' | 'framework' | 'db' | 'soft'

const filters: { key: Category; en: string; id: string }[] = [
  { key: 'all',       en: 'All',         id: 'Semua' },
  { key: 'lang',      en: 'Languages',   id: 'Bahasa' },
  { key: 'web',       en: 'Web & Style', id: 'Web & Gaya' },
  { key: 'framework', en: 'Frameworks',  id: 'Framework' },
  { key: 'db',        en: 'Database',    id: 'Database' },
  { key: 'soft',      en: 'Soft Skills', id: 'Soft Skill' },
]

const copy = {
  en: { sectionLabel: 'Skills', headline: 'Tech Stack & Unique Edge' },
  id: { sectionLabel: 'Keahlian', headline: 'Teknologi & Keunggulan Unik' },
}

export default function Skills() {
  const { locale } = useLanguage()
  const ui = copy[locale]
  const [activeFilter, setActiveFilter] = useState<Category>('all')

  const visibleTech = techSkills.filter(
    (s) => activeFilter === 'all' || s.category === activeFilter
  )
  const showTech = activeFilter === 'all' || activeFilter !== 'soft'
  const showSoft = activeFilter === 'all' || activeFilter === 'soft'

  return (
    <section
      id="skills"
      className="section-spacing"
      style={{ background: 'linear-gradient(180deg,#F7F3EB 0%,#EAE2D3 100%)' }}
      aria-labelledby="skills-heading"
    >
      <div className="section-container">
        <motion.p {...fadeUp(0)} className="font-mono text-xs text-espresso tracking-widest uppercase mb-3">
          {ui.sectionLabel}
        </motion.p>
        <motion.h2 {...fadeUp(0.06)} id="skills-heading" className="text-3xl md:text-4xl font-editorial font-bold text-charcoal mb-8">
          {ui.headline}
        </motion.h2>

        {/* Filter tabs — with layoutId sliding pill */}
        <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`relative px-3.5 py-1.5 rounded-full text-xs font-ui font-semibold border transition-colors duration-200 ${
                activeFilter === f.key
                  ? 'text-cream border-navy'
                  : 'bg-cream text-charcoal/60 border-espresso/20 hover:border-espresso/40 hover:text-charcoal'
              }`}
            >
              {activeFilter === f.key && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-navy"
                  transition={{ duration: 0.25, ease: EASE }}
                />
              )}
              <span className="relative">{locale === 'en' ? f.en : f.id}</span>
            </button>
          ))}
        </motion.div>

        {/* Tech Skills Grid */}
        {showTech && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
            {visibleTech.map((skill, i) => (
              <motion.div key={skill.name} {...fadeUp(i * 0.04)}>
                <SpotlightCard className="bg-cream rounded-xl border border-espresso/15 p-4 flex flex-col gap-2.5 h-full cursor-default">
                  <div className={`w-10 h-10 rounded-xl ${skill.color} ${skill.textColor} flex items-center justify-center`}>
                    {skill.icon}
                  </div>
                  <p className="font-ui font-semibold text-sm text-charcoal leading-tight">{skill.name}</p>
                  <p className="font-mono text-[10px] text-charcoal/50 leading-snug">
                    {locale === 'en' ? skill.context.en : skill.context.id}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        )}

        {/* Soft Skills Bento Grid — High-contrast editorial palette */}
        {showSoft && (
          <>
            {activeFilter === 'all' && (
              <motion.div {...fadeUp(0)} className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs font-bold text-espresso">◎</span>
                <h3 className="font-ui text-xs font-semibold text-charcoal/50 tracking-widest uppercase">
                  Soft Skills & Unique Edge
                </h3>
                <div className="flex-1 h-px" style={{ background: 'rgba(92,64,51,0.12)' }} />
              </motion.div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {softSkills.map((s, i) => (
                <motion.div key={i} {...fadeUp(i * 0.07)}>
                  <SpotlightCard
                    className={`${s.cardBg} rounded-xl border border-[#5C4033]/25 p-4 flex gap-3 h-full cursor-default`}
                  >
                    {/* Solid icon badge — high contrast */}
                    <div
                      className={`w-9 h-9 rounded-xl ${s.iconBg} ${s.iconText} flex items-center justify-center shrink-0`}
                      aria-hidden="true"
                    >
                      {s.icon}
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <p className="font-ui font-bold text-sm text-[#1C1B18] leading-tight">
                        {locale === 'en' ? s.title.en : s.title.id}
                      </p>
                      <p className="font-ui text-xs leading-snug" style={{ color: '#3B352E' }}>
                        {locale === 'en' ? s.desc.en : s.desc.id}
                      </p>
                      <span
                        className={`self-start mt-1 font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full ${s.iconBg} ${s.iconText}`}
                      >
                        {locale === 'en' ? s.badge.en : s.badge.id}
                      </span>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

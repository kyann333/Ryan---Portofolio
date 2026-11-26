'use client'

import { motion } from 'framer-motion'
import { Headphones, Utensils, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import SpotlightCard from './SpotlightCard'

const EASE = [0.22, 1, 0.36, 1] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, ease: EASE, delay },
})

const ui = {
  en: {
    sectionLabel: 'About',
    headline: 'Two Strengths, One Developer',
    sub: 'I build practical software—from Laravel supply-chain platforms to Flutter apps—and pair it with clear communication and purposeful leadership.',
    techTitle: 'Technical Depth',
    techDesc: 'Laravel/MySQL backend and database architecture, cross-platform Flutter UI, and Python data exploration on Kaggle—built with clean MVC separation, foreign-key-aware migrations, and maintainable Eloquent relationships.',
    humanTitle: 'Human-Centered Side',
    humanDesc: 'Vice Chair of UKM Programming, assistant programming instructor, and national-event volunteer—experienced in simplifying complex ideas, motivating teams, and building communities from scratch.',
    education: 'Education',
    umdpDegree: 'S1 Informatics (Bachelor of Computer Science)',
    umdpPeriod: '2025 – Present',
    smaLabel: 'SMA Xaverius 3 Palembang',
    smaGrad: 'Graduated 2025',
    location: 'Palembang, Indonesia',
    hobbiesLabel: 'Off-Screen & Hobbies',
    hobbies: [
      {
        title: 'Listening to Music',
        desc: 'Keeps focus while coding and recharges after long sessions.',
        icon: 'music',
      },
      {
        title: 'Good Food & Culinary',
        desc: 'Enjoying great food and hunting for favorite local spots.',
        icon: 'food',
      },
      {
        title: 'Hanging Out & Deep Talks',
        desc: 'Exchanging stories, ideas, and casual chats with friends.',
        icon: 'chat',
      },
    ],
  },
  id: {
    sectionLabel: 'Tentang',
    headline: 'Dua Kekuatan, Satu Developer',
    sub: 'Saya membangun perangkat lunak praktis—dari platform rantai pasok Laravel hingga aplikasi Flutter—dengan komunikasi yang jelas dan kepemimpinan yang terarah.',
    techTitle: 'Kedalaman Teknis',
    techDesc: 'Backend dan arsitektur database Laravel/MySQL, UI Flutter lintas platform, serta eksplorasi data Python di Kaggle—dengan pemisahan MVC, migrasi yang menjaga foreign key, dan relasi Eloquent yang mudah dipelihara.',
    humanTitle: 'Sisi Manusiawi',
    humanDesc: 'Wakil Ketua UKM Programming, asisten pengajar pemrograman, dan volunteer acara nasional—berpengalaman menyederhanakan ide kompleks, memotivasi tim, dan membangun komunitas dari nol.',
    education: 'Pendidikan',
    umdpDegree: 'S1 Informatika (Sarjana Ilmu Komputer)',
    umdpPeriod: '2025 – Sekarang',
    smaLabel: 'SMA Xaverius 3 Palembang',
    smaGrad: 'Lulus 2025',
    location: 'Palembang, Indonesia',
    hobbiesLabel: 'Hobi & Waktu Luang',
    hobbies: [
      {
        title: 'Mendengarkan Musik',
        desc: 'Menemani fokus saat ngoding dan melepas penat setelah sesi panjang.',
        icon: 'music',
      },
      {
        title: 'Makan & Kuliner',
        desc: 'Menikmati makanan enak dan berburu kuliner favorit.',
        icon: 'food',
      },
      {
        title: 'Ngobrol Santai',
        desc: 'Bertukar cerita, ide, dan berdiskusi santai bersama teman.',
        icon: 'chat',
      },
    ],
  },
}

const hobbyIconMap = {
  music: { Icon: Headphones, bg: 'bg-navy', text: 'text-cream' },
  food:  { Icon: Utensils,   bg: 'bg-espresso', text: 'text-cream' },
  chat:  { Icon: MessageCircle, bg: 'bg-navy', text: 'text-cream' },
} as const

export default function About() {
  const { locale } = useLanguage()
  const copy = ui[locale]

  return (
    <section id="about" className="section-spacing hairline" aria-labelledby="about-heading">
      <div className="section-container">

        {/* Section label */}
        <motion.p {...fadeUp(0)} className="font-mono text-xs text-espresso tracking-widest uppercase mb-3">
          {copy.sectionLabel}
        </motion.p>

        <motion.h2
          {...fadeUp(0.05)}
          id="about-heading"
          className="text-3xl md:text-4xl font-editorial font-bold text-charcoal mb-4"
        >
          {copy.headline}
        </motion.h2>
        <motion.p {...fadeUp(0.1)} className="text-charcoal/65 font-ui text-base md:text-lg leading-relaxed max-w-2xl mb-10">
          {copy.sub}
        </motion.p>

        {/* Dual-strength cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {/* Technical card */}
          <motion.div {...fadeUp(0.15)}>
            <SpotlightCard className="card-warm p-6 border-l-4 border-navy h-full">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-xl bg-navy flex items-center justify-center text-cream" aria-hidden="true">
                  <CodeIcon className="w-5 h-5" />
                </span>
                <h3 className="font-editorial font-semibold text-charcoal text-lg">{copy.techTitle}</h3>
              </div>
              <p className="text-charcoal/70 font-ui text-sm leading-relaxed">{copy.techDesc}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {['Laravel', 'PHP', 'MySQL', 'Flutter', 'Dart', 'Python'].map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Human side card */}
          <motion.div {...fadeUp(0.22)}>
            <SpotlightCard className="card-warm p-6 border-l-4 border-espresso h-full">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-xl bg-espresso flex items-center justify-center text-cream" aria-hidden="true">
                  <PeopleIcon className="w-5 h-5" />
                </span>
                <h3 className="font-editorial font-semibold text-charcoal text-lg">{copy.humanTitle}</h3>
              </div>
              <p className="text-charcoal/70 font-ui text-sm leading-relaxed">{copy.humanDesc}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {['Leadership', 'Peer Teaching', 'Photography', 'Business'].map((t) => (
                  <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-full bg-espresso/10 text-espresso border border-espresso/20">{t}</span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Education */}
        <div className="hairline pt-10 mb-14">
          <motion.p {...fadeUp(0)} className="font-mono text-xs text-espresso tracking-widest uppercase mb-5">
            {copy.education}
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div {...fadeUp(0.07)}>
              <SpotlightCard className="card-warm p-5 flex gap-4 items-start h-full">
                <span className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-cream shrink-0" aria-hidden="true">
                  <MortarboardIcon className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-editorial font-semibold text-charcoal text-sm">Universitas Multi Data Palembang</p>
                  <p className="font-ui text-xs text-charcoal/60 mt-0.5">{copy.umdpDegree}</p>
                  <p className="font-mono text-xs text-navy mt-1">{copy.umdpPeriod}</p>
                  <p className="font-mono text-xs text-espresso/60 mt-0.5">{copy.location}</p>
                </div>
              </SpotlightCard>
            </motion.div>
            <motion.div {...fadeUp(0.14)}>
              <SpotlightCard className="card-warm p-5 flex gap-4 items-start h-full">
                <span className="w-10 h-10 rounded-xl bg-espresso flex items-center justify-center text-cream shrink-0" aria-hidden="true">
                  <SchoolIcon className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-editorial font-semibold text-charcoal text-sm">{copy.smaLabel}</p>
                  <p className="font-ui text-xs text-charcoal/60 mt-0.5">{copy.smaGrad}</p>
                  <p className="font-mono text-xs text-espresso/60 mt-1">{copy.location}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>

        {/* ── Off-Screen & Hobbies ───────────────────────────── */}
        <div className="hairline pt-10">
          <motion.p {...fadeUp(0)} className="font-mono text-xs text-espresso tracking-widest uppercase mb-5">
            {copy.hobbiesLabel}
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {copy.hobbies.map((h, i) => {
              const { Icon, bg, text } = hobbyIconMap[h.icon as keyof typeof hobbyIconMap]
              return (
                <motion.div key={h.icon} {...fadeUp(i * 0.09)}>
                  <SpotlightCard className="card-warm p-5 flex flex-col gap-3 h-full">
                    <span
                      className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center ${text} shrink-0`}
                      aria-hidden="true"
                    >
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="font-editorial font-bold text-charcoal text-sm mb-1">{h.title}</p>
                      <p className="font-ui text-xs leading-relaxed" style={{ color: '#3B352E' }}>{h.desc}</p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

// ── Icons ─────────────────────────────────────────────────────

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z" clipRule="evenodd" />
    </svg>
  )
}

function PeopleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 17a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
    </svg>
  )
}

function MortarboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function SchoolIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm5.99 7.176A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
    </svg>
  )
}

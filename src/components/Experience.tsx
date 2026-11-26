'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { experiences, experienceCategories } from '@/data/experience'
import type { ExperienceCategory } from '@/types/portfolio'

const variantStyles = {
  navy: 'border-navy bg-navy/8 text-navy',
  espresso: 'border-espresso bg-espresso/8 text-espresso',
  teal: 'border-teal-500 bg-teal-50 text-teal-700',
}

const dotStyles = {
  navy: 'bg-navy',
  espresso: 'bg-espresso',
  teal: 'bg-teal-500',
}

const ui = {
  en: {
    sectionLabel: 'Experience',
    headline: 'Leadership, Teaching & Contributions',
    all: 'All',
    highlights: 'Highlights',
  },
  id: {
    sectionLabel: 'Pengalaman',
    headline: 'Kepemimpinan, Pengajaran & Kontribusi',
    all: 'Semua',
    highlights: 'Sorotan',
  },
}

export default function Experience() {
  const { locale, t } = useLanguage()
  const copy = ui[locale]
  const [activeCategory, setActiveCategory] = useState<ExperienceCategory | 'All'>('All')

  const filtered = activeCategory === 'All'
    ? experiences
    : experiences.filter((e) => e.category === activeCategory)

  return (
    <section id="experience" className="section-spacing hairline bg-white/35" aria-labelledby="experience-heading">
      <div className="section-container">
        <p className="font-mono text-xs text-espresso tracking-widest uppercase mb-3">
          {copy.sectionLabel}
        </p>
        <h2 id="experience-heading" className="text-3xl md:text-4xl font-editorial font-bold text-charcoal mb-8">
          {copy.headline}
        </h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter experience by category">
          {experienceCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as ExperienceCategory | 'All')}
              className={`relative px-3.5 py-1.5 rounded-full text-xs font-ui font-semibold border transition-colors duration-200 ${
                activeCategory === cat
                  ? 'text-white border-navy'
                  : 'bg-white/70 text-charcoal/65 border-charcoal/10 hover:border-navy/25 hover:text-navy'
              }`}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="experience-filter-pill"
                  className="absolute inset-0 rounded-full bg-navy shadow-warm-sm"
                  transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <span className="relative">{locale === 'en'
                ? cat
                : cat === 'All'
                ? 'Semua'
                : cat === 'Tech & Teaching'
                ? 'Teknologi & Mengajar'
                : cat === 'Leadership & Events'
                ? 'Kepemimpinan & Acara'
                : 'Bisnis'}</span>
            </button>
          ))}
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-espresso/15" aria-hidden="true" />

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5 pl-10 md:pl-16"
            >
              {filtered.map((exp) => {
                const variant = exp.variant ?? 'espresso'
                return (
                  <motion.article
                    key={exp.id}
                    layout
                    className="relative"
                  >
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-[2.3rem] md:-left-[3.1rem] top-5 w-3 h-3 rounded-full border-[3px] border-[#FAF9F6] ring-1 ring-charcoal/10 ${dotStyles[variant]}`}
                    aria-hidden="true"
                  />

                  <div className="card-warm p-5 md:p-6">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-editorial font-semibold text-charcoal text-base md:text-lg leading-snug">
                          {t(exp.role)}
                        </h3>
                        <p className="font-ui text-sm text-charcoal/60 mt-0.5">{exp.organization}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full border ${variantStyles[variant]}`}>
                          {exp.period}
                        </span>
                        <span className={`text-xs font-ui font-medium px-2 py-0.5 rounded-full bg-cream-dark text-charcoal/50 border border-espresso/10`}>
                          {locale === 'en'
                            ? exp.category
                            : exp.category === 'Tech & Teaching'
                            ? 'Teknologi & Mengajar'
                            : exp.category === 'Leadership & Events'
                            ? 'Kepemimpinan & Acara'
                            : 'Bisnis'}
                        </span>
                      </div>
                    </div>

                    <p className="font-ui text-sm text-charcoal/65 mt-3 leading-relaxed max-w-3xl">
                      {t(exp.description)}
                    </p>

                    {exp.highlights && exp.highlights.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-charcoal/5">
                        <p className="font-mono text-[10px] text-espresso/70 uppercase tracking-[0.16em] mb-2">
                          {copy.highlights}
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5">
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="flex gap-2 text-xs font-ui text-charcoal/70 leading-relaxed">
                              <span className="text-navy/70 shrink-0">↗</span>
                              {t(h)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  </motion.article>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

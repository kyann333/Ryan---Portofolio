'use client'

import { useState } from 'react'
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
    <section id="experience" className="section-spacing hairline" aria-labelledby="experience-heading">
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
              className={`px-3.5 py-1.5 rounded-full text-xs font-ui font-semibold border transition-all ${
                activeCategory === cat
                  ? 'bg-navy text-cream border-navy shadow-warm-sm'
                  : 'bg-cream text-charcoal/60 border-espresso/20 hover:border-espresso/40 hover:text-charcoal'
              }`}
            >
              {locale === 'en'
                ? cat
                : cat === 'All'
                ? 'Semua'
                : cat === 'Tech & Teaching'
                ? 'Teknologi & Mengajar'
                : cat === 'Leadership & Events'
                ? 'Kepemimpinan & Acara'
                : 'Bisnis'}
            </button>
          ))}
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-espresso/15" aria-hidden="true" />

          <div className="space-y-6 pl-10 md:pl-16">
            {filtered.map((exp) => {
              const variant = exp.variant ?? 'espresso'
              return (
                <article
                  key={exp.id}
                  className="relative animate-fade-in"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-[2.3rem] md:-left-[3.1rem] top-4 w-3 h-3 rounded-full border-2 border-cream ${dotStyles[variant]}`}
                    aria-hidden="true"
                  />

                  <div className="card-warm p-5">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-editorial font-semibold text-charcoal text-base leading-snug">
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

                    <p className="font-ui text-sm text-charcoal/65 mt-3 leading-relaxed">
                      {t(exp.description)}
                    </p>

                    {exp.highlights && exp.highlights.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-espresso/8">
                        <p className="font-mono text-xs text-espresso/60 uppercase tracking-widest mb-2">
                          {copy.highlights}
                        </p>
                        <ul className="space-y-1">
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="flex gap-1.5 text-xs font-ui text-charcoal/60">
                              <span className="text-espresso shrink-0">◆</span>
                              {t(h)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

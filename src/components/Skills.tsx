'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { skills, skillCategories } from '@/data/skills'
import type { SkillCategory } from '@/types/portfolio'

const categoryIcons: Record<SkillCategory, string> = {
  'Programming Languages': '{ }',
  'Frontend Markup & Styling': '◈',
  'Frameworks & Mobile': '⬡',
  'Database & Data': '⬢',
  'Soft Skills & Creative': '◎',
}

const categoryColors: Record<SkillCategory, string> = {
  'Programming Languages': 'bg-navy/8 text-navy border-navy/15',
  'Frontend Markup & Styling': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  'Frameworks & Mobile': 'bg-espresso/8 text-espresso border-espresso/15',
  'Database & Data': 'bg-teal-50 text-teal-700 border-teal-200',
  'Soft Skills & Creative': 'bg-rose-50 text-rose-700 border-rose-200',
}

const ui = {
  en: { sectionLabel: 'Skills', headline: 'Tech Stack & Soft Skills', all: 'All' },
  id: { sectionLabel: 'Keahlian', headline: 'Teknologi & Soft Skill', all: 'Semua' },
}

export default function Skills() {
  const { locale, t } = useLanguage()
  const copy = ui[locale]
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'All'>('All')

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="section-spacing bg-cream-dark/40" aria-labelledby="skills-heading">
      <div className="section-container">
        <p className="font-mono text-xs text-espresso tracking-widest uppercase mb-3">
          {copy.sectionLabel}
        </p>
        <h2 id="skills-heading" className="text-3xl md:text-4xl font-editorial font-bold text-charcoal mb-8">
          {copy.headline}
        </h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter skills by category">
          <FilterBtn
            active={activeCategory === 'All'}
            onClick={() => setActiveCategory('All')}
          >
            {copy.all}
          </FilterBtn>
          {skillCategories.map((cat) => (
            <FilterBtn
              key={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              <span className="font-mono mr-1" aria-hidden="true">{categoryIcons[cat]}</span>
              {cat}
            </FilterBtn>
          ))}
        </div>

        {/* Skills grid — grouped by category when "All" */}
        {activeCategory === 'All' ? (
          <div className="space-y-8">
            {skillCategories.map((cat) => {
              const catSkills = skills.filter((s) => s.category === cat)
              return (
                <div key={cat}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-espresso" aria-hidden="true">{categoryIcons[cat]}</span>
                    <h3 className="font-ui text-xs font-semibold text-charcoal/50 tracking-widest uppercase">{cat}</h3>
                    <div className="flex-1 h-px bg-espresso/10" aria-hidden="true" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {catSkills.map((skill) => (
                      <SkillCard
                        key={skill.name}
                        name={skill.name}
                        role={skill.role ? t(skill.role) : undefined}
                        colorClass={categoryColors[skill.category]}
                        icon={categoryIcons[skill.category]}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 animate-fade-in">
            {filtered.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                role={skill.role ? t(skill.role) : undefined}
                colorClass={categoryColors[skill.category]}
                icon={categoryIcons[skill.category]}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function SkillCard({
  name,
  role,
  colorClass,
  icon,
}: {
  name: string
  role?: string
  colorClass: string
  icon: string
}) {
  return (
    <div className="card-warm p-4 flex flex-col gap-2 hover:shadow-warm-md transition-shadow">
      <span className={`w-8 h-8 rounded-lg border flex items-center justify-center font-mono text-sm font-bold ${colorClass}`} aria-hidden="true">
        {icon}
      </span>
      <p className="font-ui font-semibold text-sm text-charcoal">{name}</p>
      {role && <p className="font-ui text-xs text-charcoal/50 leading-tight">{role}</p>}
    </div>
  )
}

function FilterBtn({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-full text-xs font-ui font-semibold border transition-all ${
        active
          ? 'bg-navy text-cream border-navy shadow-warm-sm'
          : 'bg-cream text-charcoal/60 border-espresso/20 hover:border-espresso/40 hover:text-charcoal'
      }`}
    >
      {children}
    </button>
  )
}

// ============================================================
// src/data/skills.ts
// Tech stack & soft skills — grouped by professional category.
// To add a skill: append an entry to the relevant group below.
// ============================================================

import type { Skill } from '@/types/portfolio'

export const skills: Skill[] = [
  // ── Programming Languages ────────────────────────────────
  {
    name: 'PHP',
    category: 'Programming Languages',
    icon: 'php',
    role: { en: 'Server-side scripting', id: 'Scripting sisi server' },
  },
  {
    name: 'Dart',
    category: 'Programming Languages',
    icon: 'dart',
    role: { en: 'Cross-platform mobile dev', id: 'Pengembangan mobile lintas platform' },
  },
  {
    name: 'Python',
    category: 'Programming Languages',
    icon: 'python',
    role: { en: 'Data exploration & scripting', id: 'Eksplorasi data & scripting' },
  },
  {
    name: 'Java',
    category: 'Programming Languages',
    icon: 'java',
    role: { en: 'Object-oriented programming', id: 'Pemrograman berorientasi objek' },
  },
  {
    name: 'JavaScript',
    category: 'Programming Languages',
    icon: 'javascript',
    role: { en: 'Web interactivity & logic', id: 'Interaktivitas web & logika' },
  },

  // ── Frontend Markup & Styling ────────────────────────────
  {
    name: 'HTML5',
    category: 'Frontend Markup & Styling',
    icon: 'html5',
    role: { en: 'Semantic markup', id: 'Markup semantik' },
  },
  {
    name: 'CSS3',
    category: 'Frontend Markup & Styling',
    icon: 'css3',
    role: { en: 'Styling & responsive layouts', id: 'Styling & tata letak responsif' },
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend Markup & Styling',
    icon: 'tailwindcss',
    role: { en: 'Utility-first CSS framework', id: 'Framework CSS utility-first' },
  },

  // ── Frameworks & Mobile ───────────────────────────────────
  {
    name: 'Laravel',
    category: 'Frameworks & Mobile',
    icon: 'laravel',
    role: { en: 'Full-stack PHP framework (MVC)', id: 'Framework PHP full-stack (MVC)' },
  },
  {
    name: 'Flutter',
    category: 'Frameworks & Mobile',
    icon: 'flutter',
    role: { en: 'Cross-platform mobile UI', id: 'UI mobile lintas platform' },
  },

  // ── Database & Data ───────────────────────────────────────
  {
    name: 'MySQL',
    category: 'Database & Data',
    icon: 'mysql',
    role: { en: 'Relational database management', id: 'Manajemen basis data relasional' },
  },
  {
    name: 'MariaDB',
    category: 'Database & Data',
    icon: 'mariadb',
    role: { en: 'Open-source RDBMS', id: 'RDBMS open-source' },
  },
  {
    name: 'Kaggle',
    category: 'Database & Data',
    icon: 'kaggle',
    role: { en: 'Data exploration & competitions', id: 'Eksplorasi data & kompetisi' },
  },

  // ── Soft Skills & Creative ────────────────────────────────
  {
    name: 'Leadership',
    category: 'Soft Skills & Creative',
    icon: 'leadership',
    role: {
      en: 'Vice Chair, UKM Programming',
      id: 'Wakil Ketua, UKM Programming',
    },
  },
  {
    name: 'Peer Teaching',
    category: 'Soft Skills & Creative',
    icon: 'teaching',
    role: {
      en: 'Programming instructor & mentor',
      id: 'Instruktur & mentor pemrograman',
    },
  },
  {
    name: 'Problem Solving',
    category: 'Soft Skills & Creative',
    icon: 'problem-solving',
    role: {
      en: 'Analytical & structured thinking',
      id: 'Pemikiran analitis & terstruktur',
    },
  },
  {
    name: 'Photography',
    category: 'Soft Skills & Creative',
    icon: 'photography',
    role: {
      en: 'Visual storytelling & composition',
      id: 'Penceritaan visual & komposisi',
    },
  },
]

/** Utility: get unique categories in display order */
export const skillCategories = [
  'Programming Languages',
  'Frontend Markup & Styling',
  'Frameworks & Mobile',
  'Database & Data',
  'Soft Skills & Creative',
] as const

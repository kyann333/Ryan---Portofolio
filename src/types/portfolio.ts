// ============================================================
// src/types/portfolio.ts
// Strict TypeScript contracts for all portfolio data entities.
// Update data files in src/data/ — never change these types
// unless you are adding a new field to ALL existing entries.
// ============================================================

/** Supported locale keys */
export type Locale = 'en' | 'id'

/** Bilingual text pair */
export interface BilingualText {
  en: string
  id: string
}

// ─── SKILLS ──────────────────────────────────────────────────

export type SkillCategory =
  | 'Programming Languages'
  | 'Frontend Markup & Styling'
  | 'Frameworks & Mobile'
  | 'Database & Data'
  | 'Soft Skills & Creative'

export interface Skill {
  name: string
  category: SkillCategory
  /** Optional icon identifier (devicon slug or custom key) */
  icon?: string
  /** Short descriptor shown beneath skill name */
  role?: BilingualText
}

// ─── PROJECTS ────────────────────────────────────────────────

export type ProjectStatus = 'completed' | 'in-progress'

export interface DatabaseTable {
  name: string
  description: BilingualText
}

export interface Project {
  id: string
  title: string
  subtitle: BilingualText
  description: BilingualText
  status: ProjectStatus
  /** 0–100, only relevant when status === 'in-progress' */
  progressPercent?: number
  /** Human-readable progress label shown with the progress bar */
  progressLabel?: BilingualText
  techStack: string[]
  features: BilingualText[]
  architectureNote: BilingualText
  databaseTables: DatabaseTable[]
  githubUrl?: string
  /** Used to order the display */
  order: number
}

// ─── CERTIFICATES ────────────────────────────────────────────

export type CertificateCategory =
  | 'Programming & Tech'
  | 'Leadership & Organization'
  | 'Competition'

export interface Certificate {
  id: string
  title: BilingualText
  issuer: string
  date: string          // ISO 8601 date string, e.g. "2024-08"
  category: CertificateCategory
  /** Path relative to /public, e.g. "/certificates/cert-01.jpg" */
  imageUrl?: string
  credentialUrl?: string
  description?: BilingualText
}

// ─── TESTIMONIALS ────────────────────────────────────────────

export type RelationTag =
  | 'Colleague'
  | 'Mentor'
  | 'Team Member'
  | 'Project Partner'
  | 'Peer'

export interface Testimonial {
  id: string
  name: string
  role: string
  organization: string
  quote_en: string
  quote_id: string
  relationTag: RelationTag
  /** Optional path to avatar image */
  avatarUrl?: string
}

// ─── EXPERIENCE ──────────────────────────────────────────────

export type ExperienceCategory =
  | 'Tech & Teaching'
  | 'Leadership & Events'
  | 'Business'

export interface Experience {
  id: string
  role: BilingualText
  organization: string
  period: string           // e.g. "2026 – 2027"
  category: ExperienceCategory
  description: BilingualText
  highlights?: BilingualText[]
  /** Badge color variant */
  variant?: 'navy' | 'espresso' | 'teal'
}

// ─── GITHUB REPO (Runtime, from API) ─────────────────────────

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  updated_at: string
  topics: string[]
}

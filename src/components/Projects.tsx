'use client'

import { useState, useEffect, useCallback } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { projects } from '@/data/projects'
import type { Project, GitHubRepo } from '@/types/portfolio'

const ui = {
  en: {
    sectionLabel: 'Projects',
    headline: 'Featured Work & Case Studies',
    viewArch: 'View System & DB Architecture',
    close: 'Close',
    features: 'Key Features',
    architecture: 'Architecture Note',
    database: 'Database Schema',
    table: 'Table',
    description: 'Description',
    viewGitHub: 'View on GitHub',
    progress: 'Progress',
    liveActivity: 'Live GitHub Activity',
    liveDesc: 'Latest public repositories from',
    stars: 'stars',
    fetchError: 'Could not load GitHub repos. Check back soon!',
    loading: 'Loading repositories…',
  },
  id: {
    sectionLabel: 'Proyek',
    headline: 'Karya Unggulan & Studi Kasus',
    viewArch: 'Lihat Arsitektur Sistem & DB',
    close: 'Tutup',
    features: 'Fitur Utama',
    architecture: 'Catatan Arsitektur',
    database: 'Skema Database',
    table: 'Tabel',
    description: 'Deskripsi',
    viewGitHub: 'Lihat di GitHub',
    progress: 'Progres',
    liveActivity: 'Aktivitas GitHub Langsung',
    liveDesc: 'Repositori publik terbaru dari',
    stars: 'bintang',
    fetchError: 'Tidak dapat memuat repositori GitHub. Coba lagi nanti!',
    loading: 'Memuat repositori…',
  },
}

export default function Projects() {
  const { locale, t } = useLanguage()
  const copy = ui[locale]
  const [modalProject, setModalProject] = useState<Project | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [reposLoading, setReposLoading] = useState(true)
  const [reposError, setReposError] = useState(false)

  // ── Fetch GitHub repos with AbortController (safe, no API key) ──
  useEffect(() => {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000)

    fetch('https://api.github.com/users/kyann333/repos?sort=updated&per_page=4', {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then(async (res) => {
        clearTimeout(timeout)
        if (!res.ok) throw new Error(`GitHub API ${res.status}`)
        const raw: unknown = await res.json()
        // Strict type validation — never use dangerouslySetInnerHTML on this data
        if (!Array.isArray(raw)) throw new Error('Unexpected response shape')
        const validated: GitHubRepo[] = raw
          .filter(
            (r): r is GitHubRepo =>
              typeof r === 'object' &&
              r !== null &&
              typeof (r as GitHubRepo).id === 'number' &&
              typeof (r as GitHubRepo).name === 'string' &&
              typeof (r as GitHubRepo).html_url === 'string'
          )
          .slice(0, 4)
        setRepos(validated)
        setReposLoading(false)
      })
      .catch(() => {
        clearTimeout(timeout)
        if (!controller.signal.aborted) {
          setReposError(true)
          setReposLoading(false)
        }
      })

    return () => {
      clearTimeout(timeout)
      controller.abort()
    }
  }, [])

  const closeModal = useCallback(() => setModalProject(null), [])

  // Close modal on Escape
  useEffect(() => {
    if (!modalProject) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [modalProject, closeModal])

  const sortedProjects = [...projects].sort((a, b) => a.order - b.order)

  return (
    <section id="projects" className="section-spacing hairline" aria-labelledby="projects-heading">
      <div className="section-container">
        <p className="font-mono text-xs text-espresso tracking-widest uppercase mb-3">
          {copy.sectionLabel}
        </p>
        <h2 id="projects-heading" className="text-3xl md:text-4xl font-editorial font-bold text-charcoal mb-10">
          {copy.headline}
        </h2>

        {/* ── Part A: Curated case studies ─────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {sortedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              locale={locale}
              t={t}
              copy={copy}
              onViewArchitecture={() => setModalProject(project)}
            />
          ))}
        </div>

        {/* ── Part B: Live GitHub Activity ─────────────────── */}
        <div className="hairline pt-10">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div>
              <p className="font-mono text-xs text-espresso tracking-widest uppercase mb-1">
                {copy.liveActivity}
              </p>
              <p className="text-sm text-charcoal/60 font-ui">
                {copy.liveDesc}{' '}
                <a
                  href="https://github.com/kyann333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy underline underline-offset-2"
                >
                  @kyann333
                </a>
              </p>
            </div>
            <a
              href="https://github.com/kyann333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-ui font-semibold text-navy hover:underline"
            >
              View all →
            </a>
          </div>

          {reposLoading && (
            <div className="text-sm text-charcoal/40 font-ui animate-pulse">{copy.loading}</div>
          )}
          {reposError && (
            <div className="text-sm text-charcoal/40 font-ui">{copy.fetchError}</div>
          )}
          {!reposLoading && !reposError && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {repos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} starsLabel={copy.stars} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Architecture Modal ─────────────────────────────── */}
      {modalProject && (
        <ArchitectureModal
          project={modalProject}
          onClose={closeModal}
          locale={locale}
          t={t}
          copy={copy}
        />
      )}
    </section>
  )
}

// ── Project Card ──────────────────────────────────────────────

function ProjectCard({
  project,
  locale,
  t,
  copy,
  onViewArchitecture,
}: {
  project: Project
  locale: 'en' | 'id'
  t: (text: { en: string; id: string }) => string
  copy: typeof ui['en']
  onViewArchitecture: () => void
}) {
  return (
    <article className="card-warm flex flex-col h-full hover:shadow-warm-md transition-shadow">
      {/* Header */}
      <div className="p-5 pb-0">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-editorial font-bold text-charcoal text-lg leading-tight">{project.title}</h3>
          {project.status === 'completed' ? (
            <span className="badge-completed shrink-0">✓ Completed</span>
          ) : (
            <span className="badge-inprogress shrink-0 animate-pulse-soft">⚡ In Dev</span>
          )}
        </div>
        <p className="font-ui text-xs text-espresso font-medium mb-2">{t(project.subtitle)}</p>
        <p className="font-ui text-sm text-charcoal/65 leading-relaxed">{t(project.description)}</p>

        {/* Progress bar for in-progress projects */}
        {project.status === 'in-progress' && project.progressPercent !== undefined && (
          <div className="mt-3">
            <div className="flex justify-between items-center mb-1">
              <span className="font-mono text-xs text-amber-700">{copy.progress}</span>
              <span className="font-mono text-xs font-bold text-amber-700">{project.progressPercent}%</span>
            </div>
            <div className="w-full h-1.5 bg-amber-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-500 rounded-full transition-all"
                style={{ width: `${project.progressPercent}%` }}
                role="progressbar"
                aria-valuenow={project.progressPercent}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${project.progressPercent}% complete`}
              />
            </div>
            {project.progressLabel && (
              <p className="font-mono text-xs text-amber-600/80 mt-1 leading-snug">{t(project.progressLabel)}</p>
            )}
          </div>
        )}
      </div>

      {/* Tech stack pills */}
      <div className="px-5 py-3 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span key={tech} className="tech-pill">{tech}</span>
        ))}
      </div>

      {/* Footer actions */}
      <div className="mt-auto p-5 pt-3 flex gap-2 flex-wrap border-t border-espresso/8">
        <button
          onClick={onViewArchitecture}
          className="text-xs font-ui font-semibold px-3.5 py-2 rounded-lg bg-navy/8 text-navy border border-navy/15 hover:bg-navy/15 transition-colors"
        >
          {copy.viewArch}
        </button>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-ui font-semibold px-3.5 py-2 rounded-lg bg-cream border border-espresso/20 text-charcoal/70 hover:text-charcoal transition-colors"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </article>
  )
}

// ── Architecture Modal ─────────────────────────────────────────

function ArchitectureModal({
  project,
  onClose,
  locale,
  t,
  copy,
}: {
  project: Project
  onClose: () => void
  locale: 'en' | 'id'
  t: (text: { en: string; id: string }) => string
  copy: typeof ui['en']
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Architecture: ${project.title}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative bg-cream rounded-2xl shadow-warm-xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col">
        {/* Modal header */}
        <div className="flex items-start justify-between p-6 pb-4 border-b border-espresso/10">
          <div>
            <h2 className="font-editorial font-bold text-charcoal text-xl">{project.title}</h2>
            <p className="font-ui text-xs text-espresso mt-1">{t(project.subtitle)}</p>
          </div>
          <button
            onClick={onClose}
            aria-label={copy.close}
            className="p-2 rounded-lg hover:bg-espresso/10 transition-colors text-charcoal/50 hover:text-charcoal"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto p-6 flex flex-col gap-6">
          {/* Features */}
          <div>
            <h3 className="font-ui font-semibold text-sm text-charcoal/50 uppercase tracking-widest mb-3">
              {copy.features}
            </h3>
            <ul className="space-y-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex gap-2 text-sm font-ui text-charcoal/80">
                  <span className="text-navy font-bold shrink-0 mt-0.5">→</span>
                  {t(f)}
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture note */}
          <div className="bg-navy/5 rounded-xl p-4 border border-navy/10">
            <h3 className="font-ui font-semibold text-sm text-navy uppercase tracking-widest mb-2">
              {copy.architecture}
            </h3>
            <p className="font-ui text-sm text-charcoal/70 leading-relaxed">{t(project.architectureNote)}</p>
          </div>

          {/* DB Schema */}
          {project.databaseTables.length > 0 && (
            <div>
              <h3 className="font-ui font-semibold text-sm text-charcoal/50 uppercase tracking-widest mb-3">
                {copy.database}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.databaseTables.map((tbl) => (
                  <div key={tbl.name} className="bg-cream-dark rounded-xl p-3.5 border border-espresso/10">
                    <p className="font-mono text-xs font-bold text-espresso mb-1">{tbl.name}</p>
                    <p className="font-ui text-xs text-charcoal/60 leading-snug">{t(tbl.description)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GitHub link */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start text-xs font-ui font-semibold px-4 py-2.5 rounded-xl bg-navy text-cream hover:bg-navy/90 transition-colors"
            >
              {copy.viewGitHub} ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

// ── GitHub Repo Card ──────────────────────────────────────────

function RepoCard({ repo, starsLabel }: { repo: GitHubRepo; starsLabel: string }) {
  const updatedDate = new Date(repo.updated_at).toLocaleDateString('en-GB', {
    month: 'short',
    year: 'numeric',
  })

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-warm p-4 flex flex-col gap-2 hover:shadow-warm-md transition-shadow group"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="font-mono text-xs font-semibold text-navy truncate group-hover:underline">
          {/* Safe: repo.name is validated as string above */}
          {repo.name}
        </span>
        {repo.stargazers_count > 0 && (
          <span className="flex items-center gap-1 text-xs font-mono text-espresso/60 shrink-0">
            ★ {repo.stargazers_count}
          </span>
        )}
      </div>
      {repo.description && (
        <p className="font-ui text-xs text-charcoal/55 leading-snug line-clamp-2">
          {/* Plain text only — validated above, no dangerouslySetInnerHTML */}
          {repo.description}
        </p>
      )}
      <div className="flex items-center justify-between mt-auto pt-1">
        {repo.language && (
          <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-espresso/8 text-espresso/80">
            {repo.language}
          </span>
        )}
        <span className="font-mono text-xs text-charcoal/35 ml-auto">{updatedDate}</span>
      </div>
    </a>
  )
}

// ── Icons ─────────────────────────────────────────────────────

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  )
}

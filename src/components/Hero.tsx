'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

// ── Email obfuscation (Anti-Scraping) ────────────────────────
const EMAIL_PERSONAL = ['ryan070497', 'gmail.com'] as const
const EMAIL_ACADEMIC = ['ryansurya_2529250015', 'mhs.mdp.ac.id'] as const

// ── Animation config ─────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
})

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: EASE, delay },
})

const ui = {
  en: {
    badge: 'S1 Informatics Student · Semester 3 @ UMDP',
    headline: 'Building practical web systems, mobile apps, and leading tech communities.',
    sub: "A communicative Full-Stack & AI Builder — merging software engineering expertise with real organizational leadership, peer teaching, and a business-first mindset.",
    cta1: 'Explore Projects',
    cta2: 'Contact Me',
    stat2: 'Vice Chair @ UKM Programming',
    imgAlt: 'Ryan Surya — Full-Stack Developer',
  },
  id: {
    badge: 'Mahasiswa S1 Informatika · Semester 3 @ UMDP',
    headline: 'Membangun sistem web praktis, aplikasi mobile, dan memimpin komunitas teknologi.',
    sub: 'Full-Stack & AI Builder yang komunikatif — memadukan keahlian rekayasa perangkat lunak dengan kepemimpinan organisasi nyata, pengajaran sebaya, dan pola pikir bisnis.',
    cta1: 'Lihat Proyek',
    cta2: 'Hubungi Saya',
    stat2: 'Wakil Ketua @ UKM Programming',
    imgAlt: 'Ryan Surya — Full-Stack Developer',
  },
}

export default function Hero() {
  const { locale } = useLanguage()
  const copy = ui[locale]
  const [imgError, setImgError] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 section-spacing overflow-hidden"
      aria-label="Hero — Introduction"
    >
      {/* ── Ambient background ───────────────────────────────── */}
      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(92,64,51,0.055) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
        aria-hidden="true"
      />
      {/* Hero radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #EAE2D3 0%, #F7F3EB 70%)' }}
        aria-hidden="true"
      />
      {/* Warm orb 1 */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(234,226,211,0.55) 0%, transparent 70%)' }}
        animate={{ x: [0, 18, 0], y: [0, 12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      {/* Navy orb 2 */}
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(27,54,93,0.06) 0%, transparent 70%)' }}
        animate={{ x: [0, -14, 0], y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        aria-hidden="true"
      />

      <div className="section-container w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left column ──────────────────────────────── */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Status badge */}
            <motion.div {...fadeUp(0.05)} className="inline-flex items-center w-fit gap-2 px-3.5 py-1.5 rounded-full bg-navy/8 border border-navy/20 text-navy text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-soft" aria-hidden="true" />
              {copy.badge}
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.15)}
              className="text-4xl md:text-5xl lg:text-[3.2rem] font-editorial font-bold text-charcoal leading-tight text-balance"
            >
              {copy.headline}
            </motion.h1>

            {/* Sub-headline */}
            <motion.p {...fadeUp(0.25)} className="text-base md:text-lg text-charcoal/65 font-ui leading-relaxed max-w-lg">
              {copy.sub}
            </motion.p>

            {/* CTA row */}
            <motion.div {...fadeUp(0.35)} className="flex flex-wrap gap-3 mt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy text-cream font-ui font-semibold text-sm hover:bg-navy/90 transition-colors shadow-warm-md"
              >
                {copy.cta1}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-espresso text-espresso font-ui font-semibold text-sm hover:bg-espresso/8 transition-colors"
              >
                {copy.cta2}
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeIn(0.45)} className="flex items-center gap-3 mt-2">
              <SocialLink href="https://github.com/kyann333" label="GitHub" icon={<GitHubIcon />} />
              <SocialLink href="https://www.kaggle.com/ryansurya" label="Kaggle" icon={<KaggleIcon />} />
              <SocialLink href="https://instagram.com/ryannsurya" label="Instagram" icon={<InstagramIcon />} />
              {mounted && (
                <a
                  href={`mailto:${EMAIL_PERSONAL[0]}@${EMAIL_PERSONAL[1]}`}
                  aria-label="Send email"
                  className="p-2.5 rounded-full border border-espresso/20 text-espresso/70 hover:text-espresso hover:border-espresso/40 hover:bg-espresso/5 transition-all"
                >
                  <MailIcon className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          </div>

          {/* ── Right column — Profile photo ─────────────── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            >
              {/* Decorative background rings */}
              <div className="absolute inset-0 rounded-3xl bg-espresso/6 scale-105 -rotate-2" aria-hidden="true" />
              <div className="absolute inset-0 rounded-3xl bg-navy/4 scale-110 rotate-1" aria-hidden="true" />

              {/* Profile frame */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-2 border-espresso shadow-warm-xl">
                <div className="absolute inset-1 rounded-2xl overflow-hidden border border-navy/30 z-10 pointer-events-none" aria-hidden="true" />

                {imgError ? (
                  <div className="w-full h-full bg-cream-dark flex items-center justify-center">
                    <span className="font-editorial text-7xl font-bold text-espresso/40 select-none">RS</span>
                  </div>
                ) : (
                  <Image
                    src="/images/profile-ryan-sitting.jpg"
                    alt={copy.imgAlt}
                    fill
                    className="object-cover object-center"
                    priority
                    onError={() => setImgError(true)}
                  />
                )}
              </div>

              {/* ── Floating stat pills — DESKTOP: anchored to corners, no overlap ── */}
              {/* Vice Chair — top right, above photo */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
                className="hidden sm:block absolute -top-4 -right-4 md:-right-6"
              >
                <StatPill label={copy.stat2} icon="🏛️" className="shadow-warm-md text-xs" />
              </motion.div>

            </motion.div>

            {/* ── MOBILE: pills stacked in a row below photo ──────── */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex sm:hidden flex-wrap justify-center gap-2 mt-4 absolute"
              style={{ top: 'calc(100% + 1rem)', left: 0, right: 0 }}
            >
              <StatPill label={copy.stat2} icon="🏛️" className="text-xs" />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          {...fadeIn(0.9)}
          className="hidden lg:flex justify-center mt-16 opacity-40"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-1 animate-bounce">
            <span className="font-mono text-[10px] text-espresso tracking-widest uppercase">scroll</span>
            <ChevronDown className="w-4 h-4 text-espresso" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ── Sub-components ────────────────────────────────────────────

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2.5 rounded-full border border-espresso/20 text-espresso/70 hover:text-espresso hover:border-espresso/40 hover:bg-espresso/5 transition-all"
    >
      <span className="w-4 h-4 block" aria-hidden="true">{icon}</span>
    </a>
  )
}

function StatPill({ label, className, icon }: { label: string; className?: string; icon?: string }) {
  return (
    <div
      className={`bg-cream border border-espresso/20 rounded-full px-3.5 py-2 flex items-center gap-1.5 text-xs font-ui font-medium text-charcoal whitespace-nowrap ${className ?? ''}`}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      {label}
    </div>
  )
}

// ── Minimal SVG icons ─────────────────────────────────────────

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
    </svg>
  )
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
      <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function KaggleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.336z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const navItems = [
  { href: '#about',      en: 'About',      id: 'Tentang' },
  { href: '#projects',   en: 'Projects',   id: 'Proyek' },
  { href: '#experience', en: 'Experience', id: 'Pengalaman' },
  // { href: '#certificates', en: 'Certificates', id: 'Sertifikat' },
  { href: '#contact',    en: 'Contact',    id: 'Kontak' },
]

const EASE = [0.22, 1, 0.36, 1] as const

export default function Navbar() {
  const { locale, toggleLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHref, setActiveHref] = useState<string | null>(null)
  const hoverRef = useRef<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMobileNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-warm-sm border-b border-espresso/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16">
        {/* Logo monogram */}
        <a
          href="#hero"
          className="font-editorial text-xl font-bold text-navy tracking-tight hover:text-espresso transition-colors"
          aria-label="Ryan Surya — back to top"
        >
          RS<span className="text-espresso">.</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href} className="relative">
              <a
                href={item.href}
                onMouseEnter={() => { hoverRef.current = item.href; setActiveHref(item.href) }}
                onMouseLeave={() => { hoverRef.current = null; setActiveHref(null) }}
                className="relative z-10 px-3 py-1.5 text-sm font-ui font-medium text-charcoal/70 hover:text-navy transition-colors block"
              >
                {activeHref === item.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-navy/8"
                    transition={{ duration: 0.25, ease: EASE }}
                  />
                )}
                <span className="relative">{locale === 'en' ? item.en : item.id}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Language toggle with sliding pill */}
          <button
            onClick={toggleLanguage}
            aria-label={`Switch to ${locale === 'en' ? 'Indonesian' : 'English'}`}
            className="hidden md:flex items-center gap-0 text-xs font-mono font-semibold px-1.5 py-1 rounded-full border border-espresso/30 text-espresso hover:border-espresso/50 transition-colors overflow-hidden relative"
          >
            <span className="relative z-10 px-2.5 py-0.5">
              {locale === 'en' && (
                <motion.span
                  layoutId="lang-pill"
                  className="absolute inset-0 rounded-full bg-navy/15"
                  transition={{ duration: 0.3, ease: EASE }}
                />
              )}
              <span className={`relative ${locale === 'en' ? 'text-navy font-bold' : 'opacity-45'}`}>EN</span>
            </span>
            <span className="opacity-25 text-[10px]">|</span>
            <span className="relative z-10 px-2.5 py-0.5">
              {locale === 'id' && (
                <motion.span
                  layoutId="lang-pill"
                  className="absolute inset-0 rounded-full bg-navy/15"
                  transition={{ duration: 0.3, ease: EASE }}
                />
              )}
              <span className={`relative ${locale === 'id' ? 'text-navy font-bold' : 'opacity-45'}`}>ID</span>
            </span>
          </button>

          {/* GitHub CTA */}
          <a
            href="https://github.com/kyann333"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-ui font-semibold px-3.5 py-2 rounded-full bg-navy text-cream hover:bg-navy/90 transition-colors"
          >
            <GitHubIcon className="w-3.5 h-3.5" />
            GitHub
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-espresso/10 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            <span className="block w-5 h-0.5 bg-charcoal mb-1 transition-transform duration-200" />
            <span className="block w-5 h-0.5 bg-charcoal mb-1" />
            <span className="block w-5 h-0.5 bg-charcoal transition-transform duration-200" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="md:hidden bg-cream/95 backdrop-blur-md border-b border-espresso/10 shadow-warm-md"
          >
            <ul className="section-container py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleMobileNav(item.href)}
                    className="w-full text-left text-sm font-ui font-medium text-charcoal/80 hover:text-navy py-2 border-b border-espresso/10 last:border-0 transition-colors"
                  >
                    {locale === 'en' ? item.en : item.id}
                  </button>
                </li>
              ))}
              <li className="flex items-center justify-between pt-2">
                <button
                  onClick={toggleLanguage}
                  className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full border border-espresso/30 text-espresso"
                >
                  {locale === 'en' ? 'EN | ID' : 'ID | EN'}
                </button>
                <a
                  href="https://github.com/kyann333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-ui font-semibold px-3.5 py-2 rounded-full bg-navy text-cream"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

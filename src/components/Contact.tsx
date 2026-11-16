'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

// ── LAYER 5: Anti-Scraping Email Obfuscation ──────────────────
const EMAIL_PARTS = {
  personal: { user: 'ryan070497', domain: 'gmail.com' },
  academic: { user: 'ryansurya_2529250015', domain: 'mhs.mdp.ac.id' },
} as const

function assembleEmail(which: keyof typeof EMAIL_PARTS): string {
  const { user, domain } = EMAIL_PARTS[which]
  return `${user}@${domain}`
}

const EASE = [0.22, 1, 0.36, 1] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: EASE, delay },
})

const ui = {
  en: {
    sectionLabel: 'Contact',
    headline: 'Get in Touch',
    sub: "Based in Palembang — available remotely. If you have a project, an idea, or just want to connect, feel free to reach out via email.",
    copyPersonal: 'Copy Personal Email',
    copyAcademic: 'Copy Academic Email',
    copied: 'Email copied!',
    sendMessage: 'Send a Message',
    namePlaceholder: 'Your name',
    subjectPlaceholder: 'Subject',
    messagePlaceholder: 'Your message…',
    sendBtn: 'Open Email Client',
    location: 'Palembang, Indonesia',
    availability: 'Open to collaboration',
    nameLabel: 'Name',
    subjectLabel: 'Subject',
    messageLabel: 'Message',
  },
  id: {
    sectionLabel: 'Kontak',
    headline: 'Hubungi Saya',
    sub: 'Berdomisili di Palembang — tersedia secara remote. Kalau punya proyek, ide, atau sekadar ingin berkenalan, jangan ragu untuk menghubungi lewat email.',
    copyPersonal: 'Salin Email Pribadi',
    copyAcademic: 'Salin Email Akademik',
    copied: 'Email disalin!',
    sendMessage: 'Kirim Pesan',
    namePlaceholder: 'Nama Anda',
    subjectPlaceholder: 'Subjek',
    messagePlaceholder: 'Pesan Anda…',
    sendBtn: 'Buka Klien Email',
    location: 'Palembang, Indonesia',
    availability: 'Terbuka untuk kolaborasi',
    nameLabel: 'Nama',
    subjectLabel: 'Subjek',
    messageLabel: 'Pesan',
  },
}

export default function Contact() {
  const { locale } = useLanguage()
  const copy = ui[locale]
  const [toast, setToast] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const showToast = (msg: string) => {
    setToast(msg)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 2500)
  }

  const handleCopyEmail = async (which: keyof typeof EMAIL_PARTS) => {
    if (!mounted) return
    const email = assembleEmail(which)
    try {
      await navigator.clipboard.writeText(email)
      showToast(copy.copied)
    } catch {
      const el = document.createElement('textarea')
      el.value = email
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      showToast(copy.copied)
    }
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!mounted) return
    const safeSubject = encodeURIComponent(subject.trim().slice(0, 200))
    const safeBody = encodeURIComponent(
      `From: ${name.trim().slice(0, 100)}\n\n${message.trim().slice(0, 2000)}`
    )
    const email = assembleEmail('personal')
    window.location.href = `mailto:${email}?subject=${safeSubject}&body=${safeBody}`
  }

  return (
    <section id="contact" className="section-spacing hairline" aria-labelledby="contact-heading">
      <div className="section-container">

        {/* Info card — Deep Navy background */}
        <motion.div {...fadeUp(0)} className="rounded-2xl bg-navy p-8 md:p-12 mb-12">
          <p className="font-mono text-xs text-cream/50 tracking-widest uppercase mb-3">
            {copy.sectionLabel}
          </p>
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-editorial font-bold text-cream mb-4">
            {copy.headline}
          </h2>
          <p className="text-cream/70 font-ui text-base leading-relaxed max-w-xl mb-8">
            {copy.sub}
          </p>

          {/* Location & availability */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="flex items-center gap-1.5 text-xs font-mono text-cream/60 px-3 py-1.5 rounded-full border border-cream/15">
              <LocationIcon className="w-3.5 h-3.5" aria-hidden="true" />
              {copy.location}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-300 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" aria-hidden="true" />
              {copy.availability}
            </span>
          </div>

          {/* One-click copy email buttons — rendered only client-side */}
          <div className="flex flex-wrap gap-3">
            {mounted && (
              <>
                <button
                  onClick={() => handleCopyEmail('personal')}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cream text-charcoal text-xs font-ui font-semibold hover:bg-cream-dark transition-colors"
                  aria-live="polite"
                >
                  <CopyIcon className="w-4 h-4 text-espresso" aria-hidden="true" />
                  {copy.copyPersonal}
                </button>
                <button
                  onClick={() => handleCopyEmail('academic')}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cream/15 text-cream text-xs font-ui font-semibold border border-cream/20 hover:bg-cream/25 transition-colors"
                  aria-live="polite"
                >
                  <CopyIcon className="w-4 h-4" aria-hidden="true" />
                  {copy.copyAcademic}
                </button>
              </>
            )}
          </div>
        </motion.div>

        {/* Contact form — mailto: based, no backend */}
        <motion.div {...fadeUp(0.1)} className="max-w-xl mx-auto">
          <h3 className="font-editorial font-semibold text-charcoal text-xl mb-6">{copy.sendMessage}</h3>
          <form onSubmit={handleSendMessage} className="flex flex-col gap-4" noValidate>
            <div>
              <label htmlFor="contact-name" className="font-ui text-xs font-semibold text-charcoal/60 uppercase tracking-widest block mb-1.5">
                {copy.nameLabel}
              </label>
              <input
                id="contact-name"
                type="text"
                required
                maxLength={100}
                placeholder={copy.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-espresso/20 bg-cream-dark/50 font-ui text-sm text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:border-navy/40 focus:ring-1 focus:ring-navy/20 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-subject" className="font-ui text-xs font-semibold text-charcoal/60 uppercase tracking-widest block mb-1.5">
                {copy.subjectLabel}
              </label>
              <input
                id="contact-subject"
                type="text"
                required
                maxLength={200}
                placeholder={copy.subjectPlaceholder}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-espresso/20 bg-cream-dark/50 font-ui text-sm text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:border-navy/40 focus:ring-1 focus:ring-navy/20 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="font-ui text-xs font-semibold text-charcoal/60 uppercase tracking-widest block mb-1.5">
                {copy.messageLabel}
              </label>
              <textarea
                id="contact-message"
                required
                maxLength={2000}
                rows={5}
                placeholder={copy.messagePlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-espresso/20 bg-cream-dark/50 font-ui text-sm text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:border-navy/40 focus:ring-1 focus:ring-navy/20 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={!mounted}
              className="w-full py-3.5 rounded-xl bg-navy text-cream font-ui font-semibold text-sm hover:bg-navy/90 transition-colors disabled:opacity-50"
            >
              {copy.sendBtn}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Toast notification */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-charcoal text-cream text-xs font-ui font-semibold shadow-warm-xl animate-slide-up"
        >
          ✓ {toast}
        </div>
      )}
    </section>
  )
}

// ── Icons ─────────────────────────────────────────────────────

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
      <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
    </svg>
  )
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 15.995 17 13.34 17 10a7 7 0 10-14 0c0 3.34 1.698 5.995 3.354 7.585.83.8 1.654 1.38 2.274 1.766.311.192.57.336.757.432a5.736 5.736 0 00.281.14l.018.008.006.003zM10 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clipRule="evenodd" />
    </svg>
  )
}

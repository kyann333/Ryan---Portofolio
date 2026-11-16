'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { certificates, certificateCategories } from '@/data/certificates'
import { testimonials } from '@/data/testimonials'
import type { CertificateCategory } from '@/types/portfolio'

const ui = {
  en: {
    certLabel: 'Certificates',
    certHeadline: 'Credentials & Achievements',
    all: 'All',
    noImage: 'Preview not available',
    close: 'Close',
    viewCred: 'Verify Credential',
    socialLabel: 'Social Proof',
    socialHeadline: 'What People Say',
    issued: 'Issued',
  },
  id: {
    certLabel: 'Sertifikat',
    certHeadline: 'Kredensial & Pencapaian',
    all: 'Semua',
    noImage: 'Pratinjau tidak tersedia',
    close: 'Tutup',
    viewCred: 'Verifikasi Kredensial',
    socialLabel: 'Bukti Sosial',
    socialHeadline: 'Kata Mereka',
    issued: 'Diterbitkan',
  },
}

export default function Certificates() {
  const { locale, t } = useLanguage()
  const copy = ui[locale]
  const [activeCategory, setActiveCategory] = useState<CertificateCategory | 'All'>('All')
  const [lightboxCert, setLightboxCert] = useState<(typeof certificates)[number] | null>(null)

  const filtered =
    activeCategory === 'All'
      ? certificates
      : certificates.filter((c) => c.category === activeCategory)

  // Close lightbox on Escape
  useEffect(() => {
    if (!lightboxCert) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightboxCert(null) }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [lightboxCert])

  return (
    <>
      <section id="certificates" className="section-spacing bg-cream-dark/40 hairline" aria-labelledby="certificates-heading">
        <div className="section-container">
          <p className="font-mono text-xs text-espresso tracking-widest uppercase mb-3">
            {copy.certLabel}
          </p>
          <h2 id="certificates-heading" className="text-3xl md:text-4xl font-editorial font-bold text-charcoal mb-8">
            {copy.certHeadline}
          </h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter certificates by category">
            {certificateCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as CertificateCategory | 'All')}
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
                  : cat === 'Programming & Tech'
                  ? 'Pemrograman & Teknologi'
                  : cat === 'Leadership & Organization'
                  ? 'Kepemimpinan & Organisasi'
                  : 'Kompetisi'}
              </button>
            ))}
          </div>

          {/* Certificates grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((cert) => (
              <button
                key={cert.id}
                onClick={() => setLightboxCert(cert)}
                className="card-warm p-5 text-left hover:shadow-warm-md transition-shadow group focus:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                aria-label={`View certificate: ${t(cert.title)}`}
              >
                {/* Certificate thumbnail */}
                <div className="relative w-full h-32 bg-cream-dark rounded-xl overflow-hidden mb-4 border border-espresso/10 flex items-center justify-center">
                  {cert.imageUrl ? (
                    <Image
                      src={cert.imageUrl}
                      alt={t(cert.title)}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-1">
                      <CertificateIcon className="w-8 h-8 text-espresso/30" />
                      <span className="font-mono text-xs text-charcoal/30">{copy.noImage}</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div>
                  <span className={`inline-block text-xs font-mono font-semibold px-2 py-0.5 rounded-full mb-2 ${
                    cert.category === 'Programming & Tech'
                      ? 'bg-navy/8 text-navy border border-navy/15'
                      : cert.category === 'Leadership & Organization'
                      ? 'bg-espresso/8 text-espresso border border-espresso/15'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {locale === 'en' ? cert.category : cert.category === 'Programming & Tech' ? 'Pemrograman & Teknologi' : cert.category === 'Leadership & Organization' ? 'Kepemimpinan & Organisasi' : 'Kompetisi'}
                  </span>
                  <h3 className="font-editorial font-semibold text-charcoal text-sm leading-snug mb-1 group-hover:text-navy transition-colors">
                    {t(cert.title)}
                  </h3>
                  <p className="font-ui text-xs text-charcoal/50">{cert.issuer}</p>
                  <p className="font-mono text-xs text-espresso/60 mt-0.5">
                    {copy.issued}: {cert.date}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social Proof ──────────────────────────────────────── */}
      {testimonials.length > 0 && (
        <section className="section-spacing hairline" aria-labelledby="social-heading">
          <div className="section-container">
            <p className="font-mono text-xs text-espresso tracking-widest uppercase mb-3">
              {copy.socialLabel}
            </p>
            <h2 id="social-heading" className="text-3xl md:text-4xl font-editorial font-bold text-charcoal mb-8">
              {copy.socialHeadline}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {testimonials.map((t_) => (
                <blockquote
                  key={t_.id}
                  className="card-warm p-6 flex flex-col gap-4"
                >
                  {/* Quote */}
                  <p className="font-editorial text-charcoal/80 text-base leading-relaxed italic before:content-['\u201C'] after:content-['\u201D'] before:text-espresso after:text-espresso before:mr-0.5 after:ml-0.5">
                    {locale === 'en' ? t_.quote_en : t_.quote_id}
                  </p>
                  {/* Attribution */}
                  <footer className="flex items-center gap-3 mt-auto pt-4 border-t border-espresso/8">
                    {/* Avatar or initials */}
                    <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center shrink-0 overflow-hidden">
                      {t_.avatarUrl ? (
                        <Image src={t_.avatarUrl} alt={t_.name} width={40} height={40} className="object-cover w-full h-full" />
                      ) : (
                        <span className="font-editorial font-bold text-navy text-sm" aria-hidden="true">
                          {t_.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-ui font-semibold text-sm text-charcoal">{t_.name}</p>
                      <p className="font-ui text-xs text-charcoal/50">{t_.role} · {t_.organization}</p>
                    </div>
                    <span className="ml-auto font-mono text-xs px-2 py-0.5 rounded-full bg-espresso/8 text-espresso border border-espresso/15">
                      {t_.relationTag}
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Lightbox Modal ────────────────────────────────────── */}
      {lightboxCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Certificate: ${t(lightboxCert.title)}`}
        >
          <div
            className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm"
            onClick={() => setLightboxCert(null)}
            aria-hidden="true"
          />
          <div className="relative bg-cream rounded-2xl shadow-warm-xl w-full max-w-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-start justify-between p-5 border-b border-espresso/10">
              <div>
                <h2 className="font-editorial font-bold text-charcoal text-base">{t(lightboxCert.title)}</h2>
                <p className="font-ui text-xs text-charcoal/50 mt-0.5">{lightboxCert.issuer} · {lightboxCert.date}</p>
              </div>
              <button
                onClick={() => setLightboxCert(null)}
                className="p-2 rounded-lg hover:bg-espresso/10 transition-colors text-charcoal/50"
                aria-label={copy.close}
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Image */}
            <div className="relative w-full aspect-[4/3] bg-cream-dark flex items-center justify-center">
              {lightboxCert.imageUrl ? (
                <Image
                  src={lightboxCert.imageUrl}
                  alt={t(lightboxCert.title)}
                  fill
                  className="object-contain p-4"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 p-10">
                  <CertificateIcon className="w-16 h-16 text-espresso/20" />
                  <p className="font-ui text-sm text-charcoal/40">{copy.noImage}</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-5 flex items-center justify-between gap-3">
              {lightboxCert.description && (
                <p className="font-ui text-xs text-charcoal/60 leading-relaxed flex-1">
                  {t(lightboxCert.description)}
                </p>
              )}
              {lightboxCert.credentialUrl && (
                <a
                  href={lightboxCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs font-ui font-semibold px-4 py-2.5 rounded-xl bg-navy text-cream hover:bg-navy/90 transition-colors"
                >
                  {copy.viewCred} ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// ── Icons ─────────────────────────────────────────────────────

function CertificateIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  )
}

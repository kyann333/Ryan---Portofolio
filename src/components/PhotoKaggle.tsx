'use client'

import { useLanguage } from '@/context/LanguageContext'

const ui = {
  en: {
    sectionLabel: 'More About Me',
    headline: 'Beyond the Code',
    photoTitle: 'Photography',
    photoDesc: 'Visual storytelling is a core part of how I think. Photography trains my eye for composition, light, and narrative — skills that translate directly into designing clean, purposeful interfaces.',
    kaggleTitle: 'Data Exploration on Kaggle',
    kaggleDesc: "Curious about patterns in data, I explore public datasets on Kaggle under the handle @ryansurya. It's how I practice Python-based analysis and develop a data-informed mindset alongside my web & mobile work.",
    visitKaggle: 'Visit Kaggle Profile',
    instagramLink: 'View Photography Work',
  },
  id: {
    sectionLabel: 'Lebih Tentang Saya',
    headline: 'Di Balik Kode',
    photoTitle: 'Fotografi',
    photoDesc: 'Penceritaan visual adalah bagian inti dari cara saya berpikir. Fotografi melatih mata saya untuk komposisi, cahaya, dan narasi — keterampilan yang langsung dapat diterapkan dalam merancang antarmuka yang bersih dan bertujuan.',
    kaggleTitle: 'Eksplorasi Data di Kaggle',
    kaggleDesc: 'Penasaran dengan pola dalam data, saya mengeksplorasi dataset publik di Kaggle dengan username @ryansurya. Ini adalah cara saya mempraktikkan analisis berbasis Python dan mengembangkan pola pikir berbasis data di samping pekerjaan web & mobile.',
    visitKaggle: 'Kunjungi Profil Kaggle',
    instagramLink: 'Lihat Karya Fotografi',
  },
}

// Photography "contact sheet" placeholder frames
const PHOTO_FRAMES = ['#1', '#2', '#3', '#4', '#5', '#6']

export default function PhotoKaggle() {
  const { locale } = useLanguage()
  const copy = ui[locale]

  return (
    <section className="section-spacing bg-cream-dark/40 hairline" aria-labelledby="extras-heading">
      <div className="section-container">
        <p className="font-mono text-xs text-espresso tracking-widest uppercase mb-3">
          {copy.sectionLabel}
        </p>
        <h2 id="extras-heading" className="text-3xl md:text-4xl font-editorial font-bold text-charcoal mb-10">
          {copy.headline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Photography card */}
          <div className="card-warm p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-xl bg-espresso/10 flex items-center justify-center text-espresso" aria-hidden="true">
                <CameraIcon className="w-5 h-5" />
              </span>
              <h3 className="font-editorial font-semibold text-charcoal text-lg">{copy.photoTitle}</h3>
            </div>

            {/* Contact sheet grid */}
            <div
              className="grid grid-cols-3 gap-1.5 mb-4"
              role="img"
              aria-label="Photography contact sheet — placeholder frames"
            >
              {PHOTO_FRAMES.map((f) => (
                <div
                  key={f}
                  className="aspect-square bg-cream-dark rounded-lg border border-espresso/10 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="font-mono text-xs text-espresso/20">{f}</span>
                </div>
              ))}
            </div>

            <p className="font-ui text-sm text-charcoal/65 leading-relaxed mb-4">{copy.photoDesc}</p>

            <a
              href="https://instagram.com/ryannsurya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-ui font-semibold text-espresso hover:text-espresso/80 underline underline-offset-4 decoration-espresso/40 transition-colors"
            >
              {copy.instagramLink} ↗
            </a>
          </div>

          {/* Kaggle card */}
          <div className="card-warm p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-xl bg-navy/10 flex items-center justify-center text-navy" aria-hidden="true">
                <DataIcon className="w-5 h-5" />
              </span>
              <h3 className="font-editorial font-semibold text-charcoal text-lg">{copy.kaggleTitle}</h3>
            </div>

            {/* Stats strip */}
            <div className="bg-navy/5 rounded-xl p-3 mb-4 flex items-center gap-3 border border-navy/10">
              <span className="font-mono text-xs text-navy font-bold">@ryansurya</span>
              <span className="w-px h-4 bg-navy/15" aria-hidden="true" />
              <span className="font-mono text-xs text-charcoal/50">Kaggle</span>
              <span className="ml-auto text-xs font-ui text-charcoal/40">Data Explorer</span>
            </div>

            <p className="font-ui text-sm text-charcoal/65 leading-relaxed mb-4">{copy.kaggleDesc}</p>

            <a
              href="https://www.kaggle.com/ryansurya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-ui font-semibold text-navy hover:text-navy/80 underline underline-offset-4 decoration-navy/40 transition-colors"
            >
              {copy.visitKaggle} ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Icons ─────────────────────────────────────────────────────

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M1 8a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 018.07 3h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0016.07 6H17a2 2 0 012 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2V8zm13.5 3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM10 14a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  )
}

function DataIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
    </svg>
  )
}

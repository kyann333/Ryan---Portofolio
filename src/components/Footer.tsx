'use client'

import { useLanguage } from '@/context/LanguageContext'

const ui = {
  en: {
    built: 'Built with Next.js, TypeScript & Tailwind CSS',
    rights: '© 2025 Ryan Surya. All rights reserved.',
    location: 'Palembang, Indonesia',
    nav: ['About', 'Projects', 'Experience', 'Certificates', 'Contact'],
    navHrefs: ['#about', '#projects', '#experience', '#certificates', '#contact'],
    social: 'Social & Code',
  },
  id: {
    built: 'Dibangun dengan Next.js, TypeScript & Tailwind CSS',
    rights: '© 2025 Ryan Surya. Hak cipta dilindungi.',
    location: 'Palembang, Indonesia',
    nav: ['Tentang', 'Proyek', 'Pengalaman', 'Sertifikat', 'Kontak'],
    navHrefs: ['#about', '#projects', '#experience', '#certificates', '#contact'],
    social: 'Sosial & Kode',
  },
}

export default function Footer() {
  const { locale } = useLanguage()
  const copy = ui[locale]

  return (
    <footer className="bg-charcoal text-cream/70" role="contentinfo">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a
              href="#hero"
              className="font-editorial text-2xl font-bold text-cream hover:text-cream/80 transition-colors"
              aria-label="Ryan Surya — back to top"
            >
              RS<span className="text-espresso-light">.</span>
            </a>
            <p className="mt-2 font-ui text-sm text-cream/50 leading-relaxed max-w-xs">
              Full-Stack & AI Builder · S1 Informatics @ UMDP · Palembang
            </p>
            <p className="font-mono text-xs text-cream/30 mt-1">{copy.location}</p>
          </div>

          {/* Quick nav */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-cream/40 mb-3">Navigation</p>
            <ul className="space-y-2">
              {copy.nav.map((label, i) => (
                <li key={label}>
                  <a
                    href={copy.navHrefs[i]}
                    className="font-ui text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-cream/40 mb-3">{copy.social}</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/kyann333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ui text-sm text-cream/60 hover:text-cream transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-espresso-light" aria-hidden="true" />
                  GitHub — @kyann333
                </a>
              </li>
              <li>
                <a
                  href="https://www.kaggle.com/ryansurya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ui text-sm text-cream/60 hover:text-cream transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-espresso-light" aria-hidden="true" />
                  Kaggle — @ryansurya
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/ryannsurya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ui text-sm text-cream/60 hover:text-cream transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-espresso-light" aria-hidden="true" />
                  Instagram — @ryannsurya
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hairline pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-ui text-xs text-cream/30">{copy.rights}</p>
          <p className="font-mono text-xs text-cream/25">{copy.built}</p>
        </div>
      </div>
    </footer>
  )
}

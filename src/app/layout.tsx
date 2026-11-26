import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

// ── Font variables are defined in globals.css to avoid inline-style hydration issues. ──

// ── SEO Metadata ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Ryan Surya — Full-Stack & AI Builder | Portfolio',
  description:
    'Portfolio of Ryan Surya — S1 Informatics student at UMDP, Full-Stack Web & Mobile Developer (Laravel, Flutter, MySQL), and Vice Chair UKM Programming. Building practical web systems, mobile apps, and leading tech communities.',
  keywords: [
    'Ryan Surya',
    'Full-Stack Developer',
    'Laravel Developer',
    'Flutter Developer',
    'Palembang',
    'UMDP',
    'Universitas Multi Data Palembang',
    'Web Developer Indonesia',
    'Mobile Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Ryan Surya' }],
  creator: 'Ryan Surya',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ryan-surya-portfolio.vercel.app',
    title: 'Ryan Surya — Full-Stack & AI Builder',
    description:
      'Full-Stack Web & Mobile Developer • Laravel • Flutter • MySQL • Vice Chair UKM Programming @ UMDP Palembang',
    siteName: 'Ryan Surya Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryan Surya — Full-Stack & AI Builder',
    description:
      'Full-Stack Web & Mobile Developer • Laravel • Flutter • MySQL • Vice Chair UKM Programming @ UMDP',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // NOTE: NO phone, full address, or date of birth is ever included here.
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Lora (editorial headings) + Plus Jakarta Sans (UI text) + JetBrains Mono (code/tech) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}

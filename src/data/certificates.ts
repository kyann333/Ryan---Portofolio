// ============================================================
// src/data/certificates.ts
// Certificate & achievement entries for the Certificates section.
// ─────────────────────────────────────────────────────────────
// HOW TO ADD A NEW CERTIFICATE:
//   1. Copy any existing object below.
//   2. Assign a unique `id` string (kebab-case, e.g. "cert-web-dev-2025").
//   3. Set `category`: 'Programming & Tech' | 'Leadership & Organization' | 'Competition'
//   4. Place the certificate image in /public/certificates/ and set `imageUrl`.
//   5. Set `credentialUrl` if there is a verifiable online link.
//   6. Fill all bilingual fields (en / id) for `title` and `description`.
// ============================================================

import type { Certificate } from '@/types/portfolio'

export const certificates: Certificate[] = [
  // ── Example Entry 1 ─────────────────────────────────────
  // Replace this with your first real certificate.
  {
    id: 'cert-laravel-basics-2024',
    title: {
      en: 'Laravel Framework Fundamentals',
      id: 'Dasar-Dasar Framework Laravel',
    },
    issuer: 'Dicoding / Udemy',
    date: '2024-08',
    category: 'Programming & Tech',
    // Place file at: /public/certificates/cert-laravel-basics-2024.jpg
    imageUrl: '/certificates/cert-laravel-basics-2024.jpg',
    credentialUrl: undefined,
    description: {
      en: 'Completed comprehensive training on Laravel MVC architecture, Eloquent ORM, routing, and authentication.',
      id: 'Menyelesaikan pelatihan komprehensif tentang arsitektur Laravel MVC, Eloquent ORM, routing, dan autentikasi.',
    },
  },

  // ── Example Entry 2 ─────────────────────────────────────
  // Replace this with your second real certificate.
  {
    id: 'cert-leadership-ukm-2026',
    title: {
      en: 'Vice Chair Certificate — UKM Programming',
      id: 'Sertifikat Wakil Ketua — UKM Programming',
    },
    issuer: 'Universitas Multi Data Palembang',
    date: '2026-03',
    category: 'Leadership & Organization',
    // Place file at: /public/certificates/cert-leadership-ukm-2026.jpg
    imageUrl: '/certificates/cert-leadership-ukm-2026.jpg',
    credentialUrl: undefined,
    description: {
      en: 'Official recognition as Vice Chair of the UKM Programming student organization at UMDP.',
      id: 'Pengakuan resmi sebagai Wakil Ketua UKM Programming di Universitas Multi Data Palembang.',
    },
  },

  // ── Template for future entries ─────────────────────────
  // {
  //   id: 'cert-YOUR-ID-HERE',
  //   title: {
  //     en: 'Certificate Title in English',
  //     id: 'Judul Sertifikat dalam Bahasa Indonesia',
  //   },
  //   issuer: 'Issuing Organization Name',
  //   date: 'YYYY-MM',
  //   category: 'Programming & Tech', // or 'Leadership & Organization' | 'Competition'
  //   imageUrl: '/certificates/cert-YOUR-ID-HERE.jpg',
  //   credentialUrl: 'https://verify.example.com/credential/123',
  //   description: {
  //     en: 'What you learned or achieved.',
  //     id: 'Apa yang Anda pelajari atau capai.',
  //   },
  // },
]

export const certificateCategories = [
  'All',
  'Programming & Tech',
  'Leadership & Organization',
  'Competition',
] as const

// ============================================================
// src/data/certificates.ts — Curated high-impact certificates
// ─────────────────────────────────────────────────────────────
// HOW TO ADD A NEW CERTIFICATE:
//   1. Place the image in /public/images/certificates/
//   2. Copy any entry below, give a unique `id`, fill all fields.
//   3. Set `category`: 'Programming & Tech' | 'Leadership & Organization' | 'Competition'
// ============================================================

import type { Certificate } from '@/types/portfolio'

export const certificates: Certificate[] = [
  {
    id: 'cert-ifest-competitive-programming',
    title: {
      en: 'Competitive Programming — IFEST 6.0',
      id: 'Competitive Programming — IFEST 6.0',
    },
    issuer: 'HIMIF — Universitas Multi Data Palembang',
    date: '2026-05',
    category: 'Competition',
    imageUrl: '/images/certificates/cert-ifest.jpg',
    description: {
      en: 'Participated as a Competitive Programming member in IFEST 6.0 — an internal tech festival held by HIMIF UMDP on 31 May 2026.',
      id: 'Berpartisipasi sebagai Anggota Competitive Programming dalam IFEST 6.0 — festival teknologi internal HIMIF UMDP pada 31 Mei 2026.',
    },
  },
  {
    id: 'cert-pkkmb-divisi-acara',
    title: {
      en: 'Committee Member — PKKMB UMDP 2026 (Events Division)',
      id: 'Panitia — PKKMB UMDP 2026 (Divisi Acara)',
    },
    issuer: 'Universitas Multi Data Palembang',
    date: '2026-08',
    category: 'Leadership & Organization',
    imageUrl: '/images/certificates/cert-pkkmb.png',
    description: {
      en: 'Recognized for participation as Events Division committee member in PKKMB UMDP 2026 — the university-wide new student orientation program.',
      id: 'Diakui atas partisipasi sebagai Divisi Acara panitia PKKMB UMDP 2026 — program orientasi mahasiswa baru tingkat universitas.',
    },
  },
  {
    id: 'cert-coaching-ukm-programming',
    title: {
      en: 'Coaching Program — UKM Programming 2025',
      id: 'Program Coaching — UKM Programming 2025',
    },
    issuer: 'UKM Programming — Universitas Multi Data Palembang',
    date: '2025-12',
    category: 'Programming & Tech',
    imageUrl: '/images/certificates/cert-coaching.jpg',
    description: {
      en: 'Participated in the UKM Programming Coaching Program 2025 — focused on practical programming skill development and competency strengthening (17 Oct – 20 Dec 2025).',
      id: 'Berpartisipasi dalam Coaching Program UKM Programming 2025 — berfokus pada pengembangan keterampilan pemrograman praktis dan penguatan kompetensi (17 Okt – 20 Des 2025).',
    },
  },
  {
    id: 'cert-buddhayana-volunteer',
    title: {
      en: 'Certificate of Appreciation — Buddhayana Run 2025',
      id: 'Sertifikat Penghargaan — Buddhayana Run 2025',
    },
    issuer: 'KBI Buddhayana Run — Sekber PMVBI Sumatera Selatan',
    date: '2025-07',
    category: 'Leadership & Organization',
    imageUrl: '/images/certificates/cert-buddhayana.jpg',
    description: {
      en: 'Recognized for invaluable support and contribution as a Volunteer in Buddhayana Run 2025, Palembang — a national-scale running event.',
      id: 'Diakui atas dukungan dan kontribusi berharga sebagai Volunteer dalam Buddhayana Run 2025, Palembang — event lari berskala nasional.',
    },
  },
]

export const certificateCategories = [
  'All',
  'Programming & Tech',
  'Leadership & Organization',
  'Competition',
] as const

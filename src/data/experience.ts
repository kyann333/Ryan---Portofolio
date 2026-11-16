// ============================================================
// src/data/experience.ts — Full updated entries
// ============================================================

import type { Experience } from '@/types/portfolio'

export const experiences: Experience[] = [
  // ── 1. Vice Chair + Head PJ Coaching ────────────────────
  {
    id: 'vice-chair-ukm-coaching',
    role: {
      en: 'Vice Chair & Head PJ Coaching Program — UKM Programming',
      id: 'Wakil Ketua Umum & Kepala PJ Program Coaching — UKM Programming',
    },
    organization: 'Universitas Multi Data Palembang',
    period: '2026 – 2027',
    category: 'Tech & Teaching',
    description: {
      en: 'Led the UKM Programming student organization while simultaneously serving as Head Person-in-Charge of the Coaching Program — mentoring students in practical software development skills and real project execution.',
      id: 'Memimpin organisasi mahasiswa UKM Programming sekaligus menjadi Kepala Penanggung Jawab Program Kerja Coaching — membimbing mahasiswa dalam pengembangan skill software dan eksekusi proyek nyata.',
    },
    highlights: [
      { en: 'Designed programming training curriculum for the organization', id: 'Merancang kurikulum pelatihan pemrograman organisasi' },
      { en: 'Led Coaching Program as Head PJ — structured mentoring for real projects', id: 'Memimpin Program Coaching sebagai Kepala PJ — mentoring terstruktur untuk proyek nyata' },
      { en: 'Organized cross-semester collaborative coding sessions', id: 'Menyelenggarakan sesi coding kolaboratif lintas semester' },
    ],
    variant: 'navy',
  },

  // ── 2. Programming Extracurricular Instructor (SMA) ─────
  {
    id: 'programming-extracurricular-asst',
    role: {
      en: 'Programming Extracurricular Instructor (SMA Level)',
      id: 'Instruktur Ekskul Programming (Tingkat SMA)',
    },
    organization: 'SMA (High School)',
    period: '2024 – 2025',
    category: 'Tech & Teaching',
    description: {
      en: 'Taught high school students the fundamentals of programming, algorithmic logic, and structured problem-solving through the school programming extracurricular activity.',
      id: 'Mengajar siswa SMA dasar-dasar pemrograman, logika algoritma, dan pemecahan masalah terstruktur melalui kegiatan ekstrakurikuler programming sekolah.',
    },
    highlights: [
      { en: 'Delivered beginner-friendly programming sessions adapted to SMA curriculum', id: 'Menyampaikan sesi pemrograman ramah pemula yang disesuaikan dengan kurikulum SMA' },
      { en: 'Fostered algorithmic thinking through hands-on coding exercises', id: 'Menumbuhkan pemikiran algoritmik melalui latihan coding langsung' },
    ],
    variant: 'navy',
  },

  // ── 3. Sunday School Teacher (TK – Grade 3 SD) ─────────
  {
    id: 'sunday-school-assistant',
    role: {
      en: 'Sunday School Teacher (Kindergarten – Grade 3)',
      id: 'Guru Sekolah Minggu (TK – 3 SD)',
    },
    organization: 'Wihara Dharmakirti — Community Church',
    period: '2024 – 2025',
    category: 'Tech & Teaching',
    description: {
      en: 'Taught and mentored children aged kindergarten through Grade 3, simplifying complex topics into age-appropriate lessons — building empathic communication, patience, and creative teaching skills.',
      id: 'Mengajar dan membimbing anak usia TK hingga kelas 3 SD, menyederhanakan topik kompleks menjadi pelajaran sesuai usia — membangun komunikasi empatik, kesabaran, dan kreativitas mengajar.',
    },
    variant: 'navy',
  },

  // ── 4. Esports Coach — Tekken 8 & Naruto Ninja Storm ────
  {
    id: 'esports-coach',
    role: {
      en: 'Esports & Competitive Gaming Coach — Tekken 8 & Naruto NS',
      id: 'Pelatih Esports & Game Kompetitif — Tekken 8 & Naruto NS',
    },
    organization: 'Community / Independent',
    period: '2023 – 2025',
    category: 'Tech & Teaching',
    description: {
      en: 'Coached competitive players in Tekken 8 and Naruto Ninja Storm — focusing on frame data analysis, positioning strategy, in-game decision-making, and mental composure under pressure.',
      id: 'Melatih pemain kompetitif Tekken 8 dan Naruto Ninja Storm — berfokus pada analisis frame data, strategi posisi, pengambilan keputusan dalam game, dan ketenangan mental di bawah tekanan.',
    },
    highlights: [
      { en: 'Frame data & punish analysis for Tekken 8 character matchups', id: 'Analisis frame data & punish untuk matchup karakter Tekken 8' },
      { en: 'Strategic coaching for Naruto Ninja Storm team compositions', id: 'Coaching strategi komposisi tim Naruto Ninja Storm' },
    ],
    variant: 'teal',
  },

  // ── 5. PKKMB Events Division ─────────────────────────────
  {
    id: 'pkkmb-events-division',
    role: {
      en: 'Events Division — PKKMB UMDP',
      id: 'Divisi Acara — PKKMB UMDP',
    },
    organization: 'Universitas Multi Data Palembang',
    period: '2026',
    category: 'Leadership & Events',
    description: {
      en: 'Designed and executed the orientation flow for new UMDP students — managing logistics, scheduling, and engagement for a university-wide onboarding event.',
      id: 'Merancang dan mengeksekusi alur orientasi mahasiswa baru UMDP — mengelola logistik, penjadwalan, dan keterlibatan peserta untuk acara orientasi tingkat universitas.',
    },
    variant: 'espresso',
  },

  // ── 6. Fangsheng 2025 — Coordinator Acara ───────────────
  {
    id: 'fangsheng-coordinator',
    role: {
      en: 'Event Coordinator — Fangsheng 2025',
      id: 'Koordinator Acara — Fangsheng 2025',
    },
    organization: 'PERMADHIS MDP',
    period: '2025',
    category: 'Leadership & Events',
    description: {
      en: 'Served as Koordinator Acara for Fangsheng 2025 organized by PERMADHIS MDP — overseeing event flow, coordination between committees, and on-site execution.',
      id: 'Menjabat sebagai Koordinator Acara Fangsheng 2025 yang diselenggarakan PERMADHIS MDP — mengawasi alur acara, koordinasi antar panitia, dan eksekusi di lapangan.',
    },
    variant: 'espresso',
  },

  // ── 7. Buddhayana Run Volunteer ─────────────────────────
  {
    id: 'buddhayana-run-volunteer',
    role: {
      en: 'Volunteer — Buddhayana Run 2025 (National)',
      id: 'Volunteer — Buddhayana Run 2025 (Nasional)',
    },
    organization: 'Sekber PMVBI Sumatera Selatan',
    period: '2025',
    category: 'Leadership & Events',
    description: {
      en: 'Supported preparation and operational execution of the Buddhayana Run 2025 national running event held at Halaman DPRD Sumatera Selatan, Palembang.',
      id: 'Mendukung persiapan dan operasional pelaksanaan event lari nasional Buddhayana Run 2025 di Halaman DPRD Provinsi Sumatera Selatan, Palembang.',
    },
    variant: 'espresso',
  },

  // ── 8. Business & Marketing ─────────────────────────────
  {
    id: 'business-marketing',
    role: { en: 'Business & Marketing', id: 'Bisnis & Pemasaran' },
    organization: 'Independent / Entrepreneurial',
    period: '2025 – Present',
    category: 'Business',
    description: {
      en: 'Developing marketing strategies and building business relationships across local networks, applying data-driven thinking to business decisions.',
      id: 'Mengembangkan strategi pemasaran dan membangun relasi bisnis di jaringan lokal, menerapkan pemikiran berbasis data dalam pengambilan keputusan bisnis.',
    },
    variant: 'teal',
  },

  // ── 9. PPBD Member ───────────────────────────────────────
  {
    id: 'ppbd-member',
    role: { en: 'Member, PPBD Organization', id: 'Anggota PPBD' },
    organization: 'PPBD',
    period: '2024 – 2025',
    category: 'Leadership & Events',
    description: {
      en: 'Active member contributing to committee planning and execution of organizational activities.',
      id: 'Anggota aktif yang berkontribusi pada perencanaan kepanitiaan dan eksekusi kegiatan organisasi.',
    },
    variant: 'espresso',
  },

  // ── 10. Taekwondo Vice Chair ─────────────────────────────
  {
    id: 'taekwondo-vice-chair',
    role: {
      en: 'Vice Chair & Initiator — Taekwondo Extracurricular',
      id: 'Wakil Ketua & Inisiator — Ekskul Taekwondo',
    },
    organization: 'SMA (High School)',
    period: '2024 – 2025',
    category: 'Leadership & Events',
    description: {
      en: 'Initiated the formation of the taekwondo extracurricular, managed day-to-day operations, and developed programs to grow participation and discipline.',
      id: 'Menginisiasi pembentukan ekskul taekwondo, mengelola operasional harian, dan mengembangkan program untuk meningkatkan partisipasi dan kedisiplinan.',
    },
    variant: 'espresso',
  },
]

export const experienceCategories = [
  'All',
  'Tech & Teaching',
  'Leadership & Events',
  'Business',
] as const

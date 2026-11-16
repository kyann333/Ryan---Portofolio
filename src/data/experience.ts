// ============================================================
// src/data/experience.ts
// Organizational, leadership & teaching experience entries.
// ─────────────────────────────────────────────────────────────
// HOW TO ADD A NEW ENTRY:
//   1. Copy any existing object below.
//   2. Assign a unique `id` string (kebab-case).
//   3. Set `category`: 'Tech & Teaching' | 'Leadership & Events' | 'Business'
//   4. Set `variant`: 'navy' | 'espresso' | 'teal'
//   5. Fill all bilingual fields (en / id).
//   6. Add to the array — entries are sorted by `order` (ascending).
// ============================================================

import type { Experience } from '@/types/portfolio'

export const experiences: Experience[] = [
  {
    id: 'vice-chair-ukm-programming',
    role: {
      en: 'Vice Chair, UKM Programming',
      id: 'Wakil Ketua UKM Programming Kampus',
    },
    organization: 'Universitas Multi Data Palembang',
    period: '2026 – 2027',
    category: 'Tech & Teaching',
    description: {
      en: 'Initiated work programs, designed a programming training curriculum, and organized IT community activities to foster student growth in software development.',
      id: 'Menginisiasi program kerja, merancang kurikulum pelatihan pemrograman, dan menyelenggarakan kegiatan komunitas mahasiswa IT untuk mendorong pertumbuhan di bidang pengembangan perangkat lunak.',
    },
    highlights: [
      {
        en: 'Designed structured programming training curriculum',
        id: 'Merancang kurikulum pelatihan pemrograman terstruktur',
      },
      {
        en: 'Led cross-semester collaborative coding sessions',
        id: 'Memimpin sesi coding kolaboratif lintas semester',
      },
    ],
    variant: 'navy',
  },
  {
    id: 'pkkmb-events-division',
    role: {
      en: 'Events Division, PKKMB UMDP',
      id: 'Divisi Acara PKKMB UMDP',
    },
    organization: 'Universitas Multi Data Palembang',
    period: '2026',
    category: 'Leadership & Events',
    description: {
      en: 'Designed and executed the orientation flow for new students at Universitas Multi Data Palembang, ensuring smooth logistics, scheduling, and engagement.',
      id: 'Merancang dan mengeksekusi alur orientasi mahasiswa baru Universitas Multi Data Palembang, memastikan logistik, penjadwalan, dan keterlibatan yang lancar.',
    },
    variant: 'espresso',
  },
  {
    id: 'business-marketing',
    role: {
      en: 'Business & Marketing',
      id: 'Business & Marketing',
    },
    organization: 'Independent / Entrepreneurial',
    period: '2025 – Present',
    category: 'Business',
    description: {
      en: 'Developing marketing strategies and building business relationships across local networks, applying data-driven thinking to business decisions.',
      id: 'Mengembangkan strategi pemasaran dan membangun relasi bisnis di jaringan lokal, menerapkan pemikiran berbasis data dalam pengambilan keputusan bisnis.',
    },
    variant: 'teal',
  },
  {
    id: 'buddhayana-run-volunteer',
    role: {
      en: 'Volunteer, Buddhayana Run (National)',
      id: 'Volunteer Buddhayana Run – Nasional',
    },
    organization: 'Buddhayana Run Committee',
    period: '2025',
    category: 'Leadership & Events',
    description: {
      en: 'Supported the preparation and operational execution of a national-scale running event, coordinating logistics, participant briefings, and on-site teams.',
      id: 'Mengawal persiapan dan operasional pelaksanaan event lari berskala nasional, mengkoordinasikan logistik, briefing peserta, dan tim lapangan.',
    },
    variant: 'espresso',
  },
  {
    id: 'ppbd-member',
    role: {
      en: 'Member, PPBD Organization',
      id: 'Anggota PPBD',
    },
    organization: 'PPBD',
    period: '2024 – 2026',
    category: 'Leadership & Events',
    description: {
      en: 'Active member contributing to committee planning and execution of organizational activities, building teamwork and event coordination skills.',
      id: 'Anggota aktif yang berkontribusi pada perencanaan kepanitiaan dan eksekusi kegiatan organisasi, membangun keterampilan kerja sama tim dan koordinasi acara.',
    },
    variant: 'espresso',
  },
  {
    id: 'programming-extracurricular-asst',
    role: {
      en: 'Assistant Instructor, Programming Extracurricular',
      id: 'Asisten Pengajar Ekskul Pemrograman',
    },
    organization: 'High School (SMA)',
    period: '2024 – 2025',
    category: 'Tech & Teaching',
    description: {
      en: 'Guided students in coding fundamentals, algorithmic logic, and structured problem solving — applying peer teaching methods to demystify programming concepts.',
      id: 'Membimbing dasar-dasar coding, logika algoritma, dan problem solving terstruktur bagi siswa — menerapkan metode peer teaching untuk menyederhanakan konsep pemrograman.',
    },
    highlights: [
      {
        en: 'Delivered beginner-friendly programming sessions',
        id: 'Menyampaikan sesi pemrograman ramah pemula',
      },
      {
        en: 'Fostered algorithmic thinking through hands-on exercises',
        id: 'Menumbuhkan pemikiran algoritmik melalui latihan langsung',
      },
    ],
    variant: 'navy',
  },
  {
    id: 'taekwondo-vice-chair',
    role: {
      en: 'Vice Chair & Initiator, Taekwondo Extracurricular',
      id: 'Wakil Ketua & Inisiator Ekskul Taekwondo',
    },
    organization: 'High School (SMA)',
    period: '2024 – 2025',
    category: 'Leadership & Events',
    description: {
      en: 'Initiated the formation of the taekwondo extracurricular, managed day-to-day operations, and developed programs to grow participation and discipline.',
      id: 'Menginisiasi pembentukan ekskul taekwondo, mengelola operasional harian, dan mengembangkan program untuk meningkatkan partisipasi dan kedisiplinan.',
    },
    variant: 'espresso',
  },
  {
    id: 'sunday-school-assistant',
    role: {
      en: 'Sunday School Assistant Teacher',
      id: 'Asisten Guru Sekolah Minggu',
    },
    organization: 'Community Church',
    period: '2024 – 2025',
    category: 'Tech & Teaching',
    description: {
      en: 'Taught, mentored, and built empathic communication with children in a Sunday school setting — reinforcing patience, creativity, and interpersonal skills.',
      id: 'Mengajar, membimbing, dan membangun komunikasi empatik dengan anak-anak di lingkungan sekolah minggu — memperkuat kesabaran, kreativitas, dan keterampilan interpersonal.',
    },
    variant: 'navy',
  },
]

export const experienceCategories = [
  'All',
  'Tech & Teaching',
  'Leadership & Events',
  'Business',
] as const

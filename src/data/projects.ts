// ============================================================
// src/data/projects.ts
// Portfolio project case studies — curated & detailed.
// Each project maps 1:1 to a modal card in the Projects section.
// To add a project: copy any entry below, give it a unique `id`,
// set `order` to the next integer, and fill in all required fields.
// ============================================================

import type { Project } from '@/types/portfolio'

export const projects: Project[] = [
  // ── Project 1: LokalRata ─────────────────────────────────
  {
    id: 'lokalrata',
    title: 'LokalRata',
    subtitle: {
      en: 'Direct Supply Chain Platform for SMEs & Local Farmers',
      id: 'Platform Rantai Pasok Langsung UMKM & Petani Lokal',
    },
    description: {
      en: 'A full-stack Laravel MVC marketplace connecting local farmers and SMEs directly with buyers, with market-price comparisons, automatic inventory logs, and financing eligibility scoring.',
      id: 'Marketplace full-stack Laravel MVC yang menghubungkan petani dan UMKM lokal langsung dengan pembeli, dilengkapi perbandingan harga pasar, log inventaris otomatis, dan penilaian kelayakan pembiayaan.',
    },
    status: 'completed',
    techStack: ['Laravel', 'PHP 8.1+', 'MySQL', 'Blade', 'JavaScript', 'CSS3'],
    features: [
      {
        en: 'Instant Role Switcher — seamlessly switch between Buyer Mode and Farmer/SME Mode',
        id: 'Instant Role Switcher — beralih mulus antara Mode Pembeli dan Mode Petani/UMKM',
      },
      {
        en: 'Transparent Marketplace — farmer price vs. market price comparison with savings percentage',
        id: 'Marketplace Transparan — perbandingan harga petani vs. harga pasar + persentase penghematan',
      },
      {
        en: 'SME Dashboard — add harvest results & manage product stock',
        id: 'Dashboard UMKM — form tambah hasil panen & manajemen stok produk',
      },
      {
        en: 'Auto Inventory Log — sales history and restock events recorded automatically',
        id: 'Log Inventaris Otomatis — riwayat penjualan & restock tercatat otomatis',
      },
      {
        en: 'Financing Eligibility Score — 0–100% indicator based on log history, transactions, and revenue',
        id: 'Skor Kelayakan Pembiayaan — indikator 0–100% berbasis riwayat log, transaksi, dan omzet',
      },
      {
        en: 'Logistics Calculator — shipping cost & duration estimate per provincial zone',
        id: 'Kalkulator Logistik — estimasi ongkir & durasi per zona provinsi',
      },
      {
        en: 'Cart & Checkout with real-time stock validation',
        id: 'Keranjang & Checkout dengan validasi stok real-time',
      },
    ],
    architectureNote: {
      en: 'Laravel MVC architecture with 5 Controllers, 6 related Eloquent Models, and 7 Foreign-Key-aware Migrations ensuring full referential integrity across the supply-chain flow.',
      id: 'Arsitektur MVC Laravel dengan 5 Controller, 6 Eloquent Model berelasi, dan 7 Foreign-Key-aware Migrations yang memastikan integritas referensial penuh di seluruh alur rantai pasok.',
    },
    databaseTables: [
      {
        name: 'users',
        description: {
          en: 'Stores buyer and farmer/SME accounts with role field',
          id: 'Menyimpan akun pembeli dan petani/UMKM dengan field peran',
        },
      },
      {
        name: 'products',
        description: {
          en: 'Product listings owned by farmers/SMEs with price and stock',
          id: 'Daftar produk milik petani/UMKM dengan harga dan stok',
        },
      },
      {
        name: 'inventory_logs',
        description: {
          en: 'Automated event log for restock and sales actions',
          id: 'Log event otomatis untuk aksi restock dan penjualan',
        },
      },
      {
        name: 'carts',
        description: {
          en: 'Session-bound cart items with real-time stock checks',
          id: 'Item keranjang terikat sesi dengan pengecekan stok real-time',
        },
      },
      {
        name: 'orders',
        description: {
          en: 'Order header: buyer, total, status, and shipping zone reference',
          id: 'Header pesanan: pembeli, total, status, dan referensi zona pengiriman',
        },
      },
      {
        name: 'order_items',
        description: {
          en: 'Line items per order with quantity and unit price snapshot',
          id: 'Item per pesanan dengan kuantitas dan snapshot harga satuan',
        },
      },
      {
        name: 'shipping_zones',
        description: {
          en: 'Provincial shipping zones with rate and estimated delivery days',
          id: 'Zona pengiriman provinsi dengan tarif dan estimasi hari pengiriman',
        },
      },
    ],
    githubUrl: 'https://github.com/kyann333',
    order: 1,
  },

  // ── Project 2: Web Event Management System ───────────────
  {
    id: 'event-management',
    title: 'Web Event Management System',
    subtitle: {
      en: 'Centralized Participant Registration & Event Operations Platform',
      id: 'Platform Manajemen Acara & Registrasi Peserta Terpusat',
    },
    description: {
      en: 'A Laravel event platform for participant registration, committee scheduling, ticket and attendance checks, and data recaps, backed by relational MySQL and authentication.',
      id: 'Platform Laravel untuk registrasi peserta, penjadwalan panitia, verifikasi tiket dan kehadiran, serta rekap data, didukung MySQL relasional dan autentikasi.',
    },
    status: 'completed',
    techStack: ['Laravel', 'MySQL', 'PHP', 'JavaScript', 'HTML5', 'CSS3'],
    features: [
      {
        en: 'Participant registration management with category-based ticketing',
        id: 'Manajemen registrasi peserta dengan tiket berbasis kategori',
      },
      {
        en: 'Committee schedule & division management with role-based access',
        id: 'Manajemen jadwal & divisi panitia dengan akses berbasis peran',
      },
      {
        en: 'Centralized ticket & attendance verification system',
        id: 'Sistem verifikasi tiket & kehadiran terpusat',
      },
      {
        en: 'Event data recap dashboard with participant summary',
        id: 'Dashboard rekap data acara dengan ringkasan peserta',
      },
    ],
    architectureNote: {
      en: 'Structured relational MySQL schema to maintain participant data integrity, ticket categories, and committee roles — all protected by Laravel authentication middleware.',
      id: 'Skema MySQL relasional terstruktur untuk menjaga integritas data peserta, kategori tiket, dan peran panitia — semuanya dilindungi middleware autentikasi Laravel.',
    },
    databaseTables: [
      {
        name: 'users',
        description: {
          en: 'Admin and committee accounts with role-based permissions',
          id: 'Akun admin dan panitia dengan izin berbasis peran',
        },
      },
      {
        name: 'events',
        description: {
          en: 'Event header: name, date, venue, and capacity',
          id: 'Header acara: nama, tanggal, lokasi, dan kapasitas',
        },
      },
      {
        name: 'ticket_categories',
        description: {
          en: 'Ticket types with quota and pricing per event',
          id: 'Jenis tiket dengan kuota dan harga per acara',
        },
      },
      {
        name: 'registrations',
        description: {
          en: 'Participant registration records linked to ticket categories',
          id: 'Rekaman registrasi peserta terhubung ke kategori tiket',
        },
      },
      {
        name: 'committee_divisions',
        description: {
          en: 'Committee structure: divisions, roles, and schedules',
          id: 'Struktur panitia: divisi, peran, dan jadwal',
        },
      },
    ],
    githubUrl: 'https://github.com/kyann333',
    order: 2,
  },

  // ── Project 3: Private Note with AI Integration ───────────
  {
    id: 'private-note-ai',
    title: 'Private Note with AI Integration',
    subtitle: {
      en: 'Cross-Platform Personal Note App with AI Summarization',
      id: 'Aplikasi Catatan Pribadi Lintas Platform dengan Ringkasan AI',
    },
    description: {
      en: 'A cross-platform Flutter note app with secure local storage; AI summarization, smart topic grouping, and context-aware search are in development.',
      id: 'Aplikasi catatan lintas platform Flutter dengan penyimpanan lokal aman; ringkasan AI, pengelompokan topik pintar, dan pencarian kontekstual sedang dikembangkan.',
    },
    status: 'in-progress',
    progressPercent: 65,
    progressLabel: {
      en: '65% — UI & Local Storage Ready, AI Summarization Integration in Progress',
      id: '65% — UI & Penyimpanan Lokal Siap, Integrasi Ringkasan AI Sedang Berlangsung',
    },
    techStack: ['Flutter', 'Dart', 'AI API Integration (LLM)', 'Local Storage', 'Cloud Storage'],
    features: [
      {
        en: 'Cross-platform UI — consistent experience on Android, iOS, and Web',
        id: 'UI lintas platform — pengalaman konsisten di Android, iOS, dan Web',
      },
      {
        en: 'Secure local note storage with encryption-ready architecture',
        id: 'Penyimpanan catatan lokal aman dengan arsitektur siap enkripsi',
      },
      {
        en: 'AI Summarization (In Progress) — automatic note condensation using LLM API',
        id: 'Ringkasan AI (Sedang Dikembangkan) — kondensasi catatan otomatis menggunakan API LLM',
      },
      {
        en: 'Smart Topic Grouping (In Progress) — AI-driven semantic note clustering',
        id: 'Pengelompokan Topik Pintar (Sedang Dikembangkan) — pengelompokan catatan semantik berbasis AI',
      },
      {
        en: 'Context-Aware Search (Planned) — natural language search across notes',
        id: 'Pencarian Berbasis Konteks (Direncanakan) — pencarian bahasa alami di seluruh catatan',
      },
    ],
    architectureNote: {
      en: 'Flutter + Dart architecture with a clean separation between local persistence layer (Hive/SQLite) and the AI integration service layer. The AI module is decoupled via an abstract interface to allow hot-swapping between LLM providers.',
      id: 'Arsitektur Flutter + Dart dengan pemisahan bersih antara lapisan persistensi lokal (Hive/SQLite) dan lapisan layanan integrasi AI. Modul AI dipisahkan via antarmuka abstrak agar dapat berganti provider LLM dengan mudah.',
    },
    databaseTables: [
      {
        name: 'notes (Local)',
        description: {
          en: 'Note records: title, body, tags, timestamps, and AI summary cache',
          id: 'Rekaman catatan: judul, isi, tag, timestamp, dan cache ringkasan AI',
        },
      },
      {
        name: 'categories (Local)',
        description: {
          en: 'User-defined and AI-suggested topic categories',
          id: 'Kategori topik yang didefinisikan pengguna dan disarankan AI',
        },
      },
      {
        name: 'ai_jobs (Queue)',
        description: {
          en: 'Async queue for pending AI summarization and classification tasks',
          id: 'Antrian async untuk tugas ringkasan dan klasifikasi AI yang tertunda',
        },
      },
    ],
    githubUrl: 'https://github.com/kyann333/privatenote_rmf_pab1_project',
    order: 3,
  },
]

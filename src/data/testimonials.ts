// ============================================================
// src/data/testimonials.ts
// Social proof / endorsement entries from colleagues & peers.
// ─────────────────────────────────────────────────────────────
// HOW TO ADD A NEW TESTIMONIAL:
//   1. Copy any existing object below.
//   2. Assign a unique `id` string (kebab-case).
//   3. Set `relationTag`: 'Colleague' | 'Mentor' | 'Team Member' | 'Project Partner' | 'Peer'
//   4. Provide both `quote_en` (English) and `quote_id` (Indonesian) versions.
//   5. Optionally add `avatarUrl` pointing to /public/avatars/filename.jpg
// ============================================================

import type { Testimonial } from '@/types/portfolio'

export const testimonials: Testimonial[] = [
  // ── Example Entry 1 ─────────────────────────────────────
  // Replace with a real endorsement from a colleague or org member.
  {
    id: 'testimonial-ukm-member',
    name: 'Ahmad Fauzi',
    role: 'Member, UKM Programming',
    organization: 'Universitas Multi Data Palembang',
    quote_en:
      "Ryan's leadership in UKM Programming has been genuinely impactful. He brings both technical depth and clear communication that makes complex topics accessible to everyone in the group.",
    quote_id:
      'Kepemimpinan Ryan di UKM Programming benar-benar berdampak. Ia membawa kedalaman teknis dan komunikasi yang jelas sehingga topik yang kompleks menjadi mudah dipahami oleh semua anggota.',
    relationTag: 'Team Member',
    avatarUrl: undefined,
  },

  // ── Example Entry 2 ─────────────────────────────────────
  // Replace with a real endorsement from a project partner.
  {
    id: 'testimonial-project-partner',
    name: 'Dinda Pratiwi',
    role: 'Project Collaborator',
    organization: 'LokalRata Project',
    quote_en:
      "Working with Ryan on LokalRata was a great experience. He architectured the entire backend system cleanly and was always reliable when things got complex.",
    quote_id:
      'Bekerja sama dengan Ryan di proyek LokalRata adalah pengalaman yang menyenangkan. Ia merancang seluruh sistem backend dengan bersih dan selalu dapat diandalkan ketika situasi menjadi kompleks.',
    relationTag: 'Project Partner',
    avatarUrl: undefined,
  },

  // ── Template for future entries ─────────────────────────
  // {
  //   id: 'testimonial-YOUR-ID',
  //   name: 'Full Name',
  //   role: 'Their Role / Position',
  //   organization: 'Their Organization',
  //   quote_en: 'What they said in English.',
  //   quote_id: 'Apa yang mereka katakan dalam Bahasa Indonesia.',
  //   relationTag: 'Colleague', // 'Mentor' | 'Team Member' | 'Project Partner' | 'Peer'
  //   avatarUrl: '/avatars/their-photo.jpg', // optional
  // },
]

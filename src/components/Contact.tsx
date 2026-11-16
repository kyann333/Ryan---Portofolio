'use client'

import { motion } from 'framer-motion'
import { Headphones, MessageCircle, Utensils } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import SpotlightCard from './SpotlightCard'

const EASE = [0.22, 1, 0.36, 1] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: EASE, delay },
})

const ui = {
  en: {
    sectionLabel: 'Contact',
    headline: 'My Hobbies',
    sub: 'Outside of work and study, these are a few things I enjoy.',
    hobbies: [
      {
        title: 'Listening to Music',
        description: 'Music helps me focus and recharge.',
        icon: Headphones,
      },
      {
        title: 'Enjoying Good Food',
        description: 'I enjoy trying good food and finding local favorites.',
        icon: Utensils,
      },
      {
        title: 'Having a Good Conversation',
        description: 'I like sharing stories and ideas with friends.',
        icon: MessageCircle,
      },
    ],
  },
  id: {
    sectionLabel: 'Kontak',
    headline: 'Hobi Saya',
    sub: 'Di luar pekerjaan dan kuliah, ini beberapa hal yang saya sukai.',
    hobbies: [
      {
        title: 'Mendengarkan Musik',
        description: 'Musik membantu saya fokus dan melepas penat.',
        icon: Headphones,
      },
      {
        title: 'Menikmati Makanan',
        description: 'Saya suka menikmati makanan enak dan mencoba kuliner lokal.',
        icon: Utensils,
      },
      {
        title: 'Ngobrol Santai',
        description: 'Saya senang berbagi cerita dan ide bersama teman.',
        icon: MessageCircle,
      },
    ],
  },
}

export default function Contact() {
  const { locale } = useLanguage()
  const copy = ui[locale]

  return (
    <section id="contact" className="section-spacing hairline" aria-labelledby="contact-heading">
      <div className="section-container">
        <motion.p {...fadeUp(0)} className="font-mono text-xs text-espresso tracking-widest uppercase mb-3">
          {copy.sectionLabel}
        </motion.p>
        <motion.h2
          {...fadeUp(0.05)}
          id="contact-heading"
          className="text-3xl md:text-4xl font-editorial font-bold text-charcoal mb-4"
        >
          {copy.headline}
        </motion.h2>
        <motion.p {...fadeUp(0.1)} className="text-charcoal/65 font-ui text-base leading-relaxed max-w-2xl mb-10">
          {copy.sub}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {copy.hobbies.map((hobby, index) => {
            const Icon = hobby.icon
            return (
              <motion.div key={hobby.title} {...fadeUp(index * 0.09)}>
                <SpotlightCard className="card-warm p-5 flex flex-col gap-3 h-full">
                  <span
                    className={`w-10 h-10 rounded-xl ${index === 1 ? 'bg-espresso' : 'bg-navy'} flex items-center justify-center text-cream`}
                    aria-hidden="true"
                  >
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-editorial font-bold text-charcoal text-sm mb-1">{hobby.title}</h3>
                    <p className="font-ui text-xs leading-relaxed text-charcoal/70">{hobby.description}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

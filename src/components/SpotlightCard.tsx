'use client'

import { useRef, MouseEvent } from 'react'
import { motion } from 'framer-motion'

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
}

/**
 * SpotlightCard — wraps any card with a cursor-following warm radial glow
 * and a subtle lift on hover. Drop-in replacement for a plain <div>.
 */
export default function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--spotlight-x', `${x}px`)
    card.style.setProperty('--spotlight-y', `${y}px`)
    card.style.setProperty('--spotlight-opacity', '1')
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty('--spotlight-opacity', '0')
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden ${className}`}
      style={
        {
          '--spotlight-x': '50%',
          '--spotlight-y': '50%',
          '--spotlight-opacity': '0',
        } as React.CSSProperties
      }
    >
      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 rounded-[inherit]"
        style={{
          opacity: 'var(--spotlight-opacity)',
          background:
            'radial-gradient(280px circle at var(--spotlight-x) var(--spotlight-y), rgba(52,74,154,0.09), transparent 70%)',
        }}
        aria-hidden="true"
      />
      {children}
    </motion.div>
  )
}

'use client'

// ============================================================
// src/context/LanguageContext.tsx
// Global bilingual toggle (EN / ID) — no page reload required.
// Wrap your root layout with <LanguageProvider> and use the
// `useLanguage()` hook anywhere to read the current locale
// and call `toggleLanguage()` to switch.
// ============================================================

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react'
import type { Locale } from '@/types/portfolio'

interface LanguageContextValue {
  locale: Locale
  toggleLanguage: () => void
  /** Convenience helper: returns the matching string for current locale */
  t: (text: { en: string; id: string }) => string
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default locale is English
  const [locale, setLocale] = useState<Locale>('en')

  const toggleLanguage = useCallback(() => {
    setLocale((prev) => (prev === 'en' ? 'id' : 'en'))
  }, [])

  const t = useCallback(
    (text: { en: string; id: string }): string => text[locale],
    [locale]
  )

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

/** Must be used inside <LanguageProvider> */
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}

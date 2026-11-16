import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Safelist opacity-modifier classes that are assembled dynamically
  // (e.g. via template strings or className concatenation in JSX)
  safelist: [
    // Navy opacity variants
    { pattern: /^bg-navy\/(5|8|10|15|20|30|40|50|60|70|80|90)$/ },
    { pattern: /^text-navy\/(5|8|10|15|20|30|40|50|60|70|80|90)$/ },
    { pattern: /^border-navy\/(10|15|20|30|40)$/ },
    // Espresso opacity variants
    { pattern: /^bg-espresso\/(5|8|10|15|20|30|40|50|60|70|80|90)$/ },
    { pattern: /^text-espresso\/(5|8|10|15|20|30|40|50|60|70|80|90)$/ },
    { pattern: /^border-espresso\/(8|10|15|20|30|40)$/ },
    // Cream opacity variants
    { pattern: /^bg-cream\/(5|8|10|15|20|25|30|40|50|60|70|80|90)$/ },
    { pattern: /^text-cream\/(30|40|50|60|70|80|90)$/ },
    { pattern: /^border-cream\/(10|15|20|30)$/ },
    // Charcoal opacity
    { pattern: /^bg-charcoal\/(30|40|50|60|70|80|90)$/ },
    { pattern: /^text-charcoal\/(30|35|40|45|50|55|60|65|70|80|90)$/ },
  ],
  theme: {
    extend: {
      colors: {
        // Warm Editorial Tech Palette
        cream: {
          DEFAULT: '#F7F3EB',
          dark: '#EAE2D3',
        },
        charcoal: '#1C1B18',
        navy: {
          DEFAULT: '#1B365D',
          light: '#2A4A7F',
        },
        espresso: {
          DEFAULT: '#5C4033',
          light: '#8C6D53',
        },
        'espresso-light': '#8C6D53',
      },
      fontFamily: {
        editorial: ['var(--font-lora)', 'Georgia', 'serif'],
        ui: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'warm-sm': '0 1px 4px 0 rgba(92,64,51,0.08)',
        'warm-md': '0 4px 16px 0 rgba(92,64,51,0.10)',
        'warm-lg': '0 8px 32px 0 rgba(92,64,51,0.12)',
        'warm-xl': '0 16px 48px 0 rgba(27,54,93,0.14)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config

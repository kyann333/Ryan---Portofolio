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
          DEFAULT: '#FAF9F6',
          dark: '#F0EEE8',
        },
        charcoal: '#20232B',
        navy: {
          DEFAULT: '#344A9A',
          light: '#5267B2',
        },
        espresso: {
          DEFAULT: '#665B50',
          light: '#918475',
        },
        'espresso-light': '#918475',
      },
      fontFamily: {
        editorial: ['var(--font-lora)', 'Georgia', 'serif'],
        ui: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px 0 rgba(32,35,43,0.045), 0 1px 2px rgba(32,35,43,0.04)',
        'warm-md': '0 10px 28px -12px rgba(32,35,43,0.18), 0 3px 8px rgba(32,35,43,0.05)',
        'warm-lg': '0 18px 42px -18px rgba(32,35,43,0.22), 0 5px 12px rgba(32,35,43,0.06)',
        'warm-xl': '0 24px 56px -20px rgba(32,35,43,0.28), 0 8px 20px rgba(32,35,43,0.08)',
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

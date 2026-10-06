/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vj: {
          charcoal: '#121418',
          dark: '#181B20',
          slate: '#232830',
          stone: '#F8F9FA',
          offwhite: '#F3F4F6',
          muted: '#6B7280',
          border: '#E5E7EB',
          'border-dark': '#2E3540',
          teal: '#00A3B4',
          'teal-dark': '#0B7285',
          'teal-light': '#22D3EE',
          navy: '#1A2430',
          steel: '#334155',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        architectural: '0.25em',
        widest: '0.2em',
        wider: '0.1em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.15)',
        'modal': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: { 900: '#07080B', 800: '#0D1117', 700: '#161B22', 600: '#21262D' },
        accent: { DEFAULT: '#7C3AED', hover: '#6D28D9', light: '#A78BFA' },
        cyan: { DEFAULT: '#22D3EE', dark: '#0891B2' },
        amber: { DEFAULT: '#FBBF24', dark: '#D97706' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
        'gradient-border': 'gradient-border 3s ease-in-out infinite',
        'drift-up': 'drift-up 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'typewriter': 'typewriter 3s steps(40) 1s forwards',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-border': {
          '0%, 100%': { borderColor: '#7C3AED' },
          '50%': { borderColor: '#22D3EE' },
        },
        'drift-up': {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) translateX(40px)', opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
}

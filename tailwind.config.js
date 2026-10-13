import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        grunge: {
          rust: '#d96b27',
          'rust-bright': '#ff7a18',
          metal: '#1b1f24',
          'metal-dark': '#101316',
          'metal-light': '#2f353d',
          steel: '#47515c',
          gold: '#f59e0b',
          glow: '#38bdf8',
          ice: '#93c5fd',
        },
      },
      fontFamily: {
        skate: ['Impact', 'Haettenschweiler', "'Arial Black'", 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'neon-blue': '0 0 15px rgba(56, 189, 248, 0.65)',
        'rust-glow': '0 0 15px rgba(245, 158, 11, 0.5)',
        'inset-plate': 'inset 2px 2px 4px rgba(255,255,255,0.1), inset -2px -2px 6px rgba(0,0,0,0.8)',
      },
    },
  },
  plugins: [forms, containerQueries],
}

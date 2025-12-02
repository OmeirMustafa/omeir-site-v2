/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        void: {
          900: '#020617', // Deepest black
          800: '#0F172A', // Secondary
        },
        quantum: {
          cyan: '#22d3ee',
          blue: '#3b82f6',
          purple: '#a855f7',
          pink: '#ec4899',
        }
      },
      backgroundImage: {
        'iridescent-gradient': 'linear-gradient(to right, #22d3ee, #3b82f6, #a855f7, #ec4899)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'neon-border': 'neon-border 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'neon-border': {
          '0%, 100%': { borderColor: 'rgba(34, 211, 238, 0.3)', boxShadow: '0 0 10px rgba(34, 211, 238, 0.1)' },
          '50%': { borderColor: 'rgba(34, 211, 238, 0.8)', boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' },
        }
      }
    },
  },
  plugins: [],
} 
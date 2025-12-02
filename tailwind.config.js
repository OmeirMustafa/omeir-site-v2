/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
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
          900: '#020617', 
          800: '#0F172A', 
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
        'neon-glow-border': 'neon-glow-border 4s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'neon-glow-border': {
            '0%, 100%': {
              'box-shadow': '0 0 5px rgba(6, 182, 212, 0.4), 0 0 15px rgba(6, 182, 212, 0.4)',
              'border-color': 'rgba(6, 182, 212, 0.4)',
            },
            '50%': {
              'box-shadow': '0 0 8px rgba(6, 182, 212, 0.6), 0 0 25px rgba(6, 182, 212, 0.6)',
              'border-color': 'rgba(6, 182, 212, 0.6)',
            },
          },
      }
    },
  },
  plugins: [],
}
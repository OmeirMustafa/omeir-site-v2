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
      },
      colors: {
        bg: '#030014', 
        glass: 'rgba(255, 255, 255, 0.05)',
        glassBorder: 'rgba(255, 255, 255, 0.1)',
        primary: '#3b82f6',
        purple: '#8b5cf6',
        teal: '#14b8a6',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'neon-glow-border': 'neon-glow-border 4s ease-in-out infinite alternate',
      },
      keyframes: {
        'blob': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
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
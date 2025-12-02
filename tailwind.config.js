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
        mono: ['JetBrains Mono', 'monospace'], // Added mono for tech feel
      },
      colors: {
        // THE PEBBLE PALETTE
        pebble: {
          100: '#F5F5F4', // Main Background (Stone)
          200: '#E7E5E4', // Secondary/Borders
          300: '#D6D3D1', // Accents
          800: '#292524', // Secondary Text
          900: '#1C1917', // Primary Text (Charcoal)
        },
        glass: 'rgba(255, 255, 255, 0.4)',
        glassBorder: 'rgba(255, 255, 255, 0.8)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
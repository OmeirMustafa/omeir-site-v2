/** @type {import('tailwindcss').Config} */
module.exports = {
  // Ensure Tailwind scans all your project files (root and components)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Defines the animation NAME and properties
      animation: {
        'neon-glow-border': 'neon-glow-border 4s ease-in-out infinite alternate',
      },
      // 2. Defines the animation KEYFRAMES (The actual movement)
      keyframes: {
        'neon-glow-border': {
          '0%, 100%': {
            'box-shadow': '0 0 5px rgba(6, 182, 212, 0.4), 0 0 15px rgba(6, 182, 212, 0.4)',
          },
          '50%': {
            'box-shadow': '0 0 8px rgba(6, 182, 212, 0.6), 0 0 25px rgba(6, 182, 212, 0.6)',
          },
        },
      },
    },
  },
  plugins: [],
}
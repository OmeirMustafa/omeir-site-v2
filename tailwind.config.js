/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This links the font-sans class to the Inter font we imported in index.css
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
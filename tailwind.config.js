/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cafe-brown': '#8B4513',
        'cafe-cream': '#FFF8DC',
        'cafe-accent': '#D2691E'
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'lato': ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}
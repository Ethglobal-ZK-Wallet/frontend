/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue-500': '#073763',
        'navy-blue-200': '#1173CC'
      }
    },
  },
  plugins: [],
}
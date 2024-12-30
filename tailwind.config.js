/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#0c0a0d',
        background:'#eae9ed'
    },
    fontFamily: {
      cookie: ['Cookie', 'cursive'],
      lavishly: ['"Lavishly Yours"', 'cursive'],
      poppins: ['Poppins', 'sans-serif'],
      lugrasimo: ['Lugrasimo', 'serif'],
    },
    },
  },
  plugins: [],
}
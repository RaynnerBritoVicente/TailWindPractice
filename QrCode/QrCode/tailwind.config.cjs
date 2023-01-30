/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        outfit:['Outfit', 'sans-serif'],
        dosis:['Dosis', 'sans-serif'],
      },
      colors:{
        grayBlue:['#d6e2f0'],
        cGray:['#7b879d'],
        darkBlue:['#1f3251'],
      },
      screens:{
        xs:'375px',
      }
    },
  },
  plugins: [],
}

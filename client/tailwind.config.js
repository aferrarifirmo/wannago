/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    colors : {
      'first' : '#F0E9D2',
      'second' : '#E6DDC4',
      'third' : '#678983',
      'fourth' : '#181D31'
    },

    extend: {
      fontFamily: {
        'space-grotesk' : ['Space Grotesk', 'sans-serif'],
        'poly' : ['Poly', 'serif'],
      }
    },
  },
  plugins: [],
}

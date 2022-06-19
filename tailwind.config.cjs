/** @type {import('tailwindcss').Config} */
// tailwind.config.cjs
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.svelte', './src/**/*.css'],
  media: false,
  theme: {
    colors: {
      white: colors.white,
      gray: colors.stone,
      'svelte-prime': '#ff5030',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
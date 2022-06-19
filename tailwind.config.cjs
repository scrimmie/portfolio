/** @type {import('tailwindcss').Config} */
// tailwind.config.cjs
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.svelte', './src/**/*.css'],
  media: false,
  theme: {
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        JetbrainsMono: ["JetBrains Mono", "monospace"],
       },
    },
  },
  plugins: [],
}

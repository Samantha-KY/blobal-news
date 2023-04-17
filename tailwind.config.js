/** @type {import('tailwindcss').Config} */
const lineClamp = require("@tailwindcss/line-clamp")

module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Newsreader",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [lineClamp],
}

/** @type {import('tailwindcss').Config} */
const lineClamp = require("@tailwindcss/line-clamp")

module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins",
      },
      transitionProperty: {
        width: "width",
      },
      width: {
        fill: "-webkit-fill-available",
      },
    },
  },
  plugins: [lineClamp],
}

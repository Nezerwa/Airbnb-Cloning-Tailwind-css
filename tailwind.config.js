/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        manrope: "'manrope', serif",
      },
      gridTemplateRows: {
        layout: "1fr 3fr 60px",
      },
    },
  },
  plugins: [],
};

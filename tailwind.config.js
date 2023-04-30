/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue,css}"],
  theme: {
    extend: {
      boxShadow: {
        "l-white": "-10px 0 10px #190e23",
      },
      colors: {
        black: {
          blackhbg: "#190e23",
        },
      },
    },
  },
  plugins: [],
};

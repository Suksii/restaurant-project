/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        golden: "#DCCA87",
        crimson: "#F5EFDB",
        black: "#000000",
        white: "#FFFFFF",
        bordo: "#7e3535",
        blue: "#0931ef",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        butler_light: ["Butler-Light"],
        butler_regular: ["Butler-Regular"],
        gilroy_bold: ["Gilroy-Bold"],
        gilroy_regular: ["Gilroy-Regular"],
        gilroy_medium: ["Gilroy-Medium"],
        rockness: ["Rockness"],


      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
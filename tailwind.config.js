/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors:{
        Fblue: "#0554F2",
        Fwhite: "#FFFFFF",
        Fblack: "#0D0D0D",
        Fred: "#F20F38",
      },
    },
  },
  plugins: [],
}


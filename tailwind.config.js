/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        light: "#eceefb",
        primary: "#03bcf4",
        secondary: "#f06",
        dark: "#16213E",
        primaryDark: "#58E96",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        hero: "url('/src/assets/background.jpg')",
      },
    },
  },
  plugins: [],
};

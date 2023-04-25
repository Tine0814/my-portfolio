/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        light: "#eceefb",
        primary: "#f06",
        darkText: "#510020",
        dark: "#18191a",
        primaryDark: "#3a3b3c",
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

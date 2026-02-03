/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        shopGreen: "#003d29",
        shopBeige: "#fbf0e4",
        shopText: "#231f1e",
      },
      fontFamily: {
        title: ["Sansation", "sans-serif"],
        text: ["TasaOrbiter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

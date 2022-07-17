/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        roxin: {
          500: "#2f2841",
        },
        roxinescuro: {
          500: "#201b2c",
        },
        verdin: {
          500: "#00ff88",
        },
      },
      boxShadow: {
        daora: "10px 10px 40px #000056;",
      },
    },
  },
  plugins: [],
};

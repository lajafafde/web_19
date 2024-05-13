/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      primary: {
        light: "#dc2626",
        dark: "#f59e0b",
        Rose:"#e11d48",
        blue:"#1d4ed8",
        Violet:"#8b5cf6",
        pink:"Pink",
        Fuchsia:"#c026d3 ",
        Lime:"#84cc16",
        Green:"#22c55e",
        Amber:"#d97706",


      },
        fontSize:{
          10:"10px",
          16:"16px",
          32:"32px",
          64:"64px",
        }
    },
    extend: {
      padding:{
        "10px": "10px",
        "20px": "20px",
        "30px": "30px",
        "40px": "40px",
      }
    }
  },
  plugins: [],
};


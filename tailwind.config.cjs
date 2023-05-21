/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        DEFAULT: '1rem',
        '2lg': '2rem',
      },
      colors: {
        gray: '#717171',
        darkGray: '#c6c6c6',
        gray2: "#D9D9D9",
        textGray: "#6F6F6F",
        redBorder: '#ff7D7D',
        redFill: '#FF9E9E',
        error: "#C10000",
        fuel: "#1ACE0A",
        consumables: "#22F1F1",
        service: "#584BEC",
        other: "#FDE720",
        changeDetails: "#F1229E",
      },
    },
    container: {},
  },
  plugins: [],
};

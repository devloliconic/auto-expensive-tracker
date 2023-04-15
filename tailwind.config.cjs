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
        redBorder: '#ff7D7D',
        redFill: '#FF9E9E',
        error: "#C10000"
      },
    },
    container: {},
  },
  plugins: [],
};

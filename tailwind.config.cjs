/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        DEFAULT: "1rem",
        "2lg": "2rem"
      },
    },
    container: {

    }
  },
  plugins: [],
}
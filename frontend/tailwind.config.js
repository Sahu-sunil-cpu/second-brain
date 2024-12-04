/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          200:"#e0e7ff",
          300: "#5046e4",
          400: "#3e38a7",
          500: "#5046e4",
          600: "#5f81ff"

        }
      }
    },
  },
  plugins: [],
}


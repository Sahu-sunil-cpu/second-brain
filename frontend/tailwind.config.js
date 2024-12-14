/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      colors: {
        purple: {
          200:"#e0e7ff",
          300: "#5046e4",
          400: "#3e38a7",
          500: "#5046e4",
          600: "#5f81ff"

        },
        slate: {
          200: " #2a1f62",
          300: "#f5f5fa",
          400: "#f8f8ff"
        }
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sharon': ['Sharon - Personal Use Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


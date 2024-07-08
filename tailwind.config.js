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
      colors : {
        "primary-text" : '#45505E',
        'second-text' : '#8C9CAD',
        'stone-color' : "#00AB63"
      }
    },
  },
  plugins: [],
}


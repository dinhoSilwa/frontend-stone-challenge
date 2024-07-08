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
      },
      screens: {
        'mob-small': '640px',    
        'mob-medium': '768px',   
        'desk-small': '1024px',   
        'desk-medium': '1280px',
        'desk-larger': '1536px',  
      },
    },
  },
  plugins: [],
}


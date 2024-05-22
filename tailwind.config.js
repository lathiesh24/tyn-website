/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage:{
        'homebg':"ur('./public/homebg.png')"
      },
      colors: {
        customBlue: '#2287C0',
        customYellow:"#FCE834",
        customBlack:"#2F2F2F",
        customGreyishBlack:"#626262",
        bgBlue:"#F0FAFF"
      },
    },
  },
  plugins: [],
}

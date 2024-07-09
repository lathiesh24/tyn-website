/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        homebg: "ur('/homebg.png')",
        "custom-gradient":
          "linear-gradient(90.76deg, #2287C0 6.67%, #00C1EC 58.25%, #83FBD6 89.58%)",
      },
      boxShadow: {
        customAdCard: "5px 5px 25px 1px rgba(14, 14, 14, 0.19)",
      },
      colors: {
        customBlue: "#2287C0",
        customYellow: "#FCE834",
        customBlack: "#2F2F2F",
        customGreyishBlack: "#626262",
        bgBlue: "#F0FAFF",
        borderBlue: "#BBE6FF",
      },
    },
  },
  plugins: [],
};

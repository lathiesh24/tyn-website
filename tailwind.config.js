/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        homebg: "url('/homebg.png')",
        "custom-gradient":
          "linear-gradient(90.76deg, #2287C0 6.67%, #00C1EC 58.25%, #83FBD6 89.58%)",
        "custom-yellow-gradient":
          "linear-gradient(90deg, #f6f3b5 10%,  #f4f87b 50%, #f1c232 90%)",
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
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        marquee: "scroll 15s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({
      nocompatible: true,
      preferredStrategy: "pseudoelements",
    }),
  ],
};

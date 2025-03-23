/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],  
  theme: {
    extend: {
      animation: {
        "slide-down": "slide-down 0.3s ease-out",  
      },
      keyframes: {
        "slide-down": {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

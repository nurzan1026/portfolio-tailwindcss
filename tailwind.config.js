/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#06b6d4",
        secondary: "#0891b2",
        dark: "#0f172a",
        kuning: "#fde047",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".btn-link": {
          "@apply flex items-center space-x-2 text-dark border border-primary py-5 px-5 rounded-md w-full h-10 justify-center hover:bg-yellow-300 hover:text-slate-800 transition duration-300 ease-in-out":
            "",
        },
      });
    },
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        white: {
          100: "#FFFFFF",
          200: "rgba(255, 255, 255, 0.43%)",
        },
        blue: "#1EE0E1",
      },
    },
  },
  plugins: [],
};

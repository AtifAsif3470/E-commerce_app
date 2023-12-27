/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
       backgroundColor: {
        'light': '#ffffff', // Light theme background color
        'dark': '#2d2d2d', // Dark theme background color
      },
      textColor: {
        'light': '#000000', // Light theme text color
        'dark': '#ffffff', // Dark theme text color
      },
    },
  },
  plugins: [],
}


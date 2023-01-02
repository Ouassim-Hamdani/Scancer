/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",".src/components/*"
  ],
  theme: {
    extend: {
      width: {
        '550': '550px',
        '1120': '1120px',
      },
      height: {
        '280': '280px',
        '580': '580px',
      },
      colors : {
        primary:"#4264D0",
        secondary : "#303778",
        nav: "#F4F4F8",
        element : "#EAEAEA",
        itemGray : "#3A3A3A",
        title : "#2E2E2E"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
}
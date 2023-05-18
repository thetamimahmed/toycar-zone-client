/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'pink' : '#FD6698',
      'blue': '#2EBEEF',
      'lightPink': '#ECE3E1',
      'lightBlue': '#71DAEC'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}


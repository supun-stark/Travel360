/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      titlefont : ["Platypi", "serif"],
      captionfont : ["Dancing Script","serif"], 
      subfont : ["Poppins", "sans-serif"]
    },
  },
  plugins: [],
}


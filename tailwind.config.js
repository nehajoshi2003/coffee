/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 25s linear infinite',
      },
      fontFamily: {
      poppins: ["Poppins", "sans-serif"], // Add Poppins as a new font family
      dancingScript: ["Dancing Script", "cursive","sans-serif"],
    },},
    container:{
      center:true,
      padding:{
        sm:"3rem"
      }
    },
  },
  plugins: [],
}


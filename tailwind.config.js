/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7E9D3",
        turquoise: "#83C8BC",
        pink: "#F7A8B8",
        gold: "#E5C04A",
        heartred: "#D6403A",
        dark: "#2C2C2C"
      }
    }
  },
  plugins: []
};

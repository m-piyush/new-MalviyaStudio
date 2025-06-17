/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}' 
  ],
theme: {
  extend: {
    fontFamily: {
      cormorant: ['var(--font-cormorant)', 'serif'],
      ephesis: ['var(--font-ephesis)', 'cursive'],
    },
  },
},


  plugins: [],
};

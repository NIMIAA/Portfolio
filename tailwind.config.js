/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background': '#EBEEED',
        'sub':'#ebeeef',
        'dark': '#D6D5D2',
      }
    },
  },
  plugins: [],
}


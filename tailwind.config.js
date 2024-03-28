/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          AffilestateBlue110: '#050521',
          AffilestateBlue60: '#1818A6',
          AffilestateBlue40: '#6565C4',
          AffilestateBlue10: '#D1D1ED',
          Black60: '#1E1E1E',
          Black50: '#444444',
          Black40: '#696969',
          Black30: '#D1D1ED',
          Black20: '#A3A3A3',
          Black10: '#D9D9D9',
        },
        secondary: {
         
        },
      },
    },
  },
  plugins: [],
}


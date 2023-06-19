/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryText: {
          veryDarkDesaturatedBlue: 'hsl(238, 29%, 16%)',
          softRed: 'hsl(14, 88%, 65%)',
        },
        gradient: {
          softViolet: 'hsl(273, 75%, 66%)',
          softBlue: 'hsl(240, 73%, 65%)',
        },
        neutralText: {
          veryDarkGrayishBlue: 'hsl(237, 12%, 33%)',
          darkGrayishBlue: 'hsl(240, 6%, 50%)',
        },
        dividers: {
          lightGrayishBlue: 'hsl(240, 5%, 91%)',
        },
      },
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

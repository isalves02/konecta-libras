/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,jsx}", 
  ],

  theme: {
    extend: {
      fontFamily: {
        'body': ['Poppins', 'sans-serif']
      },

      colors: {
        'blue-200': '#98BFFF',
        'blue-300': '#5176AE',
        'blue-400': '#6797E4',
        
        'blue-600': '#0447AC',
        'blue-750': '#002F75',
        'blue-800': '#04214B', 
        'blue-850': '#0A2C5D',
        'blue-900': '#011635',
        'blue-950': '#021025',

        'yellow-500': '#D48917',
      },

      container: {
        center: true,
        padding: '1rem'
      },
    },
  },
  plugins: [],
}


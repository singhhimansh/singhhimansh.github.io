/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')



module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {

      fontFamily: {

        // 'sans': ['calibre', ...defaultTheme.fontFamily.sans],

        calibre: "'calibre', sans",

      },

      colors: {
        deepocean: '#0a192f',
        lightocean: '#112240',
        darknavy: '#020c1b',
        navy: '#0a192f',
        lightnavy: '#112240',
        lightestnavy: '#233554',
        navyshadow: 'rgba(2,12,27,0.7)',
        darkslate: '#495670',
        defslate: '#8892b0',
        lightslate: '#a8b2d1',
        lightestslate: '#ccd6f6',
        defwhite: '#e6f1ff',
        defgreen: '#64ffda',
      },

    },
  },


  variants: {

    extend: {

      backgroundColor: ['active'],

    },

  },

  plugins: [],
}

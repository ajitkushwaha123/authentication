/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#c33",
        heroBrown : "#271c0a",
        blackY : "#131313",
        textSpan : "#f93",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'header': "url('./assets/background/hero.png')",
        'starsImg': "url('./assets/background/contact-bg.jpg')",
        'events-bg': "url('./assets/background/event-bg.jpg')", 
        'bag' : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/22.png",
      },
      keyframes: {
        bounce : {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          }
        },

        spin : {
          '0%' : { 
            transform: 'rotate(0deg)',
          },
          '100%' : {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        bounce: 'bounce 5s infinite',
        slideTop : 'slideTop 4s ease-in-out ',
        spin : 'spin 100s infinite',
      }
    },
    screens: {
      as : "0px",
      xs: "480px",
      ss: "620px",
      km: "768px",
      sm :"952px",
      md: "1060px",
      lg: "1280px",
      xl: "1700px",
    },
  },
  plugins: [],
};
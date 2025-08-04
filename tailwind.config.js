/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './public/**/*.{html,js}'
  ],
  darkMode: 'class',
  theme: {
    extend: {

      fontFamily : {
        poppins : ['Poppins'],
        dmsans : ['DM Sans'],
      },

      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'bounce-slow-2': 'bounce 4s infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: "fadeIn 2s ease-in forwards",
        shake : 'shake 2s ease infinite',
        hithere: 'hithere 3s ease infinite'
        }
        
      },

     boxShadow: {
        'shadow-main': '0 48px 100px -0px rgba(0, 148, 212, 0.15)', 
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },

        shake : {
          "0%, 100" : {transform:'translateX(0)'},
          "10%, 30%, 50%, 70%, 90%" :  {transform:'translateX(-10)'},
          "20%, 40%, 60%, 80%" : {transform:'translateX(10px)'}
        },

        hithere  : {
          "30%" : {transform: 'scale(1.2)'},
          "40%, 60%" :  {transform:'rotate(-20deg)'},
          "50%" :  {transform:'rotate(-20deg), scale(1.2)'},
          "70%" :  {transform:'rotate(0deg), scale(1.2)'},
          "100%" :  {transform:'scale(1)'},
        },
      variants: {
        animation: ["motion-safe"],
      }
      

    },
  },
  plugins: [],
}


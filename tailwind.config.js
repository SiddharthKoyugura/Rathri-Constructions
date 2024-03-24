/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'real-green':'#2dbe6c',
        'footer-black':"#1b1d21",
        'light-gray':"#93959e",
        'vlight-blue':"#e5f8ed"
      },
      width: {
        '128': '32rem',
        '100': '25rem',
        '120' :'30rem',
        '112' : '28rem',
      },
      boxShadow: {
        '3xl': '-5px 10px 10px  rgba(0, 0, 0, 0.2)',
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}


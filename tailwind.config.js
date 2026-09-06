/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      margin: {
        'top-adjusted': '16rem',
      },
      
    },

    colors: {
      'nexablack': '#000000',
      'nexagreen': '#2ECC71',
      'nexafooterblack': '#1B1919',
      'space1-2': '#7c0a02',
      'space1-3': '#371f76',
      'nexawhite': '#ffffff',
      'nexagrey': '#D5D3D3',
      'nexagrey': '#E7E9E9',
      'space1-5': '#ebecf0',
      'space1-6': '#ffc0cb',
      'space1-7': '#4b0082',
      'space1-8': '#7A687F',
      'space1-9': '#581845',
      'space1-10':'#ff7c00',
      'space1-11':'#ff2600',

    },
    fontFamily:{
      monteserat: "Montserrat",
      popins:"Poppins"
    },
    
      extend: {
      backgroundImage: {
        'space1one': "url('/images/space1one.jpg')",
        
        },
  },
  plugins: [],
  },
}



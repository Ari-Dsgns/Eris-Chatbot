/** @type {import('tailwindcss').Config} */
module.exports =  {
   content: ["./src/**/*.{js,ts,jsx,tsx,html}"],

  theme: {
    extend: {
      rotate: {
        360: "360deg",
      },
      animation: {
        spinSlow: "spin 10s linear infinite",
        spinReverseSlow: 'spin-reverse 2s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
      boxShadow: {
          magic: "0 0 15px rgba(147, 197, 253, 0.6)",
          top: "0 -8px 10px rgba(200, 200, 200, 0.1)",
          normal: "0 0px 12px rgba(20, 20, 20, 0.5)",
          shiny: "0 0px 20px rgba(255, 255, 255, 0.3)",
        },
      
     

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        stack: ["Stack Sans Notch", "sans-serif"],
      },
      
      colors: {
        
        primary: "#00040E", //blu
        secondary: "#8EC5FF", //red
        backgrounds: "#CBD5E1", //light gray
        buttons:{
          normal: '#2D728F',    // pink-700
          hover: '#9D174D',     // pink-800
          selected: '#831843',  // pink-900
        }, 
        complementary: "#FACC15",
        textBackground: "#CBD5E1",
        textBackground2: "#A9B4C0",
        text1:"#F8F5F5", //white
        text2: "#100F0F", //dark gray
      },  
    },
  },
  plugins: [],
};


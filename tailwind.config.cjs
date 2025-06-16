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
      
     

      
      
      colors: {
        
        primary: "#00040E", //blu
        secondary: "#CBD5E1", //red
        tertiary: "#FCA59B",
        textBackground: "#F0F0F0", 
        textBackground2: "#D2AAA5",
        background: "#f3f4f6", 
        text: "#111827", 
      },  
    },
  },
  plugins: [],
};


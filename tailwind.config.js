/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        "DarkBlue":{
          "100":"hsl(213, 19%, 18%)",
          "200":"hsl(216, 12%, 8%)",
        },
        "Grey":{
          "100":"hsl(217, 12%, 63%)",
          "200":"hsl(216, 12%, 54%)"
        }
      },
      backgroundColor:{
        "DarkBlue": {
          "100": "hsl(213, 19%, 18%)",
          "200": "hsl(216, 12%, 8%)",
        },
        "Grey": {
          "100": "hsl(217, 12%, 63%)",
          "200": "hsl(216, 12%, 54%)"
        }
      },
      fontFamily:{
        overpass: ["Overpass"]
      }
    },

  },
  plugins: [],
}

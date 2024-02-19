/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      vt323: ['VT323', 'monospace', 'sans-serif']
    },
    extend: {
      spacing: {
        4.5: '1.125rem',
        17: '4.25rem'
      },
      colors: {
        'manganese-black': '#22314F',
        'dark-knight': '#101828',
        'lavender-mauve': '#677796',
        'pastel-placebo': '#E7E7E7',
        'screen-glow': '#6CE9A6'
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      }
    }
  },
  plugins: []
}

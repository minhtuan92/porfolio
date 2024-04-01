/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      vt323: ['VT323', 'monospace', 'sans-serif']
    },
    screens: {
      xs: { max: '599.98px' },
      ...defaultTheme.screens
    },
    extend: {
      screens: {
        sm: '600px',
        md: '960px',
        lg: '1280px',
        xl: '1920px'
      },
      spacing: {
        4.5: '1.125rem',
        17: '4.25rem',
        22: '5.5rem'
      },
      colors: {
        'manganese-black': '#22314F',
        'dark-knight': '#101828',
        'lavender-mauve': '#677796',
        'pastel-placebo': '#E7E7E7',
        'screen-glow': '#6CE9A6',
        anakiwa: '#84CAFF',
        'lavender-rose': '#DC73BB',
        tuna: '#29374A',
        mirage: '#1D2939',
        gallery: '#EBEBEB',
        concrete: '#F3F3F3',
        'green-haze': '#039855',
        iron: '#D7D9DD',
        alabaster: '#F9F9F9',
        'rangoon-green': '#181818',
        'dark-gray': '#808080',
        'burnt-sienna': '#E67444',
        'ucla-blue': '#536C8E'
      },
      boxShadow: {
        xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)'
      },
      keyframes: {
        fadein: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        },
        fadeinleft: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-100%)',
            transition: 'transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0%)'
          }
        },
        fadeinright: {
          '0%': {
            opacity: 0,
            transform: 'translateX(100%)',
            transition: 'transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0%)'
          }
        },
        flip: {
          '0%': {
            transform: 'perspective(2000px) rotateX(-100deg)'
          },
          '100%': {
            transform: 'perspective(2000px) rotateX(0)'
          }
        },
        zoomin: {
          from: {
            opacity: 0,
            transform: 'scale3d(0.3, 0.3, 0.3)'
          },
          '50%': {
            opacity: 1
          }
        }
      },
      animation: {
        fadein: 'fadein 0.15s linear',
        fadeinleft: 'fadeinleft 0.15s linear',
        fadeinright: 'fadeinright 0.15s linear',
        flip: 'flip 0.15s linear',
        zoomin: 'zoomin 0.15s linear'
      }
    }
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
        jobs: {
          words: ['_frontend developer', '_backend developer', '_fullstack developer'],
          pauseBetween: 2,
          writeSpeed: 0.2,
          caretWidth: '0.5rem',
          caretSpacing: '1rem'
        },
        about: {
          words: ['_about me'],
          writeSpeed: 0.2,
          caretWidth: '0.5rem',
          caretSpacing: '1rem',
          repeat: 0,
          eraseSpeed: 0
        },
        skills: {
          words: ['_my skills'],
          writeSpeed: 0.2,
          caretWidth: '0.5rem',
          caretSpacing: '1rem',
          repeat: 0,
          eraseSpeed: 0
        },
        resume: {
          words: ['_my resume'],
          writeSpeed: 0.2,
          caretWidth: '0.5rem',
          caretSpacing: '1rem',
          repeat: 0,
          eraseSpeed: 0
        },
        projects: {
          words: ['_my projects'],
          writeSpeed: 0.2,
          caretWidth: '0.5rem',
          caretSpacing: '1rem',
          repeat: 0,
          eraseSpeed: 0
        },
        contact: {
          words: ['_get in touch'],
          writeSpeed: 0.2,
          caretWidth: '0.5rem',
          caretSpacing: '1rem',
          repeat: 0,
          eraseSpeed: 0
        }
      }
    })
  ]
}

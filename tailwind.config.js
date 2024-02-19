/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        'screen-glow': '#6CE9A6',
        anakiwa: '#84CAFF',
        'lavender-rose': '#FAA7E0',
        'mine-shaft': '#383737',
        mirage: '#1D2939',
        gallery: '#EBEBEB',
        concrete: 'F3F3F3'
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
        typing: 'typing 2s steps(20) infinite alternate, blink .7s infinite',
        fadein: 'fadein 0.15s linear',
        fadeinleft: 'fadeinleft 0.15s linear',
        fadeinright: 'fadeinright 0.15s linear',
        flip: 'flip .15s linear',
        zoomin: 'zoomin .15s linear'
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

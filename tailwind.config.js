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
      }
    }
  },
  plugins: []
}

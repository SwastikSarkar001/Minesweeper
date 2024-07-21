/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'rowdies': ['Rowdies', 'sans-serif']
      },
      boxShadow: {
        'disabled': 'inset 0 0 2px 2px rgba(0,0,0,0.4)'
      },
      colors: {
        'primary': 'rgba(var(--primary-box), <alpha-value>)',
        'primary-lighter': 'rgba(var(--primary-box-gradient-from), <alpha-value>)',
        'primary-darker': 'rgba(var(--primary-box-gradient-to), <alpha-value>)'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f4f7fb',
          100: '#e4ecf5',
          200: '#c5d5e8',
          400: '#5c7ea8',
          500: '#3b5a7f',
          600: '#2f4863',
          700: '#243449',
          900: '#0f1620',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 22, 32, 0.04), 0 8px 24px rgba(15, 22, 32, 0.06)',
      },
    },
  },
  plugins: [],
};

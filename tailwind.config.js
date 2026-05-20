/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        ink:   { DEFAULT: '#0A0A0A', 900: '#0A0A0A', 800: '#1A1A1A', 700: '#2B2B2B' },
        paper: { DEFAULT: '#FFFFFF', 50: '#FAFAFA', 100: '#F4F4F4', 200: '#EAEAEA' },
        mute:  { 500: '#737373', 400: '#A3A3A3', 300: '#D4D4D4' },
      },
      fontFamily: {
        sans:    ['Cabinet Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Supreme', 'Cabinet Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xs': '6px', 'sm': '10px', 'md': '14px',
        'lg': '20px', 'xl': '28px', '2xl': '36px', 'pill': '999px',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(10,10,10,0.04), 0 4px 12px rgba(10,10,10,0.04)',
        'card': '0 1px 3px rgba(10,10,10,0.06), 0 8px 24px rgba(10,10,10,0.06)',
      },
    },
  },
};

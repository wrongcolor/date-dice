/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blush: {
          50: '#fff5f6',
          100: '#ffe4e8',
          200: '#ffc8d0',
          300: '#ffa1b0',
          400: '#ff6e85',
          500: '#ef4769',
          600: '#d62d54',
          700: '#b01f44',
          800: '#8c1b3a',
          900: '#701933',
        },
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(239, 71, 105, 0.35)',
      },
      keyframes: {
        roll: {
          '0%':   { transform: 'rotate(0deg) scale(1)' },
          '25%':  { transform: 'rotate(90deg) scale(1.1)' },
          '50%':  { transform: 'rotate(180deg) scale(0.9)' },
          '75%':  { transform: 'rotate(270deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        pop: {
          '0%':   { transform: 'scale(0.9)', opacity: '0' },
          '60%':  { transform: 'scale(1.03)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        roll: 'roll 0.6s ease-in-out infinite',
        pop: 'pop 0.35s ease-out',
      },
    },
  },
  plugins: [],
}

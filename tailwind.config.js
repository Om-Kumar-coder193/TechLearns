/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        techPurple: {
          50: '#f6f0fd',
          100: '#eddffb',
          200: '#dbbef7',
          300: '#c292f1',
          400: '#a35de7',
          500: '#612D92', // Official Techlearns Purple
          600: '#51227c',
          700: '#421a66',
          800: '#341551',
          900: '#2b1242',
        },
        techNavy: {
          50: '#f0f4f9',
          100: '#dbe5f2',
          200: '#b8cee5',
          300: '#8bb0d4',
          400: '#588cc0',
          500: '#0F1D38', // Official Techlearns Navy
          600: '#0B162C',
          700: '#081021',
          800: '#050a16',
          900: '#02050b',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'sweep': 'sweep 1.5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        sweep: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      }
    },
  },
  plugins: [],
}

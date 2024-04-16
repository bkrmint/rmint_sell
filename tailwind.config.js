/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  mode: 'jit',
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '5xl': ['64px', '74px'],
      '6xl': ['72px', '82px'],
      '7xl': ['80px', '90px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      width: {
        '700': '700%',
      },
      fontFamily: {
        publicsans: ['Publicsans', 'sans-serif'],
        kalam: ['Kalam', 'sans-serif'],
      },
      colors: {
        "red": "#FF0000",
        "black": "#000000",
        "h2-black": "#2B061E",
        "gray": "#464747",
        "peach": "#FEE3D3",
        "light-peach": "#FFF6F1",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px"
      },
      rotate: {
        '-30': '-30deg',
        '-45': '-45deg',
      },
      animation: {
        'fade-out': 'fade-out 4s linear infinite',
        'fade-in': 'fade-in 4s linear infinite',
      },
      keyframes: {
        'fade-out': {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  variants: {
    extend: {
      rotate: ['responsive'],
    },
  },
  plugins: [],
}
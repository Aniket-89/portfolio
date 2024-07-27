/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            primary: {
                dark: '#040306',
                light: '#FFFEFE',
                accent: '#F6EDDF',
                pop: '#3C8271',
                pop2: '#FF4425',
                Selection: '#b5a6ff',
                transparent: 'rgba(255,254,254, 0.46)',
          }
        },
        fontSize: {
          '7xl': '5rem',
          '8xl': '6rem',
        },
        fontWeight: {
          'bold': '700',
        },
        lineHeight: {
          'shorter': '1.25',
        },
        maxWidth: {
          '8xl': '90rem',
        },
        fontFamily: {
          'space': ['Space Grotesk', 'serif'],
          'pop': ['Lugrasimo', 'cursive'],
        },
        backgroundImage: {
          'gradient': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
        },
        animation: {
          'spin-slow': 'spin 3s linear infinite',
        },
        keyframes: {
          'spin-slow': {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' },
          },
        },
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
        container: {
          center: true,
          'width': '90%'
        },
        spacing: {
          '1/2': '50%',
        },
        
      },
    },
    plugins: [],
  }
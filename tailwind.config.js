/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lavender: '#C9B6E4',
        pastelBlue: '#B3C8E3',
        lilac: '#E7D5F7',
        offWhite: '#F9F9FB',
        charcoal: '#333333',
      },
      fontFamily: {
        handwritten: ['Caveat', 'cursive'],
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #C9B6E4 0%, #B3C8E3 100%)',
      },
    },
  },
  plugins: [],
};
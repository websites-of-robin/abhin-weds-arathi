/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kasavu: {
          50: '#FFFEFA',
          100: '#FDFBF4',
          200: '#FAF4E5',
          300: '#F3E5C2',
          400: '#E8CE8B',
          500: '#D4AF37', // Traditional Gold
          600: '#B89325',
          700: '#947219',
          800: '#735715',
          900: '#523E11',
        },
        temple: {
          red: '#8A1C14',
          maroon: '#6A1110',
          dark: '#3D0A0A',
          vermilion: '#B3261E',
        },
        kerala: {
          green: '#194D33',
          emerald: '#0B3B24',
          leaf: '#2D6A4F',
          moss: '#52B788',
        },
        marigold: {
          yellow: '#FFB703',
          orange: '#FB8500',
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        malayalam: ['"Anek Malayalam"', '"Manjari"', 'sans-serif'],
        sans: ['"Cinzel Decorative"', '"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Cinzel"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(212,175,55,0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 30px rgba(212,175,55,0.8))' },
        }
      }
    },
  },
  plugins: [],
}

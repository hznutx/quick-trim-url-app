import {heroui} from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./layouts/**/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '2560px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        common: {
          black: '#000',
          white: '#fff',
        },
        initial: '#CCCCCC',
        prime: '#465670',
        primary: '#4c84b5',
        default: '#8defdb',
        secondary_1: '#007991',
        secondary_2: '#4d9ee6',
        // secondary: '#A14686',
        warning_0: '#f9d29f',
        warning: '#F6B969',
        warning_1: '#f29a26',
        error: '#F24C44',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};

export default config;

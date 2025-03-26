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
        secondary: '#280F34',
        success: '#80BDAB',
        primary: '#FF9595',
        danger: '#E41655',
        warning: '#B30753',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};

export default config;

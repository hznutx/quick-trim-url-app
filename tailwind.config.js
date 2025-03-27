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
        primary: '#6096B4',
        secondary: '#93BFCF',
        success: '#BDCDD6',
        warning: '#EEE9DA',
        danger: '#F05454',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};

export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        orca: {
          50: '#f2f8ff',
          100: '#e6f1ff', 
          200: '#cce3ff',
          300: '#99c7ff',
          400: '#66abff',
          500: '#338fff',
          600: '#006fff',
          700: '#0057cc',
          800: '#004399',
          900: '#002b66',
        },
        neon: '#7c5cff'
      }
    }
  }
};

export default config;
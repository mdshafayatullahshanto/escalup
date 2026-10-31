/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        consilio: {
          darkest: '#000D0E',
          surface: '#001517',
          card: '#012B30',
          mint: '#14F3C1',
          teal: '#056671',
          lightMint: '#D8E9EB',
        },
        brand: {
          50: '#f0f6f5',
          100: '#e1edea',
          200: '#c3dbd6',
          300: '#97c0b9',
          400: '#619f97',
          500: '#2E756E', // Exact extracted brand accent from logo
          600: '#255e58',
          700: '#1e4b47',
          800: '#193d3a',
          900: '#142f2c',
          950: '#091817',
        },
        bgSurface: '#F4F6F5',
        cardSurface: '#FFFFFF',
        ink: {
          dark: '#14201D',
          muted: '#5A6A65',
          light: '#889893',
        },
        borderLine: '#DBE3E0',
      },
      fontFamily: {
        sans: ['"Golos Text"', 'Inter', 'Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Fragment Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(20, 32, 29, 0.05)',
        'card': '0 10px 30px -4px rgba(20, 32, 29, 0.07)',
        'lift': '0 20px 35px -5px rgba(46, 117, 110, 0.12)',
      },
    },
  },
  plugins: [],
}

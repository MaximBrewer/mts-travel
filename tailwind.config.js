import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        // "2xl": "1536px",
      },
      padding: {
        DEFAULT: '1.5rem',
        // sm: '2rem',
        // lg: '4rem',
        xl: '8rem',
        // '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['MTSWide', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        yellow: {
          200: "#F4FF70"
        },
        indigo: {
          300: "#B0C6FF"
        },
        rose: {
          600: "#ff0032",
          800: "#c6060f"
        }
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },

  plugins: [],
};

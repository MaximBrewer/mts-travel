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
        // tall: { raw: '(min-height: 800px)' },
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
      screens: {
        tall: { raw: '(min-height: 800px)' },
        // => @media (min-height: 800px) { ... }
      },
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
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        bounce: 'bounce 1s ease-in-out infinite',
      }
    },
  },

  plugins: [],
};




// animate-bounce	animation: bounce 1s infinite;

// @keyframes bounce {
//   0%, 100% {
//     transform: translateY(-25%);
//     animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
//   }
//   50% {
//     transform: translateY(0);
//     animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
//   }
// }
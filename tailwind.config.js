// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Great Vibes"],
      },
      keyframes: {
        'tracking-in-contract': {
          '0%': {
            letterSpacing: '1em',
            opacity: '0',
          },
          '40%': {
            opacity: '0.6',
          },
          '100%': {
            letterSpacing: 'normal',
            opacity: '1',
          },
        },
        'tracking-in-expand-fwd': {
          '0%': {
            letterSpacing: '-0.5em',
            transform: 'translateZ(-700px)',
            opacity: '0',
          },
          '40%': {
            opacity: '0.6',
          },
          '100%': {
            transform: 'translateZ(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'tracking-in-contract': 'tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
        'tracking-in-expand-fwd': 'tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          myfont: ['minionPro', 'sans-serif'],
        },
        animation: {
          blink: "blink 0.7s step-end infinite",
        },
        keyframes: {
          blink: {
            "0%, 100%": { opacity: "1" },
            "50%": { opacity: "0" },
          },
        },
      },
    },
    plugins: [],
  }
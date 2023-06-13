/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '600px',
      md: '768px',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: '960px',
      desktop: '1248px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto_regular)'],
        italic: ['var(--font-roboto_regular_italic)'],
        bold: ['var(--font-roboto_bold)'],
        medium: ['var(--font-roboto_medium)'],
    
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'ring-pink-600/60',
    'ring-sky-600/60',
    'ring-teal-600/60',
    'ring-violet-600/60',
    {
      pattern: /(bg|border|text)-(pink|sky|teal|violet)-(600)/,
    },
  ],
  theme: {
    screens: {
      sm: '576px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 960px) { ... }

      lg: '1024px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};

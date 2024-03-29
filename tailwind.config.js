module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { 
        'heading': ['Lora', 'serif'],
        'mono': ['DM Mono', 'monospace'],
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui'),
  require('@tailwindcss/typography'),],
};

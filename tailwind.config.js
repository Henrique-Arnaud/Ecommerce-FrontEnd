module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    maxWidth:{
        '3/5': '65%'
    },
    fontFamily:{
        'body': ['Open Sans'],
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

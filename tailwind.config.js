module.exports = {
  content: ['./index.html', './src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      colors: {
        positive: '#2EB2AA',
        negative: '#D62654',
        orang: "#FCBFA7"
      },
    },
  },
  daisyui: {
    themes: ['lofi'],
  },
  plugins: [require('daisyui')],
};

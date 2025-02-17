const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontFamily: {
      'sans': 'Inter var, ui-sans-serif, system-ui',
      'serif': 'Inter var, ui-sans-serif, system-ui',
    },
    fontSize: {
      sm: '0.875em',
      base: '1.3em',
      xl: '1.55em',
      '2xl': '1.563em',
      '3xl': '1.963em',
      '4xl': '2.441em',
      '5xl': '3.052em',
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        fantasy: {
          primary: '#0000ff',
          'primary-content': 'white',
          secondary: '#F6F6F6',
          neutral: '#E8E8E8',
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root'
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};

const path = require('path');

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  'pages/**/*.{js,jsx,ts,tsx,css}': ['prettier --write', 'cspell'],
  'components/**/*.{js,jsx,ts,tsx,css}': ['prettier --write', 'cspell'],
};

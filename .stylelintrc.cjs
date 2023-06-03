const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [true, prettierOptions],
    'scss/dollar-variable-pattern': null,
    'custom-property-pattern': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': null,
    'block-no-empty': null,
  },
};

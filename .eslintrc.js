const {init} = require('@fullstacksjs/eslint-config/init')

module.exports = init({
  plugins: ['eslint-plugin-unused-imports', 'sort-destructure-keys'],
  modules: {
    auto: true,
    esm: true,
    typescript: {
      parserProject: ['./tsconfig.json'],
      resolverProject: ['./tsconfig.json'],
    },
  },
  root: true,
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'import/no-cycle': ['off'],
    'cypress/unsafe-to-chain-command': ['off'],
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: ['key', 'ref', 'children', 'dangerouslySetInnerHTML'],
      },
    ],
    'react/boolean-prop-naming': [
      'error',
      {rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+'},
    ],
    'react/no-children-prop': ['error'],
    'react/hook-use-state': ['error'],
    'import/extensions': ['off'],

    'sort-destructure-keys/sort-destructure-keys': [2, {caseSensitive: false}],
  },
})

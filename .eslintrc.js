const OFF = 0;
const WARN = 1;
const ERR = 2;

module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    // Consistent use of arrow function parens
    'arrow-parens': [ERR, 'always'],

    // Doesn't handle some cases
    'function-paren-newline': OFF,
    'object-curly-newline': OFF,

    // Allow devDependencies in stories, tests and config files
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/__stories__/*.js',
          '**/__tests__/*.js',
          '**/stories/*.js',
          '**/*.config.js',
        ],
        optionalDependencies: false,
      },
    ],

    // Match max line length with Prettier
    'max-len': [
      ERR,
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],

    // Keep the same extension everywhere.
    'react/jsx-filename-extension': OFF,

    // Require component display name.
    'react/display-name': [WARN, { ignoreTranspilerName: true }],

    // Event handler naming convention.
    'react/jsx-handler-names': [
      WARN,
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],

    // Validate JSX has key prop when in array or iterator
    'react/jsx-key': ERR,

    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': ERR,
  },
};

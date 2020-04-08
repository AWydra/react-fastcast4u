module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'no-console': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/forbid-prop-types': 'off',
    'no-shadow': 'off',
    'no-nested-ternary': 'off',
    'no-unused-expressions': 'off',
    'no-case-declarations': 'off',
    'no-param-reassign': ['error', { props: false }],
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};

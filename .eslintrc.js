module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'react-app',
  ],
  rules: {
    // Loosen checks to ease integration with existing untyped packages
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    jsx: true,
    project: './tsconfig.json',
  },
}

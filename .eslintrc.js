module.exports = {
  root: true,
  env: {
    jest: true,
    browser: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
  ],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  }
}

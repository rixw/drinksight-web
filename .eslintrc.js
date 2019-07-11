module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue',
  ],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 'off',
  },
  globals: {
    $nuxt: true
  },
  plugins: [
    'prettier',
  ],
  parserOptions: {
    parser: 'babel-eslint'
  }
};

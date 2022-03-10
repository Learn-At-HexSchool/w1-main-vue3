  module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    /** 
     * extends: rules for large scope
     * recommended: can use all of vue styles
     */
    'plugin:vue/recommended',
    'eslint:recommended'

    // 'plugin:vue/vue3-essential',
    // '@vue/standard'
  ],
  parserOptions: {
    // support version lower than ES6+ 
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}

const path = require('path')

const babelConfigFile = path.resolve('webpack.config.babel.js')

module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    node: true,
    mocha: true
  },
  rules: {
    'no-console': 0,
    'no-unused-vars': 1,
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: babelConfigFile
      }
    }
  }
}
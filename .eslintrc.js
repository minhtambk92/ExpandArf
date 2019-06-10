// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  "globals": {
    "admExpandCase": true,
    "parent": true,
    "__admCpExpand": true,
    "__admLink": true
  },
  // add your custom rules here
  rules: {
    'linebreak-style': 'off',
    'func-names': 'off',
    'no-console': 'off',
    'no-eval': 'off',
    'class-methods-use-this': 'off',
    'no-continue': 'off',
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}

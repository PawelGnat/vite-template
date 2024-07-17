module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:import/recommended', 'airbnb-base'],
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.jsx', '.scss'],
        map: [
          ['@', './src'],
          ['@assets', './src/assets'],
          ['@js', './src/js'],
          ['@scss', './src/scss'],
          ['@layout', './src/layout'],
          ['@components', './src/components']
        ]
      }
    }
  },
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-console': 'error',
    'no-irregular-whitespace': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-var': 'error'
  }
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.eslint.json']
  },
  plugins: ['@typescript-eslint', 'import', 'react-hooks'],
  rules: {
    // eslint
    'no-duplicate-imports': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // @typescript-eslint/eslint-plugin
    '@typescript-eslint/ban-ts-ignore': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-this-alias': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        classes: false,
        functions: false,
        typedefs: false
      }
    ],
    '@typescript-eslint/no-useless-constructor': 'error',

    // eslint-plugin-import
    'import/export': 'error',
    'import/extensions': ['error', 'never'],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-commonjs': 'error',
    'import/no-cycle': 'error',
    'import/no-default-export': 'error',
    'import/no-deprecated': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'packages/*/{__fixtures__,__stories__,__tests__,__tests-ssr__}/**/*',
          'packages/bundle-size/webpack.config.js',
          'packages/demo/src/**/*',
          'scripts/**/*'
        ],
        optionalDependencies: false
      }
    ],
    'import/no-internal-modules': [
      'error',
      {
        allow: [
          'katex/dist/katex.css',
          'react-dom/server',
          'react-dom/test-utils',
          'redux-saga/effects'
        ]
      }
    ],
    'import/no-mutable-exports': 'error',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true
      }
    ],
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external', 'internal'],
          ['parent', 'sibling', 'index', 'unknown']
        ],
        'newlines-between': 'always'
      }
    ],

    // eslint-plugin-react
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/prop-types': 'off',

    // eslint-plugin-react-hooks
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}

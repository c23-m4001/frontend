module.exports = {
  env: {
    es6: true,
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  // To Use already setted rules
  extends: ['plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // To Configure Manually
  plugins: ['react', 'import'],
  rules: {
    'eol-last': ['error', 'always'],
    'object-curly-spacing': ['warn', 'always'],
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'max-len': [
      'warn',
      {
        code: 80,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],

    'react/jsx-key': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-boolean-value': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'error',

    'import/prefer-default-export': 'off',

    // 'import/order': [
    //   'error',
    //   {
    //     alphabetize: {
    //       caseInsensitive: true,
    //       order: 'asc',
    //     },
    //     groups: [
    //       ['builtin', 'external'],
    //       'internal',
    //       ['parent', 'sibling', 'index'],
    //     ],
    //     'newlines-between': 'always',
    //   },
    // ],
    // 'sort-imports': [
    //   'error',
    //   {
    //     allowSeparatedGroups: true,
    //     ignoreCase: true,
    //     ignoreDeclarationSort: true,
    //     ignoreMemberSort: false,
    //     memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    //   },
    // ],
  },
}

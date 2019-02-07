module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/essential', 'plugin:prettier/recommended'],

  rules: {
    indent: 0,
    'no-tabs': 0,
    'eol-last': 'off',
    'generator-star-spacing': 0,
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/attribute-hyphenation': 'ignore',
    'vue/component-name-in-template-casing': [
      'PascalCase',
      {
        ignores: ['/^b-/','swiper-slide']
      }
    ],
    'vue/html-end-tags': 'error'
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: [
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    '@vue/prettier'
  ],

  extends: [
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    '@vue/prettier'
  ]
};

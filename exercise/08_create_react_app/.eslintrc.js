module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/prop-types': [1, { ignore: ['children'] }],

    'no-console': 0,
    'no-return-assign': 0,
  },
};
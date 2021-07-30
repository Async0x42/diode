module.exports = {
  extends: ['@antfu', '@vue/prettier', '@vue/prettier/@typescript-eslint'],
  rules: {
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': 'off', // doesn't work well with script setup -> ts
  },
};

module.exports = {
  extends: ['@commitlint/config-conventional', '@uphold/commitlint-config'],
  plugins: ['commitlint-plugin-tense'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'subject-case': [2, 'always', 'lower-case'],
    'tense/subject-tense': [2, 'always'],
    'type-empty': [2, 'never'],
  },
}

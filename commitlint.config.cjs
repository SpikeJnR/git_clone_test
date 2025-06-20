module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'revert',
        'perf',
        'build',
        'ci',
      ],
    ],
    'scope-enum': [2, 'always', ['api', 'ui', 'docs', 'core', 'config']],
    'subject-case': [2, 'always', 'sentence-case'],
  },
};

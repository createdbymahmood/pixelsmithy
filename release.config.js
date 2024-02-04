module.exports = {
  branches: [
    'main', // Release from main branch
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          // Define release types based on commit messages
          {type: 'feat', release: 'minor'},
          {type: 'fix', release: 'patch'},
          {type: 'perf', release: 'patch'},
          {type: 'chore', release: 'patch'},
          {type: 'docs', release: 'patch'},
          {type: 'refactor', release: 'patch'},
          {type: 'test', release: 'patch'},
          {type: 'build', release: 'patch'},
          {type: 'ci', release: 'patch'},
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md', // Path to CHANGELOG file
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/github',
      {
        assets: ['CHANGELOG.md'], // Include CHANGELOG in releases
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'yarn.lock', 'CHANGELOG.md'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
  preset: 'angular', // Use Angular commit message convention (optional)
  tagFormat: 'v${version}', // Custom tag format
  verifyConditions: [
    // Add verification steps (optional)
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/github',
    '@semantic-release/git',
  ],
  debug: true, // Enable debug mode for troubleshooting
  dryRun: false, // Disable dry run (set to true for testing)
}

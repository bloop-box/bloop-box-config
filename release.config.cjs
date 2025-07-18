module.exports = {
    branches: [
        'main',
    ],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        [
            '@semantic-release/npm',
            {
                npmPublish: false,
            }
        ],
        [
            '@semantic-release/exec',
            {
                prepareCmd: [
                    'OUT_DIR=dist-release DEPLOY_BASE=/bloop-box-config/ pnpm build',
                    'OUT_DIR=bloop-box-config-${nextRelease.version} pnpm build',
                    'zip -9 -r bloop-box-config-${nextRelease.version}.zip bloop-box-config-${nextRelease.version}',
                ].join(' && '),
            }
        ],
        [
            '@semantic-release/github',
            {
                assets: [
                    'bloop-box-config-*.zip'
                ],
            },
        ],
        [
            '@semantic-release/git',
            {
                assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'],
                message: 'chore(release): set `package.json` to ${nextRelease.version} [skip ci]'
                    + '\n\n${nextRelease.notes}',
            },
        ],
    ],
};

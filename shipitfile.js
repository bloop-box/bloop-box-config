module.exports = shipit => {
    require('shipit-deploy')(shipit);

    shipit.initConfig({
        default: {
            deployTo: '/home/furvester/boop-box-config',
            repositoryUrl: 'git@gitlab.com:furvester/boop-box-config.git',
            branch: 'main',
            dirToCopy: 'dist',
            keepReleases: 3,
        },
        production: {
            servers: 'furvester@dasprids.de',
        },
    });

    shipit.on('fetched', () => {
        shipit.start('build');
    });

    shipit.blTask('build', async () => {
        await shipit.local('npm install', {cwd: shipit.workspace});
        await shipit.local('npm run build', {cwd: shipit.workspace});
    });
};

Package.describe({
  name: 'hausor:fabricjs',
  version: '0.0.1',
  summary: 'Meteor package wrapping fabricjs library',
  git: 'https://github.com/Hausor/hausor-fabric',
  documentation: 'README.md'
});

Npm.depends({
  "jsdom": "0.11.1",
  "xmldom": "0.1.19",
  "canvas": "1.2.3"
})

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('fabric.js');
  api.addFiles('server/require.js', "server");
  api.addFiles('lib/fabric.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('hausor:fabricjs');
  api.addFiles('fabricjs-tests.js');
});

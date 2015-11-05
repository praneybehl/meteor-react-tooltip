Package.describe({
  name: 'praneybehl:react-tooltip',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('praneybehl:react-tooltip');
  api.addFiles('react-tooltip-tests.js');
});

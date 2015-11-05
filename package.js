Package.describe({
  name: 'praneybehl:react-tooltip',
  version: '0.8.4',
  summary: 'Simple Tooltip for React.js packaged for Meteor',
  git: 'https://github.com/praneybehl/meteor-react-tooltip',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('react@0.1.13');
  api.use('cosmos:browserify@0.8.3', 'client');
  api.addFiles('package.browserify.js', 'client');
  api.addFiles('package.browserify.options.json', 'client');
  api.addFiles('react-tooltip.min.css', 'client');
  api.export('ReactTooltip');
});

Npm.depends({
  "react-tooltip": "0.8.4",
  "exposify": "0.5.0"
});

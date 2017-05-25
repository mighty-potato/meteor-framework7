Package.describe({
  name: 'keanghok:framework7',
  version: '1.0.4',
  summary: 'Framework7 (v1.6.0) with Meteor. You can choose iOS or Android theme.',
  git: 'https://github.com/lastday4you/meteor-framework7.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.addFiles('framework7/dist/js/framework7.min.js', 'client');

  api.addAssets([
    'framework7/dist/css/framework7.ios.colors.css',
    'framework7/dist/css/framework7.ios.colors.min.css',
    'framework7/dist/css/framework7.ios.css',
    'framework7/dist/css/framework7.ios.min.css',
    'framework7/dist/css/framework7.ios.rtl.css',
    'framework7/dist/css/framework7.ios.rtl.min.css',
    'framework7/dist/css/framework7.material.colors.css',
    'framework7/dist/css/framework7.material.colors.min.css',
    'framework7/dist/css/framework7.material.css',
    'framework7/dist/css/framework7.material.min.css',
    'framework7/dist/css/framework7.material.rtl.css',
    'framework7/dist/css/framework7.material.rtl.min.css',
    'Framework7-Icons/css/framework7-icons.css',
    'Framework7-Icons/fonts/Framework7Icons-Regular.eot',
    'Framework7-Icons/fonts/Framework7Icons-Regular.ttf',
    'Framework7-Icons/fonts/Framework7Icons-Regular.woff',
    'Framework7-Icons/fonts/Framework7Icons-Regular.woff2'
  ], 'client');

  api.addAssets([
    'framework7/dist/img/i-f7-ios.png',
    'framework7/dist/img/i-f7-material.png'
    ], 'client');

});

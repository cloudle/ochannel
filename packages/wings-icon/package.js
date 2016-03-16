Package.describe({
  summary: "Icon package for wingsEngine",
  version: "1.0.0",
  git: ""
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');

  api.addFiles([
    //'font/wings.eot',
    //'font/wings.svg',
    //'font/wings.ttf',
    //'font/wings.woff',
    'css/animation.css',
    'css/wings-embedded.css'
    //'wings.overrides.css'
    ], 'client');
});
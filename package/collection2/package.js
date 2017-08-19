/* global Package */

Package.describe({
  name: "estacks:collection2-core",
  summary: "Collection2 with hard dependency",
  version: "2.0.1",
  documentation: "../../README.md",
  git: "https://github.com/estacks/meteor-collection2-core.git"
});

Npm.depends({
  "simpl-schema": "^0.3.2"
});

Package.onUse(function(api) {
  api.use('underscore@1.0.0');
  api.use('mongo@1.0.4');
  api.imply('mongo');
  api.use('minimongo@1.0.0');
  api.use('ejson@1.0.0');
  api.use('raix:eventemitter@0.1.3');
  api.use('ecmascript@0.6.1');

  // Allow us to detect 'insecure'.
  api.use('insecure@1.0.0', {weak: true});

  api.mainModule('collection2.js');

  api.export('Collection2');
});

'use strict';

module.exports = angular
  .module('ae.services.echoapi', ['ae.registry'])
  .config(require('./echo-config'))
  .name;

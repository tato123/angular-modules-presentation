'use strict';

var angular = require('angular');

angular
	.module('ae', [
		// external libs
		require('angular-ui-router'),
		require('echoapi')
		// internal moduels
		require('./browse'),
		require('./registry'),
		require('./operations'),
		require('./api-foo'),

	])
	.config( require('./app/routes') );

angular
    .element(document)
    .ready(function() {
        angular.bootstrap(document, ['ae']);
    });

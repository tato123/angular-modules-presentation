'use strict';

var angular = require('angular');

angular
	.module('ae', [
		require('angular-ui-router'),
		require('../browse'),
		require('../registry'),
		require('../operations'),
		require('../api-foo'),
		require('echoapi')
	])
	.config( require('./routes') );

angular
    .element(document)
    .ready(function() {
        angular.bootstrap(document, ['ae']);
    });

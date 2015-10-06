'use strict';

var angular = require('angular');

angular
	.module('ae', [
		require('angular-ui-router'), 
		require('./api-list'),
		require('./api-service-browse'),
		require('./api-registry')
	]);

angular
    .element(document)
    .ready(function() {
        angular.bootstrap(document, ['ae']);
    });
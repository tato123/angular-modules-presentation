'use strict';

module.exports = angular
	.module('ae.api-list', [])
	.directive('apiList', require('./api-list-directive'))
	.name;
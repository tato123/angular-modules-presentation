'use strict';

module.exports = angular
	.module('ae.registry', [])
	.provider('apiRegistry', require('./api-registry-provider'))
	.name;
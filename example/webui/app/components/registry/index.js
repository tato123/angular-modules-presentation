'use strict';

module.exports = angular
	.module('ae.registry', [])
	.provider('apiRegistry', require('./registry-provider'))
	.name;
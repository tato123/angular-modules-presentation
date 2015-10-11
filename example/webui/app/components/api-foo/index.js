'use strict';

module.exports = angular
	.module('ae.api.foo', ['ae.registry'])
	.config(require('./foo-config'))
	.name;
'use strict';

module.exports = angular
	.module('ae.operations', [])
	.controller('operationsCtrl', require('./operations-controller') )
	.config(require('./routes'))
	.name;
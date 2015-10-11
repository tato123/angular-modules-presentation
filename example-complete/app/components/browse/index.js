'use strict';

module.exports = angular
	.module('ae.service', [])
	.controller('browseCtrl', require('./browse-controller') )
	.config(require('./routes'))
	.name;
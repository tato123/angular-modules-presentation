'use strict';

module.exports = browseCtrl;

var _ = require('lodash');

function browseCtrl($scope, apiRegistry, $log) {

	$scope.apis = [];

	function getServices() {
		apiRegistry.get() 
			.then(function(services) {
				_.reduce(services, function(c, item) {
					c.push(item);
					return c;
				}, $scope.apis);
			})
			.catch(function(error) {
				$log.error('Unable to get all services', error);
			})
	}

	function activate() {
		getServices();
	}

	activate();

}
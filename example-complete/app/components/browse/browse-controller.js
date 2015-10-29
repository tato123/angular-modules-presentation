'use strict';

module.exports = browseCtrl;

var _ = require('lodash');

/**
* @description
* Browse controller is responsible for the layout and display
* of all of the available api services
*/
function browseCtrl($scope, apiRegistry, $log) {

	$scope.apis = null;

	function getServices() {
		apiRegistry.get()
			.then(function(services) {
				$scope.apis = services;
			})
			.catch(function(error) {
				$log.error('Unable to get all services');
			})
	}

	function activate() {
		getServices();
	}

	activate();

	$scope.$on('$destroy', function() {
		$scope.apis = null;
	});
}

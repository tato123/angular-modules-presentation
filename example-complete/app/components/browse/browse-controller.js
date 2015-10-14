'use strict';

module.exports = browseCtrl;

var _ = require('lodash');

/**
* @description
* Browse controller is responsible for the layout and display
* of all of the available api services
*/
function browseCtrl($scope, apiRegistry, $log) {

	$scope.apis = [];

	function getServices() {
		apiRegistry.get()
			.then(function(services) {
				_.reduce(services, function(c, item) {
					c.push(item);
					return c;
				}, $scope.apis);
				services = null;
			})
			.catch(function(error) {
				$log.error('Unable to get all services');
			})
	}

	function activate() {
		getServices();
	}

	activate();

}

'use strict';

module.exports = operationsCtrl;

function operationsCtrl($scope, $stateParams, apiRegistry, $log) {

	var _ = require('lodash');
	$scope.service = undefined;

	function getAllOperations() {

		if ( !_.has($stateParams, 'id') || _.isUndefined($stateParams.id) ) {
			throw new Error('State params [id] was not provided');
		}

		apiRegistry.get($stateParams.id)
			.then( function(service) {
				$scope.service = service;
			})
			.catch( function(error) {
				$log.error('Unable to get all operations', error);
			});
	}

	function activate() {
		getAllOperations();
	}

	activate();

	$scope.$on('$destroy', function() {
			// destroy our reference to prevent a memory leak
			// due to ng-repeat
			$scope.service = null;
			delete $scope.service;
	});

}

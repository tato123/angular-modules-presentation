'use strict';

var _ = require('lodash');

module.exports = AEListDirective;

function AEListDirective() {

	return {
		restrict: 'E',
		templateUrl: 'components/api-list/api-list.html',
		link: postLink,
		controller: AEListController,
		controllerAs: 'apiCtrl',
		bindToController: true
	}

	function postLink($scope, element, attrs) {

	}
}

function AEListController(apiRegistry, $log) {

	var vm = this;
	vm.apis = [];


	function getServices() {
		apiRegistry.getApis() 
			.then(function(services) {
				_.reduce(services, function(c, item) {
					c.push(item);
					return c;
				}, vm.apis);
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
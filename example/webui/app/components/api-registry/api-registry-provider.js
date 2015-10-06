'use strict';

module.exports = RegistryProvider;

function RegistryProvider() {

	var configs = [{
			name: 'Ad Exchange Buyer API',
			version: 'v1.2',
			description: 'Gives Ad Exchange seller users access to their inventory and the ability to generate reports'
		}];

	this.$get = factory;

	function addService(config) {
		configs.push = config;
	}

	function factory($q) {

		return { 
			getApis : getApis
		};

		function getApis() {
			return $q.when(configs);
		}
	}
}
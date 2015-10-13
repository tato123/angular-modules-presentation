'use strict';

module.exports = RegistryProvider;



function RegistryProvider() {
	
	var _ = require('lodash');

	var apis = [];

	// All of our provider methods including our service implementation via $get
	this.$get = factory;
	this.register = register;

	function register(config) {
		apis.push(config);
		return this;
	}

	function factory($q) {

		return {
			get : get
		};

		function get(id) {
			if ( _.isUndefined(id) ) {
				return $q.when(apis);
			}

			return $q.when( _.find(apis, {id:id}) );

		}
	}
}

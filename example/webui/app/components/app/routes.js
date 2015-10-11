'use strict';

module.exports = Config;

function Config($stateProvider, $urlRouterProvider) {

	// Now set up the states
	$stateProvider
		.state('app', {
			url: '/',
			templateUrl: 'components/app/app.html'
		});

}
'use strict';

module.exports = Config;

function Config($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');
	
	// Now set up the states
	$stateProvider
		.state('app', {
			url: '/',
			templateUrl: 'components/app/app.html'
		});

}

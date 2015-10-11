'use strict';

module.exports = routeConfig;

function routeConfig($stateProvider, $urlRouterProvider) {


  //
  // Now set up the states
  $stateProvider
    .state('app.services.operations', {
      url: '/operations/:id',
      views: {
        'details@app': {
          templateUrl: 'components/operations/operations.html',
          controller: 'operationsCtrl'
        }
      }
    });

}
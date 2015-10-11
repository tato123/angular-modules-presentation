'use strict';

module.exports = Config;

function Config($stateProvider, $urlRouterProvider) {

  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.when('/', '/services');
  $urlRouterProvider.when('', '/services');
  //
  // Now set up the states
  $stateProvider
    .state('app.services', {
      url: 'services',
      views: {
        'details@app' : {
          templateUrl: 'components/browse/browse.html',
          controller: 'browseCtrl'    
        }
      }
      
    });

}
'use strict';

module.exports = Config;

function Config($stateProvider, $urlRouterProvider) {

  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/services");
  //
  // Now set up the states
  $stateProvider
    .state('services', {
      url: "/services",
      views : {
        'content@' : {
          templateUrl: "components/api-service-browse/browse.html"
        }
      }
      
    })
    .state('services.operations', {
      url: "/services/operations",
      views : {
        'content@' : {
          templateUrl: "components/api-service-browse/list-operations.html"    
        }
      }
      
    });

}
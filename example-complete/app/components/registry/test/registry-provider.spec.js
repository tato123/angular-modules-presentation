'use strict';

require("angular-mocks");

describe("Testing registry provider", function() {


  beforeEach(angular.mock.module('ae'));

  var apiRegistry;
  var $rootScope;

  beforeEach(inject(function(_apiRegistry_, _$rootScope_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    apiRegistry = _apiRegistry_;
    $rootScope = _$rootScope_;
  }));

  it("verify our getter is available", function() {
    expect(apiRegistry.get).toBeDefined();
  });

  it("verify we get undefined for an invalid service", function(done) {
    apiRegistry.get('123')
      .then(function(service) {
        expect(service).toBe(undefined);
        done();
      });

    // force the promise to resolve
    $rootScope.$digest();

  });

});

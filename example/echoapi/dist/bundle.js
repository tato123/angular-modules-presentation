(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = echoConfig;

function echoConfig(apiRegistryProvider) {

  	apiRegistryProvider
  		.register({
  			id: 'api_echo',
  			name: 'ECHO API',
  			version: 'v1.0',
  			description: 'Based on dolphin technology, allows us to echo a response',
  			operations: [{
  				name: 'echoapi.echo.get',
  				description: 'Responds by sending a response based on the query parameter echo',
  				verb: 'GET'
  			}, {
  				name: 'adexchangebuyer.random.get',
  				description: 'Responds with a random funny message',
  				verb: 'GET'
  			}]
  		});
}

},{}],2:[function(require,module,exports){
'use strict';

module.exports = angular
  .module('ae.services.echoapi', ['ae.registry'])
  .config(require('./echo-config'))
  .name;

},{"./echo-config":1}]},{},[2])


//# sourceMappingURL=bundle.js.map

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

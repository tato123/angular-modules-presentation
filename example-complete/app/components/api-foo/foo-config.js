'use strict';

module.exports = fooConfig;

function fooConfig(apiRegistryProvider) {

	apiRegistryProvider
		.register({
			id: 'ad_exch',
			name: 'Ad Exchange Buyer API',
			version: 'v1.2',
			description: 'Gives Ad Exchange seller users access to their inventory and the ability to generate reports',
			operations: [{
				name: 'adexchangebuyer.accounts.get',
				description: 'Gets one account by id',
				verb: 'GET'
			}, {
				name: 'adexchangebuyer.accounts.get',
				description: 'Gets one account by id',
				verb: 'POST'
			}, {
				name: 'adexchangebuyer.accounts.get',
				description: 'Gets one account by id',
				verb: 'PUT'
			}, {
				name: 'adexchangebuyer.accounts.get',
				description: 'Gets one account by id',
				verb: 'DELETE'
			}]
		})
		.register({
			id: 'pumpkin_machine',
			name: 'Pumpkin Buyer API',
			version: 'v1.1',
			description: 'Gives you the ability to buy pumpkins',
			operations: [{
				name: 'adexchangebuyer.accounts.get',
				description: 'Gets one account by id',
				verb: 'GET'
			}, {
				name: 'adexchangebuyer.accounts.put',
				description: 'Gets one account by id',
				verb: 'PUT'
			}]
		});

}

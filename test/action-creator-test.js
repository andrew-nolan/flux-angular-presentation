var should = require('chai').should();
var ActionCreator = require('../src/action-creator.js');
var Dispatcher = require('../src/app-dispatcher.js');

describe('An Action Creator', function() {
	it('should create an action to add an item to a cart', function() {
		var testPayload = {
			name: "new item",
			cost: 19.99
		};
		ActionCreator.addItemToCart(testPayload);
		_type.should.equal('add-item');
		_item.name.should.equal(testPayload.name);
		_item.cost.should.equal(testPayload.cost);
	})
});

var _type;
var _item;

var TestStore = {
	dispatcherCallback: Dispatcher.register(function(payload) {
		_type = payload.actionType;
		_item = payload.item;
	})
};
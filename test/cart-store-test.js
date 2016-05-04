var should = require('chai').should();
var ActionCreator = require('../src/action-creator.js');
var CartStore = require('../src/cart-store.js');
var Constants = require('../src/constants.js');

describe('A cart store', function() {
	it('should add an item to the cart', function(done) {
		var newItem = {
			name: 'new item',
			cost: 19.99
		};
		registerStoreListener(done)
		ActionCreator.addItemToCart(newItem);
		_invocationCount.should.equal(1);
		_cartContents[0].should.deep.equal(newItem);
	});
});

var _invocationCount = 0;
var _cartContents;

var registerStoreListener = function(done){
	CartStore.on(Constants.CART_UPDATE, function() {
		_cartContents = CartStore.getItems();
		++_invocationCount;
		done();
	});
}
var EventEmitter = require('events').EventEmitter;
var Assign = require('object-assign');
var Dispatcher = require('./app-dispatcher.js');
var Constants = require('./constants.js');

var _items = [];

var CartStore = Assign({}, EventEmitter.prototype, {
	getItems: function() {
		return _items;
	}
});

Dispatcher.register(function(action) {
	var actionType = action.actionType;
	if(actionType === Constants.ADD_ITEM) {
		_items.push(action.item);
		CartStore.emit(Constants.CART_UPDATE);
		console.log(Constants.CART_UPDATE + ' change emitted');
	}
});

module.exports = CartStore;
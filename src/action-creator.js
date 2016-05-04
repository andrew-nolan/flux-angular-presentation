var Dispatcher = require('./app-dispatcher.js');
var Constants = require('./constants.js');

var ActionCreator = {
	addItemToCart: function(data) {
		Dispatcher.dispatch({
			actionType: Constants.ADD_ITEM,
			item: data
		});
	}
};

module.exports = ActionCreator;
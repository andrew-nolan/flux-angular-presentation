var dispatcher = require('./app-dispatcher.js');
var constants = require('./constants.js');

var ActionCreator = {
	addItemToCart: function(data) {
		dispatcher.dispatch({
			actionType: constants.ADD_ITEM,
			item: data
		});
	}
};

module.exports = ActionCreator;
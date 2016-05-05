'use strict';

var CartStore = require('./cart-store.js');
var Constants = require('./constants.js');
var ActionCreator = require('./action-creator.js');
var shoppingCart = angular.module('shoppingCart', []);

shoppingCart.controller('ShoppingCartController', ['$scope', function($scope) {
    $scope.cart = CartStore.getItems();

    CartStore.on(Constants.CART_UPDATE, function() {
    	$scope.cart = CartStore.getItems();
    });

    $scope.name = 'Enter the name of the item';
    $scope.cost = 'Enter the cost of the item';
    $scope.submit = function() {
    	var newItem = {
    		name: $scope.name,
    		cost: $scope.cost
    	};
    	ActionCreator.addItemToCart(newItem);
    };
}]);
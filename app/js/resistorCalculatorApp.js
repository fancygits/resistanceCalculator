var app = angular.module('resistorCalculator', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'home.html',
    controller : 'resistorController',
    controllerAs : 'ctrl'
  })
  .otherwise('/');
});

app.controller('resistorController', function() {
	var self = this;
    self.author = 'Luke Johnson';
});

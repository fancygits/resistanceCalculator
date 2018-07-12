var app = angular.module("resistorCalculator", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/home", {
    templateUrl : "home.html",
    controller : "resistorController",
    controllerAs : "ctrl"
  })
  .otherwise({
      templateUrl : "home.html"
	  controller : "resistorController",
      controllerAs : "ctrl"
  });
});

app.controller("resistorController", function(contestantsRegistry) {
    this.author = 'Luke Johnson';
});

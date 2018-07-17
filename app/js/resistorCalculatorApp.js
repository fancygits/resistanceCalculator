var app = angular.module('resistorCalculator', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'home.html',
		controller : 'resistorController',
		controllerAs : 'ctrl'
	})
	.when('/3band', {
		templateUrl : '3band.html',
		controller : 'resistorController',
		controllerAs : 'ctrl'
	})
	.when('/4band', {
		templateUrl : '4band.html',
		controller : 'resistorController',
		controllerAs : 'ctrl'
	})
	.when('/5band', {
		templateUrl : '5band.html',
		controller : 'resistorController',
		controllerAs : 'ctrl'
	})
	.when('/6band', {
		templateUrl : '6band.html',
		controller : 'resistorController',
		controllerAs : 'ctrl'
	})
	.otherwise('/');
});

app.controller('resistorController', function() {
	var self = this;
	self.author = 'Luke Johnson';

	self.bands = [
	//  [color, 	1st, 	2nd, 	3rd, 	multiplier,	tol., 	temp]
		['black', 	0, 		0, 		0, 		1,	  'Ω', 	null,	250],
		['brown',	1, 		1, 		1, 		10,   'Ω', 	1, 		100],
		['red', 	2, 		2, 		2, 		100,  'Ω', 	2, 		50],
		['orange', 	3, 		3, 		3, 		1,   'KΩ', 	null, 	15],
		['yellow', 	4, 		4, 		4, 		10,  'KΩ', 	null, 	25],
		['green', 	5, 		5, 		5, 		100, 'KΩ', 	0.5, 	20],
		['blue', 	6, 		6, 		6, 		1,   'MΩ', 	0.25, 	10],
		['violet', 	7, 		7, 		7, 		10,  'MΩ', 	0.1, 	5],
		['grey', 	8, 		8, 		8, 		100, 'MΩ', 	0.05, 	5],
		['white', 	9,		9, 		9, 		1,   'GΩ', 	null, 	null],
		['gold', 	null,	null, 	null, 	0.1,  'Ω', 	5, 		null],
		['silver', 	null, 	null, 	null, 	0.01, 'Ω', 	10, 	null],
		['blank', 	null, 	null,	null, 	null, 'Ω', 	20, 	null],
	];

	self.bandIndex = ['color', '1st', '2nd', '3rd', 'Multiplier', 'Symbol', 'Tolerance', 'Thermal Coefficient'];
	self.threeBand = [1, 2, 4];
	self.fourBand =  [1, 2, 4, 6];
	self.fiveBand =  [1, 2, 3, 4, 6];
	self.sixBand = 	 [1, 2, 3, 4, 6, 7];


	self.getColors = function(column) {
		var colors = [];
		for (var band = 0; band < self.bands.length; band++) {
			if (self.bands[band][column] !== null) {
				colors.push(self.bands[band][0]);
			}
		}
		return colors;
	};
});

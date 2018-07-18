var app = angular.module('resistorApp', ['ngRoute']);

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

app.controller('resistorController', function(resistanceCalculator) {
	var self = this;
	self.author = 'Luke Johnson';

	self.bands = [
	//  [color, 	1st, 	2nd, 	3rd, 	multiplier,	tol., 	temp]
		['black', 	0, 		0, 		0, 		1,			null,	250],
		['brown',	1, 		1, 		1, 		10,			1, 		100],
		['red', 	2, 		2, 		2, 		100,		2, 		50],
		['orange', 	3, 		3, 		3, 		1000,		null, 	15],
		['yellow', 	4, 		4, 		4, 		10000,		null, 	25],
		['green', 	5, 		5, 		5, 		100000,		0.5, 	20],
		['blue', 	6, 		6, 		6, 		1000000,	0.25, 	10],
		['violet', 	7, 		7, 		7, 		10000000,	0.1, 	5],
		['grey', 	8, 		8, 		8, 		100000000,	0.05, 	5],
		['white', 	9,		9, 		9, 		1000000000, null, 	null],
		['gold', 	null,	null, 	null, 	0.1,		5, 		null],
		['silver', 	null, 	null, 	null, 	0.01,		10, 	null],
		['blank', 	null, 	null,	null, 	null,		20, 	null],
	];

	self.bandIndex = ['color', '1st', '2nd', '3rd', 'Multiplier', 'Tolerance', 'Thermal Coefficient'];
	self.threeBand = [1, 2, 4];
	self.fourBand =  [1, 2, 4, 5];
	self.fiveBand =  [1, 2, 3, 4, 5];
	self.sixBand = 	 [1, 2, 3, 4, 5, 6];

	self.getColors = function(column) {
		var colors = [];
		for (var band = 0; band < self.bands.length; band++) {
			if (self.bands[band][column] !== null) {
				colors.push(self.bands[band][0]);
			}
		}
		return colors;
	};

	self.getResistance = function() {
		return resistanceCalculator.calculateResistance(self.resistor);
	}
});

app.factory('resistanceCalculator', function() {
	return {
		calculateResistance: function(resistor) {
			var resistance = "";
			var sum = "";
			for (var band = 1; band < 3; band++) {
				if (resistor[band] != undefined) {
					sum += resistor[band];
				}
			}
			resistance = numberSuffix(parseInt(sum) * resistor[4]);
			if (resistor[5]) {
				resistance = resistance + " ± " + resistor[5] + "%"
			}
			if (resistor[6]) {
				resistance = resistance + " " + resistor[6] + "ppm/K"
			}
			return resistance;
		}
	}
});

function numberSuffix(longNumber) {
	if (longNumber === 0) {
		return '0Ω';
	}
	var sciNot = (longNumber).toPrecision(2).split("e");

	var suffixes = ['Ω', 'KΩ', 'MΩ', 'GΩ'];
	var suffixIndex;
	if (sciNot.length === 1) {
		suffixIndex = 0;
	} else {
		suffixIndex = Math.floor(Math.min(sciNot[1].slice(1), 12) / 3);
	}

	var newNumber;
	if (suffixIndex < 1) {
		newNumber = longNumber.toFixed(2);
	} else {
		newNumber = (longNumber / Math.pow(10, suffixIndex * 3) ).toFixed(3);
	}

	if (newNumber > 0) {
		newNumber = Math.abs(newNumber);
	}
	return newNumber + suffixes[suffixIndex];
}

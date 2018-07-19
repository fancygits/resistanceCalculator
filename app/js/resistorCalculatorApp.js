var app = angular.module('resistorApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		redirectTo: '/home'
	})
	.when('/home', {
		templateUrl : 'home.html',
		controller : 'resistorController',
		controllerAs : 'ctrl'
	})
	.otherwise('/home');
});

app.controller('resistorController', function(resistanceCalculator) {
	var self = this;
	self.author = 'Luke Johnson';
	self.resistor = [];
	self.bands = [
	// 	Data taken from https://en.wikipedia.org/wiki/Electronic_color_code#Resistor_color-coding
	//  [color, 	1st, 	2nd, 	3rd, 	multiplier,	tol., 	temp]
		['black', 	null, 	0, 		0, 		1,			null,	250],
		['brown',	1, 		1, 		1, 		10,			1, 		100],
		['red', 	2, 		2, 		2, 		100,		2, 		50],
		['orange', 	3, 		3, 		3, 		1000,		null,	15],
		['yellow', 	4, 		4, 		4, 		10000,		5, 		25],
		['green', 	5, 		5, 		5, 		100000,		0.5, 	20],
		['blue', 	6, 		6, 		6, 		1000000,	0.25, 	10],
		['violet', 	7, 		7, 		7, 		10000000,	0.1, 	5],
		['grey', 	8, 		8, 		8, 		100000000,	0.05, 	1],
		['white', 	9,		9, 		9, 		1000000000, null, 	null],
		['gold', 	null,	null, 	null, 	0.1,		5, 		null],
		['silver', 	null, 	null, 	null, 	0.01,		10, 	null],
		['pink', 	null, 	null,	null,	0.001,		null,	null],
		['blank', 	null, 	null,	null, 	null,		20, 	null],
	];

	self.bandIndex = ['color', '1st', '2nd', '3rd', 'Multiplier', 'Tolerance', 'Thermal Coefficient'];
	self.bandCount = [1, 2, 4];

	self.setBandCount = function(bandCount) {
		self.resistor = [];
		if (bandCount === 3) {
			self.bandCount = [1, 2, 4];
		} else if (bandCount === 4) {
			self.bandCount = [1, 2, 4, 5];
		} else if (bandCount === 5) {
			self.bandCount = [1, 2, 3, 4, 5];
		} else {
			self.bandCount = [1, 2, 3, 4, 5, 6];
		}
	};

	self.getBandValue = function(color, column) {
		for (var row = 0; row < self.bands.length; row++) {
			if (self.bands[row][0] === color) {
				return self.bands[row][column];
			}
		}
	};

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
	};
});

app.factory('resistanceCalculator', function() {
	return {
		calculateResistance: function(resistor) {
			var resistance = "", sum = "", significantDigits = "", tolerance = "", temperature = "";
			for (var band = 1; band < 4; band++) {
				if (resistor[band] != null) {
					sum += resistor[band];
				}
			}
			significantDigits = numberSuffix(parseInt(sum) * resistor[4]);
			if (resistor[5]) {
				tolerance = " ± " + resistor[5] + "% ";
			} else {
				tolerance = " ± 20% ";
			}
			if (resistor[6]) {
				temperature = resistor[6] + " ppm/K";
			}
			resistance = significantDigits + tolerance + temperature;
			return resistance;
		}
	}
});


/** Inspired by https://stackoverflow.com/questions/10599933/convert-long-number-into-abbreviated-string-in-javascript-with-a-special-shortn **/
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

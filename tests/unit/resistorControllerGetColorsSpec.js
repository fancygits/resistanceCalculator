describe('resistorController#getColors', function() {
	beforeEach(module('resistorApp'));

	var ctrl;

	beforeEach(inject(function($controller) {
		ctrl = $controller('resistorController');
	}));

	it('should return 10 colors for the 1st band', function() {
		expect(ctrl.getColors(1)).toEqual(["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]);
	});

	it('should return 10 colors for the 2nd band', function() {
		expect(ctrl.getColors(2)).toEqual(["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]);
	});

	it('should return 10 colors for the 3rd band', function() {
		expect(ctrl.getColors(3)).toEqual(["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]);
	});

	it('should return 12 colors for the multiplier band', function() {
		expect(ctrl.getColors(4)).toEqual(["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white", "gold", "silver"]);
	});

	it('should return 9 colors for the tolerance band', function() {
		expect(ctrl.getColors(5)).toEqual(["brown", "red", "green", "blue", "violet", "grey", "gold", "silver", "blank"]);
	});

	it('should return 9 colors for the temperature coefficient band', function() {
		expect(ctrl.getColors(6)).toEqual(["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey"]);
	});
});

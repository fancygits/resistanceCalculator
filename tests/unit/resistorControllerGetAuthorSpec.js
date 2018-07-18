describe('resistorController#getAuthor', function() {
	beforeEach(module('resistorApp'));

	var ctrl;

	beforeEach(inject(function($controller) {
		ctrl = $controller('resistorController');
	}));

	it('should return Luke Johnson as the author', function() {
		expect(ctrl.author).toEqual('Luke Johnson');
	});

	it('should return empty array as the resistor at start', function() {
		expect(ctrl.resistor).toEqual([]);
	});

	it('should return the bandIndex array at start', function() {
		expect(ctrl.bandIndex).toEqual(['color', '1st', '2nd', '3rd', 'Multiplier', 'Tolerance', 'Thermal Coefficient']);
	});
});

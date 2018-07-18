describe('resistorController#getBandValue', function() {
	beforeEach(module('resistorApp'));

	var ctrl;

	beforeEach(inject(function($controller) {
		ctrl = $controller('resistorController');
	}));

	it('should return a value of 1 for the black band multiplier', function() {
		expect(ctrl.getBandValue('black', 4)).toEqual(1);
	});

	it('should return a value of 10 for the brown band multiplier', function() {
		expect(ctrl.getBandValue('brown', 4)).toEqual(10);
	});

	it('should return a value of 10000000 for the violet band multiplier', function() {
		expect(ctrl.getBandValue('violet', 4)).toEqual(10000000);
	});

	it('should return a value of 3 for the orange band 1st digit', function() {
		expect(ctrl.getBandValue('orange', 1)).toEqual(3);
	});

	it('should return a value of 5 for the green band 1st digit', function() {
		expect(ctrl.getBandValue('green', 1)).toEqual(5);
	});

	it('should return a value of 8 for the grey band 2nd digit', function() {
		expect(ctrl.getBandValue('grey', 2)).toEqual(8);
	});

	it('should return a value of 4 for the yellow band 2nd digit', function() {
		expect(ctrl.getBandValue('yellow', 2)).toEqual(4);
	});

	it('should return a value of 0 for the black band 3rd digit', function() {
		expect(ctrl.getBandValue('black', 3)).toEqual(0);
	});

	it('should return a value of 4 for the yellow band 3rd digit', function() {
		expect(ctrl.getBandValue('yellow', 2)).toEqual(4);
	});

	it('should return a value of 5 for the yellow band tolerance', function() {
		expect(ctrl.getBandValue('yellow', 5)).toEqual(5);
	});

	it('should return a value of 10 for the silver band tolerance', function() {
		expect(ctrl.getBandValue('silver', 5)).toEqual(10);
	});

	it('should return null for the white band tolerance', function() {
		expect(ctrl.getBandValue('white', 5)).toEqual(null);
	});

	it('should return null for the pink band 2nd digit', function() {
		expect(ctrl.getBandValue('pink', 2)).toEqual(null);
	});

	it('should return null for the blank band temperature', function() {
		expect(ctrl.getBandValue('blank', 6)).toEqual(null);
	});
});

describe('resistorController#getAuthor', function() {
	beforeEach(module('resistorCalculator'));

	var ctrl;

	beforeEach(inject(function($controller) {
		ctrl = $controller('resistorController');
	}));

	it('should return Luke Johnson as the author', function() {
		expect(ctrl.author).toEqual('Luke Johnson');
	});

	it('should return 3 as the orange 3rd band', function() {
		expect(ctrl.bands[3][3]).toEqual(3);
	});
});

describe('resistorController#setBandCount', function() {
	beforeEach(module('resistorApp'));

	var ctrl;

	beforeEach(inject(function($controller) {
		ctrl = $controller('resistorController');
	}));

	it('should return bandCount to array of 3 at start', function() {
		expect(ctrl.bandCount).toEqual([1, 2, 4]);
	});

	it('should set bandCount to array of 3 when given 3', function() {
		ctrl.setBandCount(3);
		expect(ctrl.bandCount).toEqual([1, 2, 4]);
	});

	it('should set bandCount to array of 4 when given 4', function() {
		ctrl.setBandCount(4);
		expect(ctrl.bandCount).toEqual([1, 2, 4, 5]);
	});

	it('should set bandCount to array of 5 when given 5', function() {
		ctrl.setBandCount(5);
		expect(ctrl.bandCount).toEqual([1, 2, 3, 4, 5]);
	});

	it('should set bandCount to array of 6 when given 6', function() {
		ctrl.setBandCount(6);
		expect(ctrl.bandCount).toEqual([1, 2, 3, 4, 5, 6]);
	});

});

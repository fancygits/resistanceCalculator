describe('resistorController#getAuthor', function() {
	beforeEach(module('resistorApp'));

	var ctrl;

	beforeEach(inject(function($controller) {
		ctrl = $controller('resistorController');
	}));

	it('should return Luke Johnson as the author', function() {
		expect(ctrl.author).toEqual('Luke Johnson');
	});
});

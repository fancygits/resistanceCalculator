var app = require('./resistorE2EMethods.js');

describe('Routing Test', function () {

	it('should navigate to the Home Page', function() {
		app.open();
		expect(element(by.id('welcome')).getText()).toEqual("Resistor Color-code Calculator");
	});
});

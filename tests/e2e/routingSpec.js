var app = require('./resistorE2EMethods.js');

describe('Routing Test', function () {

	it('should navigate to the Home Page', function() {
		app.open();
		expect(element(by.id('welcome')).getText()).toEqual("To begin, choose the number of colored bands on the resistor above.");
	});

	it('should navigate to the 3 Bands Page', function() {
		app.open();
		app.goTo3Band();
		expect(element(by.id('welcome')).getText()).toEqual("3-Band Resistor Color-code Calculator");
	});

	it('should navigate to the 4 Bands Page', function() {
		app.open();
		app.goTo4Band();
		expect(element(by.id('welcome')).getText()).toEqual("4-Band Resistor Color-code Calculator");
	});

	it('should navigate to the 5 Bands Page', function() {
		app.open();
		app.goTo5Band();
		expect(element(by.id('welcome')).getText()).toEqual("5-Band Resistor Color-code Calculator");
	});

	it('should navigate to the 6 Bands Page', function() {
		app.open();
		app.goTo6Band();
		expect(element(by.id('welcome')).getText()).toEqual("6-Band Resistor Color-code Calculator");
	});
});

var app = require('./resistorE2EMethods.js');

describe('Routing Test', function () {

	it('should navigate to the Home Page', function() {
		app.open();
		expect(element(by.id('welcome')).getText()).toEqual("Resistor Color-code Calculator");
	});

	it('should click the 3 Bands link and count 3 select menus', function() {
		app.open();
		app.goTo3Band();
		expect(element.all(by.css('select')).count()).toEqual(3);
	});

	it('should click the 4 Bands link and count 4 select menus', function() {
		app.open();
		app.goTo4Band();
		expect(element.all(by.css('select')).count()).toEqual(4);
	});
	it('should click the 5 Bands link and count 5 select menus', function() {
		app.open();
		app.goTo5Band();
		expect(element.all(by.css('select')).count()).toEqual(5);
	});
	it('should click the 6 Bands link and count 6 select menus', function() {
		app.open();
		app.goTo6Band();
		expect(element.all(by.css('select')).count()).toEqual(6);
	});
});

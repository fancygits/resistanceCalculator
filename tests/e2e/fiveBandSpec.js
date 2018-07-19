var app = require('./resistorE2EMethods.js');

describe('5 Band Test', function () {

	it('should click the 5 Bands link and count 5 select menus', function() {
		app.open();
		app.goTo5Band();
		app.make5BandResistor('green', 'green', 'green', 'green', 'green');
		expect(element(by.id('resistance')).getText()).toEqual("Resistance: 55.5MΩ ± 0.5%");
	});

	it('should click the 5 Bands link and count 5 select menus', function() {
		app.open();
		app.goTo5Band();
		app.make5BandResistor('red', 'orange', 'yellow', 'green', 'blue');
		expect(element(by.id('resistance')).getText()).toEqual("Resistance: 23.4MΩ ± 0.25%");
	});

	it('should click the 5 Bands link and count 5 select menus', function() {
		app.open();
		app.goTo5Band();
		app.make5BandResistor('white', 'grey', 'violet', 'blue', 'green');
		expect(element(by.id('resistance')).getText()).toEqual("Resistance: 987MΩ ± 0.5%");
	});

	it('should click the 5 Bands link and count 5 select menus', function() {
		app.open();
		app.goTo5Band();
		app.make5BandResistor('brown', 'black', 'black', 'black', 'brown');
		expect(element(by.id('resistance')).getText()).toEqual("Resistance: 100Ω ± 1%");
	});

});

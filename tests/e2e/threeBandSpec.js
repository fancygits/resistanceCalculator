var app = require('./resistorE2EMethods.js');

describe('3 Band Test', function () {

	it('should click the 3 Bands link and count 3 select menus', function() {
		app.open();
		app.goTo3Band();
		app.make3BandResistor('brown', 'brown', 'black');
		expect(element(by.id('resistance')).getText()).toEqual("Resistance: 11Ω ± 20%");
	});

	it('should click the 3 Bands link and count 3 select menus', function() {
		app.open();
		app.goTo3Band();
		app.make3BandResistor('orange', 'green', 'violet');
		expect(element(by.id('resistance')).getText()).toEqual("Resistance: 350MΩ ± 20%");
	});

	it('should click the 3 Bands link and count 3 select menus', function() {
		app.open();
		app.goTo3Band();
		app.make3BandResistor('violet', 'blue', 'silver');
		expect(element(by.id('resistance')).getText()).toEqual("Resistance: 0.76Ω ± 20%");
	});

	it('should click the 3 Bands link and count 3 select menus', function() {
		app.open();
		app.goTo3Band();
		app.make3BandResistor('grey', 'brown', 'white');
		expect(element(by.id('resistance')).getText()).toEqual("Resistance: 81GΩ ± 20%");
	});
});

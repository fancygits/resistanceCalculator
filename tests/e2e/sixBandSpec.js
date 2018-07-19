var app = require('./resistorE2EMethods.js');

describe('6 Band Test', function () {

	it('should click the 6 Bands link and count 6 select menus', function() {
		app.open();
		app.goTo6Band();
		app.make6BandResistor('grey', 'grey', 'grey', 'grey', 'grey', 'grey');
		expect(element(by.id('resistance')).getText()).toEqual("Resistance: 88.8GΩ ± 0.05% 1 ppm/K");
	});

	it('should click the 6 Bands link and count 6 select menus', function() {
		app.open();
		app.goTo6Band();
		app.make6BandResistor('violet', 'blue', 'red', 'pink', 'gold', 'yellow');
		expect(element(by.id('resistance')).getText()).toEqual("Resistance: 0.76Ω ± 5% 25 ppm/K");
	});

	it('should click the 6 Bands link and count 6 select menus', function() {
		app.open();
		app.goTo6Band();
		app.make6BandResistor('red', 'black', 'white', 'silver', 'blank', 'green');
		expect(element(by.id('resistance')).getText()).toEqual("Resistance: 2.09Ω ± 20% 20 ppm/K");
	});

	it('should click the 6 Bands link and count 6 select menus', function() {
		app.open();
		app.goTo6Band();
		app.make6BandResistor('brown', 'grey', 'yellow', 'gold', 'gold', 'black');
		expect(element(by.id('resistance')).getText()).toEqual("Resistance: 18.4Ω ± 5% 250 ppm/K");
	});
});

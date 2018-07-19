var app = require('./resistorE2EMethods.js');

describe('4 Band Test', function () {

	it('should click the 4 Bands link and count 4 select menus', function() {
		app.open();
		app.goTo4Band();
		app.make4BandResistor('brown', 'brown', 'black', 'blue');
		expect(element(by.id('resistance')).getText()).toEqual("Resistance: 11Ω ± 0.25%");
	});

	it('should click the 4 Bands link and count 4 select menus', function() {
		app.open();
		app.goTo4Band();
		app.make4BandResistor('green', 'violet', 'gold', 'red');
		expect(element(by.id('resistance')).getText()).toEqual("Resistance: 5.7Ω ± 2%");
	});

	it('should click the 4 Bands link and count 4 select menus', function() {
		app.open();
		app.goTo4Band();
		app.make4BandResistor('brown', 'brown', 'black', 'blue');
		expect(element(by.id('resistance')).getText()).toEqual("Resistance: 11Ω ± 0.25%");
	});

	it('should click the 4 Bands link and count 4 select menus', function() {
		app.open();
		app.goTo4Band();
		app.make4BandResistor('yellow', 'yellow', 'yellow', 'yellow');
		expect(element(by.id('resistance')).getText()).toEqual("Resistance: 440KΩ ± 5%");
	});

	it('should click the 4 Bands link and count 4 select menus', function() {
		app.open();
		app.goTo4Band();
		app.make4BandResistor('white', 'grey', 'violet', 'brown');
		expect(element(by.id('resistance')).getText()).toEqual("Resistance: 980MΩ ± 1%");
	});

});

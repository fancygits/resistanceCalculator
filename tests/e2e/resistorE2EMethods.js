module.exports = {

	dumpHtml: function() {
		browser.getPageSource().then(function(source) {
			console.log(source);
		});
	},

	open: function() {
		browser.get('/');
	},

	goTo3Band: function() {
		element(by.id('3BandLink')).click();
	},

	goTo4Band: function() {
		element(by.id('4BandLink')).click();
	},

	goTo5Band: function() {
		element(by.id('5BandLink')).click();
	},

	goTo6Band: function() {
		element(by.id('6BandLink')).click();
	},

	make3BandResistor: function(first, second, multiplier) {
		this.goTo3Band();
		element(by.id('1st')).element(by.cssContainingText('option', first)).click();
		element(by.id('2nd')).element(by.cssContainingText('option', second)).click();
		element(by.id('Multiplier')).element(by.cssContainingText('option', multiplier)).click();
	},

	make4BandResistor: function(first, second, multiplier, tolerance) {
		this.goTo4Band();
		element(by.id('1st')).element(by.cssContainingText('option', first)).click();
		element(by.id('2nd')).element(by.cssContainingText('option', second)).click();
		element(by.id('Multiplier')).element(by.cssContainingText('option', multiplier)).click();
		element(by.id('Tolerance')).element(by.cssContainingText('option', tolerance)).click();
	},

	make5BandResistor: function(first, second, third, multiplier, tolerance) {
		this.goTo5Band();
		element(by.id('1st')).element(by.cssContainingText('option', first)).click();
		element(by.id('2nd')).element(by.cssContainingText('option', second)).click();
		element(by.id('3rd')).element(by.cssContainingText('option', third)).click();
		element(by.id('Multiplier')).element(by.cssContainingText('option', multiplier)).click();
		element(by.id('Tolerance')).element(by.cssContainingText('option', tolerance)).click();
	},

	make6BandResistor: function(first, second, third, multiplier, tolerance, temperature) {
		this.goTo6Band();
		element(by.id('1st')).element(by.cssContainingText('option', first)).click();
		element(by.id('2nd')).element(by.cssContainingText('option', second)).click();
		element(by.id('3rd')).element(by.cssContainingText('option', third)).click();
		element(by.id('Multiplier')).element(by.cssContainingText('option', multiplier)).click();
		element(by.id('Tolerance')).element(by.cssContainingText('option', tolerance)).click();
		element(by.id('Thermal Coefficient')).element(by.cssContainingText('option', temperature)).click();
	}
};

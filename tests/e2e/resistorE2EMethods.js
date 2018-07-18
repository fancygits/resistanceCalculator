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
	}
};

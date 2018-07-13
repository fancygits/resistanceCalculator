module.exports = {

	dumpHtml: function() {
		browser.getPageSource().then(function(source) {
			console.log(source);
		});
	},

	open: function() {
		browser.get('/');
	},
};

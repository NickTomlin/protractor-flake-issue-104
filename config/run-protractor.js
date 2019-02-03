var protractorFlake = require('protractor-flake');
var suites = process.argv.splice(2);

protractorFlake({
	maxAttempts: 0,
	protractorArgs: ['./config.js', ...suites]
}, function(status) {
	process.exit(status);
});

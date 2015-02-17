var through = require('through2');
var gutil = require('gulp-util');
var exportgit = require('./bin/exportgit');
var exporthg = require('./bin/exporthg');
var stream = through();

// Consts
const PLUGIN_NAME = 'nodeexport';

module.exports.exporthg = function(options) {
	options = getOptions(options);
	exporthg.execute(options);
	return stream;
}

module.exports.exportgit = function(options) {
	options = getOptions(options);
	return stream;
}

function getOptions(options) {
	if(!options.from) {
		throw new Error('Option "from" missing');
	}
	if(!options.to) {
		console.log(PLUGIN_NAME + ': option "to" missing, using tip');
		options.to = 'tip';
	}
	if(!options.destination) {
		throw new Error('Option "destination" missing')
	}
	return options;
}
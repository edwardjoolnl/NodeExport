var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

var exportgit = require('./bin/exportgit');
var exporthg = require('./bin/exporthg');

// Consts
//const PLUGIN_NAME = 'gulp-nodeexport';


module.exports.exportgit = function(options) {
	var stream = through();
	var msg = "Export git works";
	console.log(msg);
	return stream();
}
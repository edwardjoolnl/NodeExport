#!/usr/bin/env node
var opts = require('../src/options');
var command = require('../src/command');

var executed = false;
module.exports.export = function(options) {
	if(!options) {
		options = opts.getOptions();
	}
	executed = true;
	command.exec('hg exportfiles -mr ' + options.from + ':' + options.to + ' ' + options.destination, function(callback){
		console.log(callback);
	});
}
if(!executed) {
	var options = opts.getOptions();
	module.exports.export(options);
};
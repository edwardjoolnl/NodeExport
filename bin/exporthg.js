#!/usr/bin/env node
var options = require('../src/options');
var command = require('../src/command');

options = options.getOptions();
var executed = false;
module.exports.export = function(options) {
	executed = true;
	command.exec('hg exportfiles -mr ' + options.from + ':' + options.to + ' ' + options.destination, function(callback){
		console.log(callback);
	});
}

if(!executed) module.exports.export(options);
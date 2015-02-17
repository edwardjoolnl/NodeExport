#!/usr/bin/env node
var options = require('../src/options');
var command = require('../src/command');

var opts = options.getOptions();


command.execute('git status', function(callback){
	console.log(callback);
});
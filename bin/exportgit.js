#!/usr/bin/env node
var options = require('../src/options');
var command = require('../src/command');

var opts = options.getOptions();


command.exec('git status', function(callback){
	console.log(callback);
});
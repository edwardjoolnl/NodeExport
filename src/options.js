//var path = require('path');
module.exports.getOptions = function(){

	var options = require('minimist')(process.argv.slice(2));

	if(!options.from)
		throw new Error("No arguments given");
	if(!options.to){
		options.to = 'tip';
	}

	if(!options.destination)
		throw new Error('Argument "destination" missing');

	return options;
}
//var path = require('path');
module.exports.getOptions = function(){
	if(!process.argv[2])
		throw new Error("No arguments given");
	var options = {};
	var args = process.argv[2].split(':');
	options.from = args[0];
	if(args[1]){
		options.to = args[1];
	} else {
		options.to = false;
	}
	return options;
}
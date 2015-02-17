var exec = require('child_process').exec;

module.exports.exec = function(command, callback) {
	exec(command, function(error, stdout, stderr){ callback(stdout); });
};
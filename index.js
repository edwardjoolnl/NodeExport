/**
 *
 * @type {{export: Function}}
 */
module.exports = {
	export: function() {
		return "Arguments are" + process.argv.concat(',');
	}
};
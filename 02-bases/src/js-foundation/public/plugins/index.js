const { getAge } = require('./get-age.plugin')
const { getUUID } = require('./get-uuid.plugin');
const { buildLogger } = require('./logger.plugin');

module.exports = {
	getAge,
	getUUID,
	buildLogger,
}

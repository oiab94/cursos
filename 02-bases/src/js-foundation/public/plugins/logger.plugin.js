const winston = require('winston');

const logger = winston.createLogger({
	level: 'info',
	format: winston.format.json(),
	defaultMeta: { service: 'user-service' },
	transports: [
		// Escribe todo los logs con nivel error o error.log
		new winston.transports.File({
			filename: 'error.log',
			level: 'error',
		}),
		new winston.transports.File({
			filename: 'combined.log',
		}),
	],
});


const buildLogger = ( service ) => {
	return {
		log: ( message ) => {
			logger.log('info', {message, service});
		},
	};
};

module.exports = {
	buildLogger,
};

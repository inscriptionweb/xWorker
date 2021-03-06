'use strict';
const winston = require('winston');

let logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({
			colorize: 'all'
		})
	]
});

module.exports = logger;
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// Log stream for writing logs into a file
const logStream = fs.createWriteStream(path.join(__dirname, '../logs/requests.log'), { flags: 'a' });

const requestLogger = morgan(':remote-addr :method :url :status :response-time ms', { stream: logStream });

module.exports = requestLogger;
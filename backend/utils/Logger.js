const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/app.log');

const ensureLogFileExists = () => {
    if (!fs.existsSync(path.dirname(logFilePath))) {
        fs.mkdirSync(path.dirname(logFilePath), { recursive: true });
    }
};

const log = (level, message) => {
    ensureLogFileExists();
    const logEntry = `[${new Date().toISOString()}] [${level.toUpperCase()}] ${message}\n`;

    // Log to console
    console[level](logEntry);

    // Append log to file
    fs.appendFileSync(logFilePath, logEntry);
};

module.exports = {
    info: (message) => log('info', message),
    warn: (message) => log('warn', message),
    error: (message) => log('error', message),
};
const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/errors.log');

const ensureLogDirectory = () => {
    const logDir = path.dirname(logFilePath);
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
    }
};

const errorHandler = async (err, req, res, next) => {  // eslint-disable-line no-unused-vars
    ensureLogDirectory();

    const errorLog = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - ${err.message}\n`;

    try {
        await fs.promises.appendFile(logFilePath, errorLog);
    } catch (logError) {
        console.error("Failed to write to log file:", logError.message);
    }

    console.error(errorLog);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
};

module.exports = errorHandler;
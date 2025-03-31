const fs = require('fs');
const path = require('path');

const errorHandler = (err, req, res, next) => {
    const errorLog = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - ${err.message}\n`;

    // Append errors to a log file
    fs.appendFileSync(path.join(__dirname, '../logs/errors.log'), errorLog);

    console.error(errorLog);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
};

module.exports = errorHandler;
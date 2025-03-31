const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');

const logBlockedIP = (ip) => {
    const logEntry = `[${new Date().toISOString()}] Blocked IP: ${ip}\n`;
    fs.appendFileSync(path.join(__dirname, '../logs/rateLimit.log'), logEntry);
};

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    handler: (req, res) => {
        logBlockedIP(req.ip);
        res.status(429).json({ success: false, message: 'Too many requests, please try again later' });
    },
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = limiter;
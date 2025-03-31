const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'defaultSecretKey';

const generateToken = (payload, expiresIn = '1h') => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return null;
    }
};

module.exports = { generateToken, verifyToken };
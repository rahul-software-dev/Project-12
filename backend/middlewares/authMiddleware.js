const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'defaultSecretKey';

const authMiddleware = (requiredRole = null) => {
    return (req, res, next) => {
        const token = req.header('Authorization')?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
        }

        try {
            const decoded = jwt.verify(token, SECRET_KEY);
            req.user = decoded; // Attach user data to request

            // If role-based access is required, check user role
            if (requiredRole && decoded.role !== requiredRole) {
                return res.status(403).json({ success: false, message: 'Forbidden: Insufficient permissions' });
            }

            next();
        } catch (error) {
            return res.status(403).json({ success: false, message: 'Invalid or expired token' });
        }
    };
};

module.exports = authMiddleware;
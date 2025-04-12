const authMiddleware = (allowedRoles = []) => {
    return (req, res, next) => {
      try {
        const authHeader = req.header('Authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
          return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
        }
  
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
  
        if (allowedRoles.length && !allowedRoles.includes(decoded.role)) {
          return res.status(403).json({ success: false, message: 'Forbidden: Insufficient permissions' });
        }
  
        next();
      } catch (error) {
        console.error('[Auth Middleware Error]', error.message);
        return res.status(401).json({ success: false, message: 'Invalid or expired token' });
      }
    };
  };
  
  module.exports = authMiddleware;
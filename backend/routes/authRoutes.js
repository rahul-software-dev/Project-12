const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

// Register, login, logout routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

// 🔥 Here's the line the error is pointing to
router.get('/profile', authMiddleware(), authController.getProfile); // This is the /api/profile route

module.exports = router;
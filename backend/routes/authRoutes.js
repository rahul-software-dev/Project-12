const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// User login
router.post("/login", authController.login);

// User logout
router.post("/logout", authController.logout);

// Verify authentication (protected route)
router.get("/verify", authController.verifyAuth);

module.exports = router;
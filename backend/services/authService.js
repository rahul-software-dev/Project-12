const jwt = require("jsonwebtoken");
const User = require("../models/User");

class AuthService {
  async login(email, password) {
    try {
      const user = await User.findOne({ email });
      if (!user || !(await user.comparePassword(password))) {
        throw new Error("Invalid credentials");
      }
      return jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    } catch (error) {
      throw new Error("Authentication error: " + error.message);
    }
  }

  async verifyAuth(token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      throw new Error("Invalid token: " + error.message);
    }
  }
}

module.exports = new AuthService();
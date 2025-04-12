const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    // Use the user ID from the JWT (attached by the middleware)
    const user = await User.findById(req.user.id).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'Profile fetched successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Error fetching profile', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
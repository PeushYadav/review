const User = require('../models/usermodel');

// Add user
const addUser = async (req, res) => {
  const { name, userId } = req.body;
  try {
    const user = await User.create({ name, userId });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  const { name, userId } = req.body;
  try {
    const result = await User.deleteOne({ name, userId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// List users
const listUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addUser,
  deleteUser,
  listUsers,
};

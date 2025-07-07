const User = require('../models/userModel');

// Add user
const addUser = async (req, res) => {
  const { name, userId } = req.body;
  console.log("📩 Request received to add user:", req.body);

  if (!name || !userId) {
    return res.status(400).json({ error: 'Name and User ID are required' });
  }

  try {
    const newUser = new User({ name, userId });
    await newUser.save();
    console.log("✅ User saved:", newUser);
    res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
    console.error("❌ Error saving user:", error);
    res.status(500).json({ error: 'Error adding user' });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  const { name, userId } = req.body;
  console.log("🗑️ Request received to delete user:", req.body);

  if (!name || !userId) {
    return res.status(400).json({ error: 'Name and User ID are required for deletion' });
  }

  try {
    const result = await User.deleteOne({ name, userId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    console.log("✅ User deleted:", result);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error("❌ Error deleting user:", error);
    res.status(500).json({ error: 'Error deleting user' });
  }
};

// List users
const listUsers = async (req, res) => {
  console.log("📃 Request to list users");

  try {
    const users = await User.find();
    console.log("📦 Users found:", users);
    res.json(users);
  } catch (error) {
    console.error("❌ Error listing users:", error);
    res.status(500).json({ error: 'Error retrieving users' });
  }
};

module.exports = {
  addUser,
  deleteUser,
  listUsers
};

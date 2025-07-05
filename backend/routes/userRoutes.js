const express = require('express');
const router = express.Router();
const {
  addUser,
  deleteUser,
  listUsers
} = require('../controllers/userController');

// POST: Add a user
router.post('/add', addUser);

// DELETE: Delete a user
router.delete('/delete', deleteUser);

// GET: List all users
router.get('/list', listUsers);

module.exports = router;

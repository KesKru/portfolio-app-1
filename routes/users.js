const express = require('express');
const router = express.Router();
const cont = require('../controllers');

router.get('/users', cont.users.getUsers);
// Show | Get one user
router.get('/users/:id', cont.users.getUser);

// New | Show form for new user
// router.get('/users/new', cont.users.userGet); // Form displayed in React
// Create | Show form for ew user
router.post('/users', cont.users.createUser);

// Edit | Show form for ew user
// router.get('/users/:id/edit', cont.users.updateUser); // Form displayed in React
// Update | Show form for ew user
router.put('/users/:id', cont.users.updateUser);

// Destroy | Show form for ew user
router.delete('/users/:id', cont.users.deleteUser);

module.exports = router;

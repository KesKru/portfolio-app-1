const express = require('express');
const router = express.Router();
const cont = require('../controllers/users'); // users routes controllers

router.get('/users', cont.getUsers);
// Show | Get one user
router.get('/users/:id', cont.getUser);

// New | Show form for new user
// router.get('/users/new', cont.userGet); // Form displayed in React
// Create | Show form for ew user
router.post('/users', cont.createUser);

// Edit | Show form for ew user
// router.get('/users/:id/edit', cont.updateUser); // Form displayed in React
// Update | Show form for ew user
router.put('/users/:id', cont.updateUser);

// Destroy | Show form for ew user
router.delete('/users/:id', cont.deleteUser);

module.exports = router;

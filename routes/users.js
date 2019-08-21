const express = require('express');
const router = express.Router();
const cont = require('../controllers/users'); // users routes controllers
const val = require('../validation/users'); // Input validation middleware

// Index | Get all users
// Show | Get one user

// Create | Show form for ew user
router.get('/user', cont.createUserForm);
router.post('/user', val.validateInputs, cont.createUser);

// Update | Show form for ew user
// Destroy | Show form for ew user

module.exports = router;

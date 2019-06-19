const express = require('express');
const router = express.Router();
const passport = require('passport');
// const cont = require('../controllers/auth'); // users routes controllers
const cont = require('../controllers');

router.get('/login', cont.auth.showLoginForm);
router.post('/login', passport.authenticate('local'), cont.auth.login);
router.get('/register', cont.users.showCreateUserForm);
router.post('/register', cont.users.createUser);

module.exports = router;

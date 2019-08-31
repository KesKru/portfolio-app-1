const express = require('express');
const router = express.Router();
const contAuth = require('../controllers/auth'); // users routes controllers
const passport = require('passport');

//Display Login form
router.get('/login', contAuth.loginForm);
//Login form user
router.post('/login', passport.authenticate('local'), contAuth.login);

// Demo secret route for testing.
router.get('/secret', contAuth.isLoggedIn, (req, res) => {
  res.send('secret');
});

module.exports = router;

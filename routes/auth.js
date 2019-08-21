const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth'); // users routes controllers
const passport = require('passport');

//Display Login form
router.get('/login', auth.loginForm);

//Login
router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/fail',
    successRedirect: '/'
  })
);

// Demo secret page
router.get('/secret', auth.isLoggedIn, (req, res) => {
  res.send('secret');
});

router.get('/fail', auth.fail);

module.exports = router;

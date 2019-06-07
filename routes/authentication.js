const express = require('express');
const router = express.Router();
const passport = require('passport');
const cont = require('../controllers/authentication'); // users routes controllers

router.get('/auth', cont.isLoggedIn, function(req, res) {
  res.send('This is auth route');
});

router.post('/login', passport.authenticate('local'), cont.login);

module.exports = router;

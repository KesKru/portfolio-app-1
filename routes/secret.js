const express = require('express');
const router = express.Router();

const cont = require('../controllers');

router.get('/secret', cont.auth.isLoggedIn, function(req, res) {
  res.render('secret');
});

//--------------------------

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/auth', function(req, res) {
  res.send('This is auth route');
});

module.exports = router;
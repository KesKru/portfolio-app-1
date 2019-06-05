const express = require('express');
const router = express.Router();

router.get('/comments', function(req, res) {
  res.render('comments/index');
});

//--------------------------

module.exports = router;

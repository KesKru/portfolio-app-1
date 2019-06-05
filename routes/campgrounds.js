const express = require('express');
const router = express.Router();

router.get('/campgrounds', function(req, res) {
  res.render('campgrounds/index');
});

//--------------------------

module.exports = router;

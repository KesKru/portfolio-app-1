const session = require('express-session');

module.exports = session({
  secret: 'keyboard cat',
  duration: 60 * 60 * 1000,
  activeDuration: 15 * 60 * 1000,
  // store: myStore,
  resave: true,
  saveUninitialized: true
});

const session = require('express-session');

module.exports = session({
  name: 'session-id',
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
});

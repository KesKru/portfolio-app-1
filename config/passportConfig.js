const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'user[email]',
        passwordField: 'user[password]'
      },
      function(email, password, done) {
        User.findOne({ email: email }, function(err, user) {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, {
              message: 'User with this email does not exist.'
            });
          }
          user.comparePassword(password).then((match) => {
            if (match) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'Incorrect password.' });
            }
          });
        });
      }
    )
  );

  passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });

  passport.deserializeUser(function(id, cb) {
    User.findById(id, function(err, user) {
      cb(err, user);
    });
  });
};

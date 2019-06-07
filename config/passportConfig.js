const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const md = require('../models/index');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    (email, password, done) => {
      md.User.findOne({ email: email }).then((user) => {
        if (!user) {
          return done(null, false, { message: 'Incorrect email.' });
        }
        user
          .comparePassword(password)
          .then((match) => {
            if (match) {
              return done(null, user, { message: 'User loged in.' });
            } else {
              return done(null, false, { message: 'Incorrect password.' });
            }
          })
          .catch((err) => {
            return done(err);
          });
      });
    }
  )
);

passport.serializeUser((user, done) => {
  console.log('serializeUser');

  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('serializeUser');

  md.User.findById(id, function(err, user) {
    done(err, user);
  }).catch((err) => {
    return done(err);
  });
});

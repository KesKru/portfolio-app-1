module.exports = (app, passport, LocalStrategy, User) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(
      {
        usernameField: 'user[email]',
        passwordField: 'user[password]'
      },
      function(username, password, done) {
        User.findOne({ email: username }, function(err, user) {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false);
          }
          user.comparePassword(password).then((match) => {
            if (match) {
              return done(null, user);
            } else {
              return done(null, false);
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

const passport = require('passport');

module.exports = {
  // User | 'users/login' | Login user, create session.
  login: (req, res) => {
    res.send('User logged in');
    // console.log(req.session.passport.user);
  },
  logout: (req, res) => {
    res.send('logout');
  },

  isLoggedIn: (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.send('/you need to login');
    }
  }
};

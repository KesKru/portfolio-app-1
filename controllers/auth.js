module.exports = {
  // User | 'users/login' | Login user, create session.
  loginForm: (req, res) => {
    res.render(login);
    // console.log(req.session.passport.user);
  },
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
  },
  fail: (req, res) => {
    res.send('Login failed');
  }
};

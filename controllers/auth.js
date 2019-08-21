//-----------------------Modules-----------------------//
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

//-----------------------Models-----------------------//
const User = require('../models/User');

//-----------------------Controllers-----------------------//

module.exports = {
  loginForm: (req, res) => {
    res.render('login');
  },
  isLoggedIn: (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.send({
      message: 'this page requires login'
    });
  },
  fail: (req, res) => {
    res.send('fail');
  }
  // login: (req, res) => {
  //   res.res('loged in');
  // },
  // logout: (req, res) => {
  //   res.send('logout controler');
  // },
  // success: (req, res) => {
  //   res.send('success');
  // }
};

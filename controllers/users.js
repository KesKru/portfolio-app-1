//-----------------------Modules-----------------------//

const path = require('path');
const User = require('../models/User');
const errors = {};

//-----------------------Controllers-----------------------//

module.exports = {
  createUserForm: (req, res) => {
    res.render('register');
  },
  createUser: (req, res) => {
    const newUser = new User(req.body.user);
    newUser.hashPassword().then((hash) => {
      newUser.password = hash;
      newUser
        .save()
        .then((user) => {
          res.json({ user: user });
        })
        .catch((err) => {
          res.send(err);
        });
    });
  }
};

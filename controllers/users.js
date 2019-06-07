//-----------------------Modules-----------------------//
const path = require('path');
//-----------------------Models-----------------------//
const md = require('../models/index');
const errors = {};

//-----------------------Controlers-----------------------//
module.exports = {
  getUsers: (req, res) => {
    md.User.find()
      .select({ date: 0 })
      .populate('profile')
      .exec()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getUser: (req, res) => {
    md.User.findById(req.params.id).then((data) => {
      res.json(data);
    });
  },

  createUser: (req, res) => {
    const newUser = new md.User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
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
  },

  updateUser: (req, res) => {
    const userUpdate = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };
    md.User.findOneAndUpdate({ _id: req.params.id }, userUpdate)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  deleteUser: (req, res) => {
    md.User.findOneAndDelete({ _id: req.params.id })
      .then((deletedUser) => {
        res.json({ deletedUser: deletedUser });
      })
      .catch((err) => {
        res.send(err);
      });
  }
};

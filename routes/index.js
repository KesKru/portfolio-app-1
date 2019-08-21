const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const routes = []; // define array to load routes into

router.get('/', (req, res) => {
  res.render('landing');
});

// read file names from the directory and add them to routes array
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const route = require(path.join(__dirname, file));
    routes.push(route);
  });

routes.push(router);

module.exports = routes;

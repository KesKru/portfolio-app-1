'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const cont = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const controller = require(path.join(__dirname, file));
    file = file.slice(0, file.length - 3);
    cont[file] = controller;
  });

module.exports = cont;

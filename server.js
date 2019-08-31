//-----------------------Imports-----------------------//
require('dotenv').config();
const express = require('express'); // include express module
const app = express(); // create express instance
const cors = require('cors');
const passport = require('passport');

//-----------------------Config-----------------------//

// Database
require('./config/databaseConfig')(); // load and use db config
// View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
// Middleware / Configs
app.use(cors()); // Alow Cross-origin resource sharing
app.use(express.urlencoded({ extended: true })); // parse form data
app.use(express.json()); // parse json data
app.use(require('./config/sessionConfig')); // Session config
app.use(passport.initialize());
app.use(passport.session());
require('./config/passportConfig')(); // passport config

// Routes
app.use(require('./routes/index'));
app.get('*', (req, res) => res.json('Route does not exist :('));

//-----------------------Start server-----------------------//

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}...`));

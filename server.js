//-----------------------Modules-----------------------//

const express = require('express'); // include express module
const app = express(); // create an express instance
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportConfig = require('./config/passportConfig');
const sessionConfig = require('./config/sessionConfig');
// Models
const User = require('./models/User');
// Routes
const routes = require('./routes/index');

//-----------------------Config-----------------------//

// Database
require('./config/databaseConfig'); // load and run db config

// View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Middleware
app.use(cors()); // Alow Cross-origin resource sharing
app.use(express.urlencoded({ extended: true })); // parse form data
app.use(express.json()); // parse json data
sessionConfig(app, session); //load session config
passportConfig(app, passport, LocalStrategy, User); // load passport config

// Routes
app.use(routes);
app.get('*', (req, res) => res.send('Page does not exist :('));

//-----------------------Start server-----------------------//

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}...`));

//-----------------------Modules-----------------------//

const express = require('express'); // include express module
const bodyParser = require('body-parser'); // parsing incoming express
const cors = require('cors');
const passport = require('passport');
const app = express(); // create an express instance
const routes = require('./routes/index'); // Include routes

//-----------------------Config-----------------------//

// Passport
require('./config/passportConfig'); // load passport config
// Database
require('./config/databaseConfig'); // load db config and connect to it

// Middleware
app.use(cors()); // Alow Cross-origin resource sharing
app.set('view engine', 'ejs'); // Set view engine
app.use(express.static(__dirname + '/public')); // Specify static files folder ( for custom css etc..)
app.use(bodyParser.urlencoded({ extended: false })); // parse form data
app.use(bodyParser.json()); // parse json data
app.use(require('./config/sessionsConfig')); // use sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(routes);
app.get('*', (req, res) => res.send('Route does not exist'));

//-----------------------Start server-----------------------//

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}...`));

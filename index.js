//-----------------------Modules-----------------------//

const express = require('express'); // include express module
const bodyParser = require('body-parser'); // parsing incoming express
const cors = require('cors');
const app = express(); // create an express instance
const routes = require('./routes/index'); // Include routes

//-----------------------Config-----------------------//

// Middleware
app.use(cors()); // Alow Cross-origin resource sharing
app.set('view engine', 'ejs'); // Set view engine
app.use(express.static('public')); // Serve public folder ( for custom css etc..)
app.use(bodyParser.urlencoded({ extended: false })); // parse form data
app.use(bodyParser.json()); // parse json data

// Database
require('./config/databaseConfig'); // load db config and connect to it

// Use imported routes
app.use(routes);
app.get('*', (req, res) => res.send('Route does not exist'));

//-----------------------Start server-----------------------//

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}...`));

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config()
const app = express();

require('./libs/db-connection.js');


const indexRoutes = require('./routes/index.js');

// settings
app.set('port', process.env.PORT);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



// middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.use('/', indexRoutes);

app.use(express.static(path.join('src/public')));

app.listen(app.get('port'), () => {
    console.log(`Server listening on http://localhost:${app.get('port')}`)
});



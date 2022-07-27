// Modulos
const colors  = require('colors');
const express = require('express');
const morgan  = require('morgan');
const cors = require('cors');

const autentication = require('./routes/authentication')
const links = require('./routes/links')
// inicialisaciones
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

 //Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());


  // Routes
app.use('/api/auth', autentication);
app.use('/api/links', links);

// Starting the serve
app.listen(app.get('port'), () => {
    console.log('Server on port'.yellow, app.get('port'));
})
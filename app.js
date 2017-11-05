/*******************************************************

                     --APP PAGE--
This page is used as the server's main page. It handles
authentication, navigates to all the routes of the app
and declares all of the app's middlewares.

*******************************************************/

//Including Modules
const express = require('express');
const path = require('path');
const expressValidator = require('express-validator');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const flash = require('connect-flash');

//Setting Port
const port = 3000;

//Create Routes Variables
var router = require('./routes/index')
var users = require('./routes/users')
var api = require('./routes/api')

const app = express();

//Declaring Static Folder
app.use(express.static(__dirname + '/public'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Express Session Middleware
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function(param, msg, value){
    var namespace = param.split('.'), root = namespace.shift(), formParam = root;
    while(namespace.length){
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value, value
    };
  }
}));

//Connect-Flash Middleware
app.use(flash());
app.use(function(req, res, next){
  res.locals.messages = require('express-messages')(req, res);
  next();
});


//Set Template Language To EJS + Views Folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Set Routes
app.use('/', router);
app.use('/users', users);
app.use('/api', api);

//Listen To Port And Run Server
app.listen(port, function(){
  console.log('app is running on port ' + port);
});

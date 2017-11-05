/*******************************************************

                     --USERS PAGE--
Handles the users route - the Login and Register pages.

*******************************************************/

// INCLUDE ALL MODULES
const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongojs = require('mongojs');
const db = mongojs('nessapp', ['users'])
const bcrypt = require('bcryptjs');

// FUNCTION THAT MAKES SURE USER IS AUTHENTICATED, THROWS IF NOT
// TODO: Create an import for the function instead of declaring it several times
function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    res.redirect('/');
  }
  next();
}

// Login - GET
router.get('/login', ensureAuthenticated, function(req, res) {
  res.render('login');
});

// Register - GET
router.get('/register', ensureAuthenticated, function(req, res) {
  res.render('register');
});

// Register - POST
router.post('/register', function(req, res) {

  // Get Form Values
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var password2 = req.body.password2;

  // Validate Values With Express Validator
  req.checkBody('name', 'אנא הזן שם מלא').notEmpty();
  req.checkBody('email', 'אנא הזן כתובת מייל').notEmpty();
  req.checkBody('email', 'כתובת מייל אינה תקנית').isEmail();
  req.checkBody('password', 'אנא הזן סיסמה').notEmpty();
  req.checkBody('password2', 'סיסמאות לא תואמות').equals(req.body.password);

  // Check For Errors
  var errors = req.validationErrors();
  if (errors) {
    res.render('register', {
      errors: errors,
      name: name,
      email: email,
      password: password,
      password2: password2
    });
  } else {
    // Create New User & DB Insert
    var newUser = {
      name: name,
      email: email,
      password: password
    }

    // Hash Password
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(newUser.password, salt, function(err, hash) {
        if (err) {
          res.send(err);
        } else {
          newUser.password = hash;
          db.users.insert(newUser, function(err, doc) {
            if (err) {
              res.send(err);
            } else {
              console.log('user added..');
              req.flash('success', 'נרשמת בהצלחה, כעת ניתן להתחבר');

              // Redirect To Home
              // res.location('/login');
              res.redirect('/users/login');
            }
          });
        }
      });
    });

  }
});

// INSERT USER TO SESSION
passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  db.users.findOne({
    _id: mongojs.ObjectId(id)
  }, function(err, user) {
    done(err, user);
  });
});

// LOGIN VALIDATION USING PASSPORT
passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  function(email, password, done) {
    db.users.findOne({
      email: email
    }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          message: "מייל לא תקין"
        });
      }
      bcrypt.compare(password, user.password, function(err, isMatch) {
        if (err) {
          return done(err);
        }
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, {
            message: "סיסמה לא תקינה"
          });
        }
      });
    });
  }
));

// Login - POST
router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: "אימייל או סיסמה לא תקינים"
  }),
  function(req, res) {
    console.log('Auth Successful');
    res.redirect('/');
});

// Logout Action
router.get('/logout', function(req, res){
  req.logout();
  req.flash('success', "התנתקת בהצלחה");
  res.redirect('/users/login');
});

// EXPORT USERS ROUTE, TO ENABLE OUTSIDE USING
module.exports = router

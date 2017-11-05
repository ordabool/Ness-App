/*******************************************************

                     --INDEX PAGE--
Handles the index route, allows entering the app only
when authenticated.

*******************************************************/

// INCLUDE ALL MODULES
const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('nessapp', ['projects']);

// GET REQUEST TO THE INDEX PAGE OF THE APP, AND SEND THE USER TO THE EJS PAGE
router.get('/', ensureAuthenticated, function(req, res){
  res.render('index', {
    user : req.user
  });
});

// FUNCTION THAT MAKES SURE USER IS AUTHENTICATED, THROWS IF NOT
// TODO: Create an import for the function instead of declaring it several times
function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('users/login');
}

// EXPORT INDEX ROUTE, TO ENABLE OUTSIDE USING
module.exports = router

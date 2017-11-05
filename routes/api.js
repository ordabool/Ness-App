/*******************************************************

                     --API PAGE--
This page is being used as the server's API. It can get
requests from the client, conatact the database and
return a response.

*******************************************************/


// INCLUDE ALL MODULES
const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('nessapp', ['projects', 'courses', 'districts', 'trainees']);


// GET USER REQUEST
router.get('/getuser', ensureAuthenticated, function(req, res, next) {
  res.json(req.user);
});


// GET PROJECT REQUEST (BY PROJECT NAME)
router.get('/getproject/:projectName', ensureAuthenticated, function(req, res, next) {
  db.projects.findOne({
    name: req.params.projectName
  }, function(err, project) {
    if (err) {
      res.send(err);
    }
    res.json(project);
  });
});


// GET COURSES REQUEST (BY PROJECT ID)
router.get('/getcourses/:projectId', ensureAuthenticated, function(req, res, next) {
  db.courses.find({
    projectId: mongojs.ObjectId(req.params.projectId)
  }, function(err, courses) {
    if (err) {
      res.send(err);
    }
    res.json(courses);
  });
});


// GET DISTRICTS REQUEST (BY PROJECT ID)
router.get('/getdistricts/:projectId', ensureAuthenticated, function(req, res, next) {
  db.districts.find({
    projectId: mongojs.ObjectId(req.params.projectId)
  }, function(err, courses) {
    if (err) {
      res.send(err);
    }
    res.json(courses);
  });
});


// GET TRAINEES REQUEST (BY: IDNUMBER, AND PROJECTID)
router.get('/findtrainees/:projectid/:idnumber/:districtid/:department/:module/:courseid', ensureAuthenticated, function(req, res, next) {
  var query = {
    projectId: mongojs.ObjectId(req.params.projectid)
  };

  //CHECKS IF IDNUMBER IS NOT NULL
  if ((req.params.idnumber != "undefined") && (req.params.idnumber != "0")) {
    query.idNumber = req.params.idnumber;
  }
  if (req.params.districtid != "not-selected") {
    query.district = mongojs.ObjectId(req.params.districtid);
  }
  if (req.params.department != "not-selected") {
    query.department = req.params.department;
  }

  // DECLARES getTrainees PROMISE & changeDistricts PROMISE
  let getTrainees = function() {
    return new Promise(function(resolve, reject) {
      db.trainees.find(query, function(err, trainees) {
        if (err) {
          // res.send(err);
          reject(err);
        }
        query = {};
        resolve(trainees);
      });
    });
  };

  // CHANGES THE DISTRICTS IN THE getTrainees RESPONSE FROM THEIR ID TO THEIR NAMES
  let changeDistricts = function(trainees) {
    return new Promise(function(resolve, reject) {
      var index = 0;
      trainees.forEach(function(trainee) {
        // console.log(trainee);
        db.districts.findOne({
          _id: mongojs.ObjectId(trainee.district)
        }, function(err, district) {
          if (err) {
            // res.send(err);
            reject(err);
          }
          trainee.district = district.name;
          // console.log(trainee);
          index++;
          if (index == trainees.length) {
            resolve(trainees);
          }
        });
      });
    });
  };

  // CHANGES THE COURSES IN THE getTrainees RESPONSE FROM THEIR ID TO THEIR VALUES
  let changeCourses = function(trainees) {
    return new Promise(function(resolve, reject) {
      var traineeIndex = 0;

      trainees.forEach(function(trainee) {
        var courseIndex = 0;
        var newCourses = [];
        trainee.courses.forEach(function(courseNumber) {
          db.courses.findOne({
            idNumber: courseNumber.idNumber
          }, function(err, course) {
            if (err) {
              reject(err);
            }
            course.assimilationStatuses = courseNumber.assimilationStatuses;
            course.assimilationDate = courseNumber.assimilationDate;
            course.notes = courseNumber.notes;
            newCourses.push(course);
            courseIndex++;

            if (courseIndex == trainee.courses.length) {
              traineeIndex++;
              courseIndex = 0;
              trainee.courses = sortByKey(newCourses, "idNumber");
              // console.log(trainee.courses);
              if (traineeIndex == trainees.length) {
                resolve(sortByKey(trainees, "idNumber"));
              }

              function sortByKey(array, key) {
                return array.sort(function(a, b) {
                  var x = a[key];
                  //console.log(a[key]);
                  var y = b[key];
                  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                });
              }
            }
          });
        });
      });
    });
  };

  // CHECK MODULE AND COURSE PROMISES
  let checkModuleAndCourse = function(trainees) {
    return new Promise(function(resolve, reject) {
      var newTrainees = [];
      if ((req.params.module == "not-selected") && (req.params.courseid == "not-selected")) {
        resolve(trainees);
      } else {
        traineeIndex = 0;
        trainees.forEach(function(trainee) {
          traineeIndex++;
          var moduleExists = false;
          var courseExists = false;
          if (req.params.module == "not-selected") {
            moduleExists = true;
          }
          if (req.params.courseid == "not-selected") {
            courseExists = true;
          }

          var courseIndex = 0;
          trainee.courses.forEach(function(course) {
            courseIndex++;
            if (req.params.module != "not-selected") {
              course.modules.forEach(function(module) {
                if (module == req.params.module) {
                  moduleExists = true;
                }
              });
            }

            if (req.params.courseid != "not-selected") {
              if (course._id == req.params.courseid) {
                courseExists = true;
              }
            }

          });

          if (courseIndex == trainee.courses.length) {
            if (moduleExists && courseExists) {
              newTrainees.push(trainee);
            }

            if (traineeIndex == trainees.length) {
              resolve(newTrainees);
            }
          }
        });
      }
    });
  };

  // PERFORMS SEQUNCE OF PROMISES, SENDIG EACH RESULT AS AN ARGUMENT
  getTrainees().then(function(result) {
    return changeDistricts(result);
  }).then(function(result) {
    return changeCourses(result);
  }).then(function(result) {
    return checkModuleAndCourse(result);
  }).then(function(result) {
    res.json(result);
  });

}); // END OF GET TRAINEES REQUEST (BY: IDNUMBER, AND PROJECTID)


router.put('/savecourse/:traineeid', function(req, res, next) {
  var traineeId = req.params.traineeid;
  var course = req.body;
  console.log(traineeId);
  console.log(course);
  db.trainees.update({
    "idNumber": traineeId,
    "courses.idNumber": course.idNumber
  }, {
    $set: {
      "courses.$": course
    }
  })

});


// FUNCTION THAT MAKES SURE USER IS AUTHENTICATED, THROWS IF NOT
// TODO: Create an import for the function instead of declaring it several times
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.json({
    'error': 'not logged in'
  });
}

// EXPORT API ROUTE, TO ENABLE OUTSIDE USING
module.exports = router;

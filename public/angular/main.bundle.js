webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-body></app-body>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_body_body_component__ = __webpack_require__("../../../../../src/app/components/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_save_dialog_save_dialog_component__ = __webpack_require__("../../../../../src/app/components/save-dialog/save-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_body_body_component__["a" /* BodyComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_save_dialog_save_dialog_component__["a" /* SaveDialogComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatInputModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_7__components_save_dialog_save_dialog_component__["a" /* SaveDialogComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/body/body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main Row for the input fields -->\n<div class=\"row grey mainrow\">\n  <div class=\"container\">\n    <!-- Headers -->\n    <h2 class=\"green-text bold indent\">דיווח הטמעה</h2>\n    <h3 class=\"green-text indent\">איתור חניך לפי:</h3>\n\n    <!-- Input form -->\n    <form>\n\n      <!-- Project and ID div -->\n      <div class=\"indent col-md-6 col-md-offset-6 col-xs-10 col-xs-offset-2 right\">\n        <div class=\"form-group\">\n          <label for=\"selectedProjectName\">פרוייקט:</label>\n          <select (change)=\"projectSelected()\" required [(ngModel)]=\"selectedProjectName\" class=\"form-control\" name=\"selectedProjectName\" id=\"selectedProjectName\">\n              <option *ngFor='let project of user.projects' value=\"{{project}}\">{{project}}</option>\n          </select>\n        </div>\n\n        <!-- ID div -->\n        <div class=\"form-group\">\n          <label for=\"enteredID\">מספר זהות:</label>\n          <input name=\"enteredID\" (keyup.enter)=\"searchPerformed()\" [(ngModel)]=\"enteredID\" type=\"text\" class=\"form-control\" id=\"enteredID\">\n        </div>\n\n      </div>\n\n      <!-- More Search fields div -->\n      <div id=\"moreSearchFieldsDiv\">\n\n        <!-- District div -->\n        <div class=\"indent col-md-2 col-xs-10 right\">\n          <div class=\"form-group\">\n            <label for=\"district\">מחוז</label>\n            <select (change)=\"districtChanged()\" [(ngModel)]=\"selectedDistrictId\" class=\"form-control\" name=\"selectedDistrictId\" id=\"district\">\n              <option value=\"not-selected\">בחר מרשימה</option>\n              <option *ngFor='let district of districts' value=\"{{district.id}}\">{{district.name}}</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-md-offset-1 col-xs-offset-2\"></div>\n\n        <!-- Department div -->\n        <div class=\"indent col-md-2 col-xs-10 right\">\n          <div class=\"form-group\">\n            <label for=\"selectedDepartment\">מחלקה</label>\n            <select class=\"form-control\" [(ngModel)]=\"selectedDepartment\" name=\"selectedDepartment\" id=\"selectedDepartment\">\n              <option value=\"not-selected\">בחר מרשימה</option>\n              <option *ngFor='let department of selectedDepartments' value=\"{{department}}\">{{department}}</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-md-offset-1 col-xs-offset-2\"></div>\n\n        <!-- Module div -->\n        <div class=\"indent col-md-2 col-xs-10 right\">\n          <div class=\"form-group\">\n            <label for=\"module\">מודול</label>\n            <select class=\"form-control\" (change)=\"moduleChanged()\" [(ngModel)]=\"selectedModule\" name=\"selectedModule\" id=\"module\">\n              <option value=\"not-selected\">בחר מרשימה</option>\n              <option *ngFor='let module of selectedProject.modules' value=\"{{module}}\">{{module}}</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-md-offset-1 col-xs-offset-2\"></div>\n\n        <!-- Course div -->\n        <div class=\"indent col-md-2 col-xs-10 right\">\n          <div class=\"form-group\">\n            <label for=\"selectedCourseId\">קורס</label>\n            <select class=\"form-control\" [(ngModel)]=\"selectedCourseId\" name=\"selectedCourseId\" id=\"selectedCourseId\">\n              <option value=\"not-selected\">בחר מרשימה</option>\n              <option *ngFor='let course of visibleCourses' value=\"{{course.id}}\">{{course.shortName}}</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-md-offset-1 col-xs-offset-2\"></div>\n\n      </div>\n      <!-- End of more search fields -->\n\n      <!-- 'Search' & 'Advanced search' div -->\n      <div class=\"indent col-md-offset-2 col-md-10 col-xs-offset-2 col-xs-10 right\">\n        <a href=\"#\" (click)=\"searchPerformed()\" class=\"btn btn-primary\">חיפוש</a>\n        <a href=\"#\" class=\"btn btn-success\" id=\"moreSearchFieldsBtn\"><span id=\"moreSearchFieldsIcon\" class=\"glyphicon glyphicon-plus\"></span> חיפוש מתקדם</a>\n      </div>\n\n    </form>\n  </div>\n</div> <!-- End of mainrow -->\n\n<!-- No Search div -->\n<div *ngIf=\"!didPerformSearch\" class=\"row\">\n  <div class=\"container\" style=\"text-align: center\">\n    <br><br>\n    <h3>להתחלת דיווח, הזן את נתוני המשתמש ולחץ ״חיפוש״</h3>\n    <br><br>\n  </div>\n</div>\n\n<!-- Results div -->\n<div *ngIf=\"didPerformSearch\" class=\"row\">\n  <div class=\"container\">\n\n    <!-- No results div -->\n    <div style=\"font-weight: bold; font-size: 20px; direction: rtl; text-align: center; margin: auto;\" *ngIf=\"visibleTraineesForPage.length == 0\" class=\"row\">\n      <h3>לא נמצאו תוצאות חיפוש</h3>\n      <img style=\"width:220px; height: 220px;\" src=\".\\assets\\img\\notFound.png\" alt=\"Not Found\">\n      <br><br>\n    </div>\n\n    <!-- Results -->\n    <div *ngIf=\"visibleTraineesForPage.length != 0\" class=\"table-responsive\">\n\n      <table class=\"table table-striped table-hover\">\n\n        <!-- Table headers -->\n        <thead>\n          <th></th>\n          <th>מספר זהות</th>\n          <th>שם משפחה</th>\n          <th>שם פרטי</th>\n          <th>משתמש</th>\n          <th>סוג משתמש</th>\n          <th>מחוז</th>\n          <th>מחלקה</th>\n        </thead>\n\n        <!-- Table's body - from the results -->\n        <tbody *ngFor=\"let trainee of visibleTraineesForPage\">\n          <!-- Trainee detailes row -->\n          <tr>\n            <td class=\"centered\">\n              <span style=\"cursor:pointer;\" *ngIf=\"!trainee.isOpen\" (click)=\"trainee.isOpen = !trainee.isOpen\" class=\"glyphicon glyphicon-plus-sign\"></span>\n              <span style=\"cursor:pointer;\" *ngIf=\"trainee.isOpen\" (click)=\"trainee.isOpen = !trainee.isOpen\" class=\"glyphicon glyphicon-minus-sign\"></span>\n            </td>\n            <td>{{trainee.idNumber}}</td>\n            <td>{{trainee.lastName}}</td>\n            <td>{{trainee.firstName}}</td>\n            <td>{{trainee.userId}}</td>\n            <td>{{trainee.traineeType}}</td>\n            <td>{{trainee.district}}</td>\n            <td>{{trainee.department}}</td>\n          </tr>\n\n          <!-- Courses detailes row (row for each course) -->\n          <tr *ngFor=\"let course of trainee.courses\" class=\"hiderow\">\n            <!--hiderow -->\n            <td *ngIf=\"trainee.isOpen\" colspan=\"11\">\n\n              <!-- Course name -->\n              <div class=\"col-md-12 col-xs-12 form-group\">\n                <!-- <label for=\"comments\" class=\"bold\">קורס:</label> -->\n                <br>\n                <h2 class=\"centered\">קורס: <u>{{course.shortName}}</u></h2>\n              </div>\n\n              <!-- Proccesses table -->\n              <div class=\"col-md-12 table-responsive\">\n                <table class=\"table table-striped\">\n                  <thead>\n                    <th>שם התהליך</th>\n                    <th>מצב הטמעה</th>\n                    <th>תאריך הטמעה</th>\n                    <th>הערות לתהליך</th>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let process of course.processes; let i = index\">\n\n                      <!-- Proccess name -->\n                      <td>\n                        <p>{{process}}</p>\n                      </td>\n\n                      <!-- Status select box -->\n                      <td>\n                        <div class=\"form-group\">\n                          <select class=\"form-control\" name=\"\" (change)=\"statusChanged($event, course, i)\" value={{course.history[course.history.length-1].assimilationStatuses[i]}}>\n                            <option value=\"not-selected\">בחר מצב מהרשימה</option>\n                            <option *ngFor='let assimilationStatus of selectedProject.assimilationStatuses'   value=\"{{assimilationStatus}}\">{{assimilationStatus}}</option>\n                          </select>\n                        </div>\n                      </td>\n\n                      <!-- Process Date -->\n                      <td>\n                        <div class=\"form-group\">\n                          <input type=\"date\" class=\"form-control\" (change)=\"dateChanged($event, course, i)\" name=\"date\" value=\"{{course.history[course.history.length-1].assimilationDate[i]}}\" id=\"date\">\n                        </div>\n                      </td>\n\n                      <!-- Proccess note -->\n                      <td>\n                        <div class=\"form-group\">\n                          <textarea class=\"form-control\" name=\"name\" rows=\"5\" (change)=\"noteChanged($event, course, i)\">{{course.history[course.history.length-1].notes[i]}}</textarea>\n                        </div>\n                      </td>\n\n\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n\n              <!-- Save course button -->\n              <div class=\"col-md-12\">\n                <a href=\"#\" (click)=\"savePerformed(trainee, course)\" class=\"btn btn-success meetingSaveBtn\">שמור</a>\n              </div>\n\n            </td>\n          </tr>\n\n        </tbody>\n      </table>\n\n      <!-- Pagination area -->\n      <nav class=\"centered ltr\" aria-label=\"Page navigation\">\n        <ul class=\"pagination\">\n\n          <!-- Back -->\n          <li class=\"no-bg\">\n            <a (click)=\"lastPage()\" href=\"#\" aria-label=\"Previous\">\n              <span aria-hidden=\"true\">&laquo;</span>\n            </a>\n          </li>\n\n          <!-- Pages -->\n          <li [ngClass]=\"{'active': selectedPage == page}\" *ngFor=\"let page of pages\"><a (click)=\"pageChanged(page)\" href=\"#\">{{page}}</a></li>\n\n          <!-- Next -->\n          <li class=\"no-bg\">\n            <a (click)=\"nextPage()\" href=\"#\" aria-label=\"Next\">\n              <span aria-hidden=\"true\">&raquo;</span>\n            </a>\n          </li>\n        </ul>\n      </nav>\n\n    </div>\n\n  </div>\n</div>\n<!-- End of results div -->\n"

/***/ }),

/***/ "../../../../../src/app/components/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__save_dialog_save_dialog_component__ = __webpack_require__("../../../../../src/app/components/save-dialog/save-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/*******************************************************

                --BODY COMPONENT PAGE--
This page is the body page of the angulat app. It is
responsible for retrieving data from the API, presenting
it onto the HTML, and sending implementation statuses to
the server.

*******************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Import all modules





//Component settings
var BodyComponent = (function () {
    //This is the class' constructor. it gets the data services that its using,
    //and the dialogs it needs to pop up
    function BodyComponent(userService, projectService, dialog) {
        var _this = this;
        this.userService = userService;
        this.projectService = projectService;
        this.dialog = dialog;
        //Declaring the employee variable
        this.user = {
            id: '',
            name: '',
            email: '',
            projects: ['']
        };
        //Declaring the selected Project variable
        this.selectedProject = {
            id: '',
            name: '',
            roles: [''],
            traineeTypes: [''],
            modules: [''],
            assimilationStatuses: ['']
        };
        //Declaring the courses variable. NOTE: these are ALL the courses,
        //not just the visible ones.
        this.courses = [];
        //Declaring the visibleCourses variable. NOTE: this changes by the
        //selected moudle.
        this.visibleCourses = [];
        //Declaring the selected course variable. Initialized to "not-selected"
        this.selectedCourseId = "not-selected";
        //Declaring the districts variable
        this.districts = [];
        //Declaring the selectedDepartments array. NOTE: this is changed by the
        //selected District
        this.selectedDepartments = [];
        //Declaring the selected department variable. Initialized to "not-selected"
        this.selectedDepartment = "not-selected";
        //Declaring pages array for each page
        this.pages = [];
        //Setting the number of results per page
        this.resultsPerPage = 2;
        //Declaring the flag for search performed
        this.didPerformSearch = false;
        //Declaring the trainees array (here goes the API's result)
        this.trainees = [];
        //Declaring the visible trainees for the page
        this.visibleTraineesForPage = [];
        //Get the user's detailes from the userService
        this.userService.getUser().subscribe(function (user) {
            _this.user.id = user._id;
            _this.user.name = user.name;
            _this.user.email = user.email;
            _this.user.projects = user.projects;
            _this.selectedProjectName = user.projects[0];
            //Call the projectSelected function in order to load the default project's data
            _this.projectSelected();
        });
    }
    //This function gets the selected project name from the user, and completes
    //the rest of the projects data through the API
    BodyComponent.prototype.projectSelected = function () {
        var _this = this;
        //Clear selected districts, departments and courses
        this.selectedDistrictId = null;
        this.selectedDepartments = null;
        this.districts = [];
        this.courses = [];
        //Get the project's data using the projectService. The function gets the
        //selected project name as a parameter
        this.projectService.getProjects(this.selectedProjectName).subscribe(function (project) {
            _this.selectedProject.id = project._id;
            _this.selectedProject.name = project.name;
            _this.selectedProject.roles = project.roles;
            _this.selectedProject.traineeTypes = project.traineeTypes;
            _this.selectedProject.modules = project.modules;
            _this.selectedProject.assimilationStatuses = project.assimilationStatuses;
            _this.selectedModule = "not-selected";
            //Gets the project's courses from the API. Sends the selected project's
            //ID as a parameter
            _this.projectService.getCourses(_this.selectedProject.id).subscribe(function (courses) {
                for (var i = 0; i < courses.length; i++) {
                    var myCourse = {
                        id: '',
                        idNumber: 0,
                        longName: '',
                        shortName: '',
                        processes: [''],
                        modules: ['']
                    };
                    myCourse.id = courses[i]._id;
                    myCourse.idNumber = courses[i].idNumber;
                    myCourse.longName = courses[i].longName;
                    myCourse.shortName = courses[i].shortName;
                    myCourse.processes = courses[i].processes;
                    myCourse.modules = courses[i].modules;
                    _this.courses.push(myCourse);
                }
            });
            //Call the moduleChanged function in order to load the district, department and course's data
            _this.moduleChanged();
            _this.projectService.getDistricts(_this.selectedProject.id).subscribe(function (districts) {
                for (var i = 0; i < districts.length; i++) {
                    var myDistrict = {
                        id: '',
                        name: '',
                        departments: ['']
                    };
                    myDistrict.id = districts[i]._id;
                    myDistrict.name = districts[i].name;
                    myDistrict.departments = districts[i].departments;
                    _this.districts.push(myDistrict);
                }
                _this.selectedDistrictId = "not-selected";
            });
        });
    };
    //This function is called when the district has changed. It changes the
    //departments accordingly
    BodyComponent.prototype.districtChanged = function () {
        this.selectedDepartments = [];
        for (var _i = 0, _a = this.districts; _i < _a.length; _i++) {
            var district = _a[_i];
            if (this.selectedDistrictId == district.id) {
                this.selectedDepartments = district.departments;
            }
        }
    };
    //This function is called when the module has changed. It changes the
    //courses accordingly
    BodyComponent.prototype.moduleChanged = function () {
        this.visibleCourses = [];
        if (this.selectedModule == "not-selected") {
            this.visibleCourses = this.courses;
            return;
        }
        for (var _i = 0, _a = this.courses; _i < _a.length; _i++) {
            var course = _a[_i];
            for (var _b = 0, _c = course.modules; _b < _c.length; _b++) {
                var module = _c[_b];
                // console.log(course);
                if (this.selectedModule == module) {
                    this.visibleCourses.push(course);
                }
            }
        }
    };
    //This function is called when a search has been performed. It does the following:
    //1. Changes the didPerformSearch flag to true, and revealing the results table
    //2. Gets the search parameters and sends it to the API, to get the relevant results
    BodyComponent.prototype.searchPerformed = function () {
        var _this = this;
        //Resets the previous results
        this.pages = [];
        this.trainees = [];
        this.visibleTraineesForPage = [];
        this.didPerformSearch = true;
        if (this.getRequest) {
            this.getRequest.unsubscribe();
        }
        //Trim the user's input
        if (this.enteredID != undefined) {
            this.enteredID = this.enteredID.trim();
        }
        //Gets the trainees result from the projectService, by sending all the inputs by the user
        this.getRequest = this.projectService.getTrainees(this.selectedProject.id, this.enteredID, this.selectedDistrictId, this.selectedDepartment, this.selectedModule, this.selectedCourseId).subscribe(function (trainees) {
            //Calculates number of result pages
            _this.numberOfPages = Math.trunc(trainees.length / _this.resultsPerPage);
            if (trainees.length % _this.resultsPerPage > 0) {
                _this.numberOfPages++;
            }
            //Adds pages to pages array
            for (var i_1 = 1; i_1 <= _this.numberOfPages; i_1++) {
                _this.pages.push(i_1);
            }
            //Sets first page to selcted (after search)
            _this.selectedPage = 1;
            //Gets results and adds them to results (trainees) array
            for (var i = 0; i < trainees.length; i++) {
                var myTrainee = {
                    firstName: '',
                    lastName: '',
                    idNumber: 0,
                    phone: 0,
                    district: '',
                    department: '',
                    traineeType: '',
                    userId: '',
                    courses: [''],
                    isOpen: false
                };
                myTrainee.firstName = trainees[i].firstName;
                myTrainee.lastName = trainees[i].lastName;
                myTrainee.idNumber = trainees[i].idNumber;
                myTrainee.phone = trainees[i].phone;
                myTrainee.district = trainees[i].district;
                myTrainee.department = trainees[i].department;
                myTrainee.traineeType = trainees[i].traineeType;
                myTrainee.userId = trainees[i].userId;
                myTrainee.courses = trainees[i].courses;
                myTrainee.isOpen = false;
                _this.trainees.push(myTrainee);
                if (i == trainees.length - 1) {
                    _this.pageChanged(1);
                }
            }
        });
    };
    //This function is called when the user saves the implementation status. it gets
    //the data from the form and sends it to the API
    BodyComponent.prototype.savePerformed = function (trainee, course) {
        var newCourse = {
            idNumber: course.idNumber,
            assimilationStatuses: course.history[course.history.length - 1].assimilationStatuses,
            assimilationDate: course.history[course.history.length - 1].assimilationDate,
            notes: course.history[course.history.length - 1].notes,
            userId: this.user.id,
            saveDate: new Date()
        };
        // console.log(newCourse);
        this.projectService.saveCourse(trainee.idNumber, newCourse).subscribe(function (course) {
        });
        //Pop up a save completed dialog
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__save_dialog_save_dialog_component__["a" /* SaveDialogComponent */], {
            height: '350px',
            width: '400px',
        });
    };
    //Updates the edited course's data from the form
    BodyComponent.prototype.noteChanged = function (event, course, i) {
        course.history[course.history.length - 1].notes[i] = event.target.value;
    };
    BodyComponent.prototype.statusChanged = function (event, course, i) {
        course.history[course.history.length - 1].assimilationStatuses[i] = event.target.value;
    };
    BodyComponent.prototype.dateChanged = function (event, course, i) {
        course.history[course.history.length - 1].assimilationDate[i] = event.target.value;
    };
    //Changes the page, and the results
    BodyComponent.prototype.pageChanged = function (page) {
        // console.log(page);
        this.visibleTraineesForPage = [];
        this.selectedPage = page;
        var num = ((page - 1) * this.resultsPerPage);
        for (var i = 0; i < this.resultsPerPage; i++) {
            if (this.trainees[num]) {
                this.visibleTraineesForPage.push(this.trainees[num]);
            }
            num++;
        }
    };
    //Switchs to next page
    BodyComponent.prototype.nextPage = function () {
        var newPage = this.selectedPage + 1;
        if (newPage <= this.pages.length) {
            this.pageChanged(newPage);
        }
    };
    //Switchs to last page
    BodyComponent.prototype.lastPage = function () {
        var newPage = this.selectedPage - 1;
        if (newPage > 0) {
            this.pageChanged(newPage);
        }
    };
    //This function is called on the component initialization
    BodyComponent.prototype.ngOnInit = function () {
    };
    return BodyComponent;
}());
BodyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-body',
        template: __webpack_require__("../../../../../src/app/components/body/body.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/body/body.component.css")]
    })
    //BodyComponent Class
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */]) === "function" && _c || Object])
], BodyComponent);

var _a, _b, _c;
//# sourceMappingURL=body.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/save-dialog/save-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/save-dialog/save-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"font-weight: bold; font-size: 20px; direction: rtl; text-align: center; margin: auto;\">\n  <p>\n    שמירה בוצעה בהצלחה!\n  </p>\n  <img style=\"width:180px; height: 220px;\" src=\".\\assets\\img\\thumbsUp.png\" alt=\"Thumbs Up\">\n  <mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"true\">סגור</button>\n  </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/save-dialog/save-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SaveDialogComponent = (function () {
    function SaveDialogComponent() {
    }
    SaveDialogComponent.prototype.ngOnInit = function () {
    };
    return SaveDialogComponent;
}());
SaveDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-save-dialog',
        template: __webpack_require__("../../../../../src/app/components/save-dialog/save-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/save-dialog/save-dialog.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SaveDialogComponent);

//# sourceMappingURL=save-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        //TODO: MERGE SERVICES
    }
    ProjectService.prototype.getProjects = function (projectName) {
        return this.http.get('api/getproject/' + projectName).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.getCourses = function (projectId) {
        return this.http.get('api/getcourses/' + projectId).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.getDistricts = function (projectId) {
        return this.http.get('api/getdistricts/' + projectId).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.getTrainees = function (projectId, idNumber, districtId, department, module, courseId) {
        if ((!idNumber || idNumber.length === 0)) {
            idNumber = 0;
        }
        return this.http.get('api/findtrainees/' + projectId + '/' + idNumber + '/' + districtId + '/' + department + '/' + module + '/' + courseId).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.saveCourse = function (traineeId, course) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('api/savecourse/' + traineeId, JSON.stringify(course), { headers: headers }).map(function (res) { return res.json(); });
    };
    return ProjectService;
}());
ProjectService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProjectService);

var _a;
//# sourceMappingURL=project.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUser = function () {
        return this.http.get('/api/getuser')
            .map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
// enableProdMode();
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
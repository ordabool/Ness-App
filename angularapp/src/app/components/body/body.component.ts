/*******************************************************

                --BODY COMPONENT PAGE--
This page is the body page of the angulat app. It is
responsible for retrieving data from the API, presenting
it onto the HTML, and sending implementation statuses to
the server.

*******************************************************/


//Import all modules
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { UserService } from '../../services/user.service';
import { User } from '../../model/User';
import { Project } from '../../model/Project';
import { Course } from '../../model/Course';
import { District } from '../../model/District';
import { Trainee } from '../../model/Trainee';
import { SaveDialogComponent } from '../save-dialog/save-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';

//Component settings
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

//BodyComponent Class
export class BodyComponent implements OnInit {

  //Declaring the employee variable
  user: User = {
    id: '',
    name: '',
    email: '',
    projects: ['']
  };

  //Declaring the selected Project variable
  selectedProject: Project = {
    id : '',
    name : '',
    roles : [''],
    traineeTypes : [''],
    modules : [''],
    assimilationStatuses : ['']
  };

  //Declaring the selected project name variable. Initialized to "not-selected"
  selectedProjectName: string;

  //Declaring the courses variable. NOTE: these are ALL the courses,
  //not just the visible ones.
  courses: Course[] = [];

  //Declaring the visibleCourses variable. NOTE: this changes by the
  //selected moudle.
  visibleCourses = [];

  //Declaring the selected course variable. Initialized to "not-selected"
  selectedCourseId : string = "not-selected";

  //Declaring the districts variable
  districts: District[] = [];

  //Declaring the selected department variable
  selectedDistrictId: string;

  //Declaring the selectedDepartments array. NOTE: this is changed by the
  //selected District
  selectedDepartments : string[] = [];

  //Declaring the selected department variable. Initialized to "not-selected"
  selectedDepartment : string = "not-selected";

  //Declaring number of result pages
  numberOfPages;

  //Declaring pages array for each page
  pages = [];

  //Declaring the selected page variable
  selectedPage;

  //Setting the number of results per page
  resultsPerPage = 2;

  //Declaring the selected module variable
  selectedModule: string;

  //Declaring the flag for search performed
  didPerformSearch : boolean = false;

  //Declaring the variable for the ID the user entered
  enteredID : string;

  //Declaring the trainees array (here goes the API's result)
  trainees : Trainee[] = [];

  //Declaring the visible trainees for the page
  visibleTraineesForPage = []

  //Declaring a variable for the request from the API. NOTE: this is necessery
  //due to the need in using "unsubscribe()"
  getRequest;

  //This is the class' constructor. it gets the data services that its using,
  //and the dialogs it needs to pop up
  constructor(private userService: UserService, private projectService: ProjectService, public dialog: MatDialog) {

    //Get the user's detailes from the userService
    this.userService.getUser().subscribe(user => {
      this.user.id = user._id;
      this.user.name = user.name;
      this.user.email = user.email;
      this.user.projects = user.projects;
      this.selectedProjectName = user.projects[0];

      //Call the projectSelected function in order to load the default project's data
      this.projectSelected();
    });

  }

  //This function gets the selected project name from the user, and completes
  //the rest of the projects data through the API
  projectSelected() {

    //Clear selected districts, departments and courses
    this.selectedDistrictId = null;
    this.selectedDepartments = null;
    this.districts = [];
    this.courses = [];

    //Get the project's data using the projectService. The function gets the
    //selected project name as a parameter
    this.projectService.getProjects(this.selectedProjectName).subscribe(project => {
      this.selectedProject.id = project._id;
      this.selectedProject.name = project.name;
      this.selectedProject.roles = project.roles;
      this.selectedProject.traineeTypes = project.traineeTypes;
      this.selectedProject.modules = project.modules;
      this.selectedProject.assimilationStatuses = project.assimilationStatuses;
      this.selectedModule = "not-selected";

      //Gets the project's courses from the API. Sends the selected project's
      //ID as a parameter
      this.projectService.getCourses(this.selectedProject.id).subscribe(courses => {
        for (var i = 0; i < courses.length; i++) {
          var myCourse: Course = {
            id : '',
            idNumber : 0,
            longName : '',
            shortName : '',
            processes : [''],
            modules : ['']
          };
          myCourse.id = courses[i]._id;
          myCourse.idNumber = courses[i].idNumber;
          myCourse.longName = courses[i].longName;
          myCourse.shortName = courses[i].shortName;
          myCourse.processes = courses[i].processes;
          myCourse.modules = courses[i].modules;
          this.courses.push(myCourse);
        }
      });
      //Call the moduleChanged function in order to load the district, department and course's data
      this.moduleChanged();

      this.projectService.getDistricts(this.selectedProject.id).subscribe(districts => {
        for (var i = 0; i < districts.length; i++) {
          var myDistrict: District = {
            id: '',
            name: '',
            departments: ['']
          };
          myDistrict.id = districts[i]._id;
          myDistrict.name = districts[i].name;
          myDistrict.departments = districts[i].departments;
          this.districts.push(myDistrict);
        }
        this.selectedDistrictId = "not-selected";
      });
    });
  }

  //This function is called when the district has changed. It changes the
  //departments accordingly
  districtChanged() {
    this.selectedDepartments = [];
    for (let district of this.districts) {
      if (this.selectedDistrictId == district.id) {
        this.selectedDepartments = district.departments;
      }
    }
  }

  //This function is called when the module has changed. It changes the
  //courses accordingly
  moduleChanged() {
    this.visibleCourses = [];
    if(this.selectedModule == "not-selected"){
      this.visibleCourses = this.courses;
      return;
    }
    for (let course of this.courses) {
      for (let module of course.modules){
        // console.log(course);
        if (this.selectedModule == module) {
          this.visibleCourses.push(course);
        }
      }
    }
  }

  //This function is called when a search has been performed. It does the following:
  //1. Changes the didPerformSearch flag to true, and revealing the results table
  //2. Gets the search parameters and sends it to the API, to get the relevant results
  searchPerformed(){

    //Resets the previous results
    this.pages = []
    this.trainees = [];
    this.visibleTraineesForPage=[];
    this.didPerformSearch = true;
    if(this.getRequest){
      this.getRequest.unsubscribe();
    }

    //Trim the user's input
    if(this.enteredID != undefined){
      this.enteredID = this.enteredID.trim();
    }

    //Gets the trainees result from the projectService, by sending all the inputs by the user
    this.getRequest = this.projectService.getTrainees(this.selectedProject.id ,this.enteredID, this.selectedDistrictId, this.selectedDepartment, this.selectedModule, this.selectedCourseId).subscribe(trainees => {

      //Calculates number of result pages
      this.numberOfPages = Math.trunc(trainees.length/this.resultsPerPage);
      if(trainees.length%this.resultsPerPage > 0){
        this.numberOfPages++;
      }

      //Adds pages to pages array
      for (let i = 1; i <= this.numberOfPages; i++) {
          this.pages.push(i);
      }

      //Sets first page to selcted (after search)
      this.selectedPage = 1;

      //Gets results and adds them to results (trainees) array
      for (var i = 0; i < trainees.length; i++) {
        var myTrainee: Trainee = {
          firstName : '',
          lastName : '',
          idNumber : 0,
          phone : 0,
          district : '',
          department : '',
          traineeType : '',
          userId : '',
          courses : [''],
          isOpen : false
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

        this.trainees.push(myTrainee);
        if (i == trainees.length-1){
          this.pageChanged(1);
        }
      }
    });
  }

  //This function is called when the user saves the implementation status. it gets
  //the data from the form and sends it to the API
  savePerformed(trainee, course){
    var newCourse = {
      idNumber : course.idNumber,
      assimilationStatuses : course.assimilationStatuses,
      assimilationDate : course.assimilationDate,
      notes : course.notes
    };

    this.projectService.saveCourse(trainee.idNumber, newCourse).subscribe(course => {
    });

    //Pop up a save completed dialog
    let dialogRef = this.dialog.open(SaveDialogComponent, {
      height: '350px',
      width: '400px',
    });
  }

  //Updates the edited course's data from the form
  noteChanged(event, course, i){
    course.notes[i] = event.target.value;
  }

  statusChanged(event, course, i){
    course.assimilationStatuses[i] = event.target.value;
  }

  dateChanged(event, course){
    course.assimilationDate = event.target.value;
  }


  //Changes the page, and the results
  pageChanged(page){
    // console.log(page);
    this.visibleTraineesForPage=[];
    this.selectedPage = page;
    var num = ((page-1)*this.resultsPerPage);

    for(var i=0;i<this.resultsPerPage; i++){
      if(this.trainees[num]){
        this.visibleTraineesForPage.push(this.trainees[num]);
      }
      num++;
    }
  }

  //Switchs to next page
  nextPage(){
    var newPage = this.selectedPage+1;
    if(newPage <= this.pages.length){
      this.pageChanged(newPage)
    }
  }

  //Switchs to last page
  lastPage(){
    var newPage = this.selectedPage-1;
    if(newPage > 0){
      this.pageChanged(newPage)
    }
  }

  //This is called on the component initialization
  ngOnInit() {

  }

}

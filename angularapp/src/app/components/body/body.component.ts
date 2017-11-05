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

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  user: User = {
    id: '',
    name: '',
    email: '',
    projects: ['']
  };

  selectedProject: Project = {
    id: '',
    name: '',
    roles: [''],
    traineeTypes: [''],
    modules: [''],
    assimilationStatuses: ['']
  };

  courses: Course[] = [];
  visibleCourses = [];
  getRequest;
  districts: District[] = [];

  selectedDepartments : string[] = [];
  selectedDepartment : string = "not-selected";
  selectedCourseId : string = "not-selected";

  numberOfPages;
  pages = [];
  selectedPage;
  resultsPerPage = 10;

  selectedProjectName: string;
  selectedDistrictId: string;
  selectedModule: string;
  didPerformSearch : boolean = false;

  enteredID : string;

  trainees : Trainee[] = [];

  constructor(private userService: UserService, private projectService: ProjectService, public dialog: MatDialog) {
    this.userService.getUser().subscribe(user => {
      this.user.id = user._id;
      this.user.name = user.name;
      this.user.email = user.email;
      this.user.projects = user.projects;
      this.selectedProjectName = user.projects[0];
      this.projectSelected();
    });
  }

  projectSelected() {
    this.selectedDistrictId = null;
    this.selectedDepartments = null;
    this.districts = [];
    this.courses = [];

    this.projectService.getProjects(this.selectedProjectName).subscribe(project => {
      this.selectedProject.id = project._id;
      this.selectedProject.name = project.name;
      this.selectedProject.roles = project.roles;
      this.selectedProject.traineeTypes = project.traineeTypes;
      this.selectedProject.modules = project.modules;
      this.selectedProject.assimilationStatuses = project.assimilationStatuses;
      this.selectedModule = "not-selected";

      this.projectService.getCourses(this.selectedProject.id).subscribe(courses => {
        for (var i = 0; i < courses.length; i++) {
          var myCourse: Course = {
            id: '',
            idNumber: 0,
            longName: '',
            shortName: '',
            processes: [''],
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

  districtChanged() {
    this.selectedDepartments = [];
    for (let district of this.districts) {
      if (this.selectedDistrictId == district.id) {
        this.selectedDepartments = district.departments;
      }
    }
  }

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

  searchPerformed(){
    this.trainees = [];
    this.didPerformSearch = true;
    if(this.getRequest){
      this.getRequest.unsubscribe();
    }
    if(this.enteredID != undefined){
      this.enteredID = this.enteredID.trim();
    }
    this.getRequest = this.projectService.getTrainees(this.selectedProject.id ,this.enteredID, this.selectedDistrictId, this.selectedDepartment, this.selectedModule, this.selectedCourseId).subscribe(trainees => {
      this.numberOfPages = Math.trunc(trainees.length/this.resultsPerPage);
      if(trainees.length%this.resultsPerPage > 0){
        this.numberOfPages++;
      }
      for (let i = 1; i <= this.numberOfPages; i++) {
          this.pages.push(i);
      }
      this.selectedPage = 1;
      // console.log(trainees);
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
      }
    });
  }

  savePerformed(trainee, course){
    var newCourse = {
      idNumber : course.idNumber,
      assimilationStatuses : course.assimilationStatuses,
      assimilationDate : course.assimilationDate,
      notes : course.notes
    };

    this.projectService.saveCourse(trainee.idNumber, newCourse).subscribe(course => {
    });

    let dialogRef = this.dialog.open(SaveDialogComponent, {
      height: '350px',
      width: '400px',
    });
  }

  noteChanged(event, course, i){
    course.notes[i] = event.target.value;
  }

  statusChanged(event, course, i){
    course.assimilationStatuses[i] = event.target.value;
  }

  dateChanged(event, course){
    course.assimilationDate = event.target.value;
  }

  ngOnInit() {
  }

}

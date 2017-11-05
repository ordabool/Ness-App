import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectService {

  constructor(private http:Http) {
    //TODO: MERGE SERVICES
  }

  getProjects(projectName){
    return this.http.get('api/getproject/'+projectName).map(res => res.json());
  }

  getCourses(projectId){
    return this.http.get('api/getcourses/'+projectId).map(res => res.json());
  }

  getDistricts(projectId){
    return this.http.get('api/getdistricts/'+projectId).map(res => res.json());
  }

  getTrainees(projectId ,idNumber, districtId, department, module, courseId){
    if ((!idNumber || idNumber.length === 0)){
      idNumber = 0
    }
    return this.http.get('api/findtrainees/'+projectId+'/'+idNumber+'/'+districtId+'/'+department+'/'+module+'/'+courseId).map(res => res.json());
  }

  saveCourse(traineeId, course){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('api/savecourse/'+traineeId, JSON.stringify(course), {headers: headers}).map(res => res.json());
  }




}

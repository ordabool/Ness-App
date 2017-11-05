import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../model/User';

@Injectable()
export class UserService {

  constructor(private http : Http) {

  }

  getUser(){
    return this.http.get('/api/getuser')
        .map(res => res.json());
  }

}

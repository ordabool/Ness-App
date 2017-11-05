import { Component } from '@angular/core';
import { ProjectService } from './services/project.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService, ProjectService]
})
export class AppComponent {
}

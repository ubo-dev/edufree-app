import { Component, OnInit } from '@angular/core';
import IUser from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-instructor-page',
  templateUrl: './instructor-page.component.html',
  styleUrls: ['./instructor-page.component.css'],
})
export class InstructorPageComponent {
  constructor(private userService: UserService) {}

}

import { Component, OnInit } from '@angular/core';
import IUser from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-instructor-page',
  templateUrl: './instructor-page.component.html',
  styleUrls: ['./instructor-page.component.css'],
})
export class InstructorPageComponent implements OnInit {
  constructor(private userService: UserService) {}

  public users: IUser[] = [];
  ngOnInit(): void {
    this.getUsers();
  }

  allUsers: any;
  async getUsers() {
    this.allUsers = await this.userService.getAllUsers();
    this.users = this.allUsers;
    console.log(this.users)
  }
}

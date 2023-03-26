import { Component } from '@angular/core';
import IUser from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent {
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

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-instructors-page',
  templateUrl: './instructors-page.component.html',
  styleUrls: ['./instructors-page.component.css'],
})
export class InstructorsPageComponent implements OnInit {
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.getUsers();
  }

  
  allUsers: any;
  async getUsers() {
    this.allUsers = await this.userService.getAllUsers();
    console.log(this.allUsers);
  }
}

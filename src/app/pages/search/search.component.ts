import { Component, OnInit } from '@angular/core';
import IUser from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
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
  public searchUsers(key: string): void {
    console.log(key);
    const results: IUser[] = [];
    for (const user of this.users) {
      if (user.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || user.lastName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || user.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || user.phoneNumber.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(user);
      }
    }
    this.users = results;
    console.log(this.users);
    if (results.length === 0 || !key) {
      this.getUsers();
    }
  }
}

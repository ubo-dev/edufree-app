import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Instructor from 'src/app/models/instructor.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private userService: UserService) {}

  public instructors: Instructor[] = [];
  ngOnInit(): void {
    this.getInstructors();
  }

  allInstructors: any;
  async getInstructors() {
    this.allInstructors = await this.userService.getAllInstructors();
    this.instructors = this.allInstructors;
    console.log(this.instructors)
  }


  public searchUsers(key: string): void {
    console.log(key);
    const results: Instructor[] = [];
    for (const instructor of this.instructors) {
      if (instructor.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || instructor.lastName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || instructor.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || instructor.phoneNumber.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || instructor.university.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || instructor.department.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || instructor.description.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || instructor.courses.map(c=>c.name).toString().toLowerCase().indexOf(key.toLowerCase()) !== -1 
      ) {
        results.push(instructor);
      }
    }
    this.instructors = results;
    console.log(this.instructors);
    if (results.length === 0 || !key) {
      this.getInstructors();
    }
  }
}

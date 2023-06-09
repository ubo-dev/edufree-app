import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Instructor from 'src/app/models/instructor.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-instructor-profile',
  templateUrl: './instructor-profile.component.html',
  styleUrls: ['./instructor-profile.component.css'],
})
export class InstructorProfileComponent implements OnInit {
  constructor(private userService: UserService, public auth:AuthService) {}
  document$!: Observable<any>;
  
  ngOnInit(): void {
    this.document$ = this.userService.getDocumentByUid(this.auth.currentUserId, 'instructors');
  }
}


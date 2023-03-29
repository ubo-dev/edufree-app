import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  constructor(private userService: UserService, public auth:AuthService) {}
  document$!: Observable<any>;
  
  ngOnInit(): void {
    this.document$ = this.userService.getDocumentByUid(this.auth.currentUserId, 'students');
  }
}

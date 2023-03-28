import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-instructor-page',
  templateUrl: './instructor-page.component.html',
  styleUrls: ['./instructor-page.component.css'],
})
export class InstructorPageComponent implements OnInit{
  constructor(private userService: UserService, private auth:AuthService) {}


  
  document$!: Observable<any>;
  
  ngOnInit(): void {
    this.document$ = this.userService.getDocumentByUid(this.auth.currentUserId);
  }


}

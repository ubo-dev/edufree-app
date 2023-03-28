import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {
  
  constructor(private userService: UserService, public auth:AuthService) {}
  document$!: Observable<any>;
  
  ngOnInit(): void {
    this.document$ = this.userService.getDocumentByUid(this.auth.currentUserId, 'students');
  }
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }


}

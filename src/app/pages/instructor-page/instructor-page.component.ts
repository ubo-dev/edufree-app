import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-instructor-page',
  templateUrl: './instructor-page.component.html',
  styleUrls: ['./instructor-page.component.scss'],
})
export class InstructorPageComponent implements OnInit{
  constructor(private userService: UserService, public auth:AuthService) {}
  document$!: Observable<any>;
  
  ngOnInit(): void {
    this.document$ = this.userService.getDocumentByUid(this.auth.currentUserId, 'instructors');
    console.log(this.auth.authState.imgUrl) 
  }
  
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
  isClicked = false;
  
}

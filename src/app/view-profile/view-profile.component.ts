import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {
  constructor(private userService: UserService, public auth: AuthService) { }
  document$!: Observable<any>;

  ngOnInit(): void {
    this.document$ = this.userService.getDocumentByUid(this.auth.currentUserId, 'instructors');
  }
  showMenu = false;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
  openModal = false;
  isClicked = false;
  openModal2 = false;

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {
  constructor(private userService: UserService, public auth:AuthService) {}
  document$!: Observable<any>;
  
  ngOnInit(): void {
    this.document$ = this.userService.getDocumentByUid(this.auth.currentUserId, 'instructors');
  }
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];

}

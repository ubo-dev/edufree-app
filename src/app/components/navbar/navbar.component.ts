import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  link = ''
  constructor(public auth: AuthService, private afAuth: AngularFireAuth, private router: Router) {
  }

  
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}
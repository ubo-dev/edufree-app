import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'edufree-app';

  constructor(private router: Router) {}
  
  showNavbar(): boolean {
    const hideNavbar = this.router.url === '/login-teacher' || this.router.url === '/login-student' || this.router.url === '/instructor-page/edit'
    || this.router.url === '/status' || this.router.url === '/register' || this.router.url === '/student-page/edit' 
    || this.router.url === '/chat';
    return !hideNavbar;
  }
}

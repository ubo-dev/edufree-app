import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isTeacher: boolean = false;

  toggle() {
    console.log("this.isTeacher: ", this.isTeacher);
    this.isTeacher = !this.isTeacher;
  }
}

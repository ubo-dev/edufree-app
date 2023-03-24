import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.css']
})
export class LoginTeacherComponent {
  constructor(private auth: AngularFireAuth) {}
  credentials = {
    email: '',
    password: '',
  };

  showAlert = false;
  alertMsg = 'Please wait! We are logging you in.';
  alertColor = 'blue';
  inSubmission = false;

  async login() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! We are logging you in.';
    this.alertColor = 'blue';
    this.inSubmission = true;

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      );
    } catch (error) {
      this.inSubmission = false;
      this.alertMsg = 'An unexpected error occurred. Please try again.';
      this.alertColor = 'red';
      console.log(error);
      return;
    }
    this.alertMsg = 'You have been logged in successfully.';
    this.alertColor = 'green';
  }
}

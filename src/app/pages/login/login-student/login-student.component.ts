import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css'],
})
export class LoginStudentComponent {
  constructor(private auth: AngularFireAuth,private router: Router) {}
  credentials = {
    email: '',
    password: '',
  };

  showAlert = false;
  alertMsg = 'Please wait! We are logging you in.';
  alertColor = 'blue';
  inSubmission = false;

  async login() {
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
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
    await sleep(3000);
    this.router.navigate(['/student-page']);
  }
}

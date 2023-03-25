import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import IUser from 'src/app/models/user.model';
import { RegisterValidators } from '../validators/register-validators';
//import { EmailTaken } from '../validators/email-taken';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private auth: AuthService,
    private db: AngularFirestore,
    private router: Router
  ) {}
  isTeacher: boolean = true;
  

  toggle() {
    this.isTeacher = !this.isTeacher;
    console.log('this.isTeacher: ', this.isTeacher);
  }

  inSubmission = false;

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  lastName = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  email = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  confirm_password = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13),
  ]);

  isInstructor = new FormControl(this.isTeacher, [Validators.required]);

  registerForm = new FormGroup({
    name: this.name,
    lastName: this.name,
    email: this.email,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber,
    isInstructor: this.isInstructor,
  });

  showAlert = false;
  alertMsg = 'Please wait! Your account is being created...';
  alertColor = 'blue';
  async register() {
    const sleep = (ms:number) => new Promise(r => setTimeout(r, ms));
    this.showAlert = true;
    this.alertMsg = 'Please wait! Your account is being created...';
    this.alertColor = 'blue';
    this.inSubmission = true;
    try {
      await this.auth.createUser(this.registerForm.value as IUser);
    } catch (e) {
      console.error(e);
      this.alertMsg = 'An unexpected error occurred. Please try again later.';
      this.alertColor = 'red';
      this.inSubmission = false;
      return;
    }

    this.alertMsg = 'Your account has been created successfully!';
    this.alertColor = 'green';
    await sleep(3000);
    if(this.isTeacher){
      this.router.navigate(['/instructors-page']);
    }else {
      this.router.navigate(['/student-page']);
    }
  }
}

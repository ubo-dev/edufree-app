import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Instructor from 'src/app/models/instructor.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-instructor-profile',
  templateUrl: './instructor-profile.component.html',
  styleUrls: ['./instructor-profile.component.css'],
})
export class InstructorProfileComponent {
  
//   constructor(
//     private auth: AuthService,
//     private db: AngularFirestore,
//     private router: Router
//   ) {}


//   inSubmission = false;
//   name = new FormControl('', [Validators.required, Validators.minLength(3)]);
//   lastName = new FormControl('', [
//     Validators.required,
//     Validators.minLength(3),
//   ]);
//   email = new FormControl('', [Validators.required, Validators.email]);

//   phoneNumber = new FormControl('', [
//     Validators.required,
//     Validators.minLength(13),
//     Validators.maxLength(13),
//   ]);

//   university = new FormControl('', [Validators.required, Validators.minLength(3)]);
//   department = new FormControl('', [Validators.required, Validators.minLength(3)]);
//   description = new FormControl('', [Validators.required, Validators.minLength(3)]);
//   courses = new FormControl([''], [Validators.required, Validators.minLength(3)]);



//   registerForm = new FormGroup({
//     name: this.name,
//     lastName: this.name,
//     email: this.email,
//     phoneNumber: this.phoneNumber,
//     university: this.university,
//     department: this.department,
//     description: this.description,
//     courses: this.courses
//   });

//   showAlert = false;
//   alertMsg = 'Please wait! Your account is being created...';
//   alertColor = 'blue';
//   async register() {
//     const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
//     this.showAlert = true;
//     this.alertMsg = 'Please wait! Your account is being created...';
//     this.alertColor = 'blue';
//     this.inSubmission = true;
//     try {
//       await this.auth.createInstructor(this.registerForm.value as Instructor);
//     } catch (e) {
//       console.error(e);
//       this.alertMsg = 'An unexpected error occurred. Please try again later.';
//       this.alertColor = 'red';
//       this.inSubmission = false;
//       return;
//     }

//     this.alertMsg = 'Your account has been created successfully!';
//     this.alertColor = 'green';
//   }
}


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import Instructor from 'src/app/models/instructor.model';
import Course from 'src/app/models/course.model';
import Student from 'src/app/models/student.model';
import { RegisterValidators } from '../validators/register-validators';
import { EmailTaken } from '../validators/email-taken';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  //styleUrls: ['./register.component.css'],
  styles: [
    `
      :host ::ng-deep .custom-ms .p-multiselect-label {
        width: 250px !important;
      }
    `,
  ],
})



export class RegisterComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private emailTaken: EmailTaken,
    private router: Router
  ) {}



  course: Course[] = [];
  ngOnInit() {
    this.course = [
      {
        id: 1,
        name: 'Physics',
      },
      {
        id: 2,
        name: 'Math',
      },
      {
        id: 3,
        name: 'History',
      },
      {
        id: 4,
        name: 'English',
      },
      {
        id: 5,
        name: 'Programming',
      },
      {
        id: 6,
        name: 'Chemistry',
      },
      {
        id: 7,
        name: 'Biology',
      },
      {
        id: 8,
        name: 'Science',
      },
      {
        id: 9,
        name: 'Turkish',
      },
      {
        id: 10,
        name: 'Geography',
      },
      {
        id: 11,
        name: 'Deucth',
      },
      {
        id: 12,
        name: 'French',
      },

    ];
  }
  isTeacher: boolean = true;

  toggle() {
    this.isTeacher = !this.isTeacher;
    console.log('this.isTeacher: ', this.isTeacher);
  }

  inSubmission = false;


  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl(
      '',
      [Validators.required, Validators.email],
      [this.emailTaken.validate]
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
      ),
    ]),
    confirm_password: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(13),
      Validators.maxLength(13),
    ]),
    university: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    department: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    courses: new FormControl([], [Validators.required]),
    imgUrl: new FormControl('https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg', [Validators.required]),
  });

  showAlert = false;
  alertMsg = 'Please wait! Your account is being created...';
  alertColor = 'blue';

  async registerStudent() {
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    this.showAlert = true;
    this.alertMsg = 'Please wait! Your account is being created...';
    this.alertColor = 'blue';
    this.inSubmission = true;
    try {
      await this.auth.createStudent(this.registerForm.value as Student);
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
    if (this.isTeacher) {
      this.router.navigate(['/instructor-page']);
    } else {
      this.router.navigate(['/student-page']);
    }
  }

  async registerInstructor() {
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    this.showAlert = true;
    this.alertMsg = 'Please wait! Your account is being created...';
    this.alertColor = 'blue';
    this.inSubmission = true;
    try {
      await this.auth.createInstructor(this.registerForm.value as Instructor);
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
    if (this.isTeacher) {
      this.router.navigate(['/instructor-page']);
    } else {
      this.router.navigate(['/student-page']);
    }
  }
}

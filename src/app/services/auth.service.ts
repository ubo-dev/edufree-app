import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import Instructor from '../models/instructor.model';
import Student from '../models/student.model';
import { Observable, of } from 'rxjs';
import { delay, map, filter, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private instructorCollection: AngularFirestoreCollection<Instructor>;
  private studentCollection: AngularFirestoreCollection<Student>;
  public isAuthenticated$: Observable<boolean>;
  public isAuthenticatedWithDelay$: Observable<boolean>;
  public redirect = false;

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.instructorCollection = this.db.collection('instructors');
    this.studentCollection = this.db.collection('students');
    this.isAuthenticated$ = auth.user.pipe(map((user) => !!user));
    this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(delay(1000));
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(e => this.route.firstChild),
      switchMap(route => route?.data ?? of({})),
    ).subscribe(data => {
      this.redirect = data['authOnly'] ?? false;
    })
  }

  public async createInstructor(instructorData: Instructor) {

    const instructorCred = await this.auth.createUserWithEmailAndPassword(
      instructorData.email as string,
      instructorData.password as string
    );
    if (!instructorCred.user) {
      throw new Error('User not created.');
    }

    await this.instructorCollection.doc(instructorCred.user.uid).set({
      name: instructorData.name,
      lastName: instructorData.lastName,
      email: instructorData.email,
      phoneNumber: instructorData.phoneNumber,
      university: instructorData.university,
      department: instructorData.department,
      description: instructorData.description,
      courses: instructorData.courses,
    });

    await instructorCred.user.updateProfile({
      displayName: instructorData.name,
    });
  }

  public async createStudent(studentData: Student) {

    const studentCred = await this.auth.createUserWithEmailAndPassword(
      studentData.email as string,
      studentData.password as string
    );
    if (!studentCred.user) {
      throw new Error('User not created.');
    }

    await this.studentCollection.doc(studentCred.user.uid).set({
      name: studentData.name,
      lastName: studentData.lastName,
      email: studentData.email,
      phoneNumber: studentData.phoneNumber
    });

    await studentCred.user.updateProfile({
      displayName: studentData.name,
    });
  }

  public async logout($event?: Event) {
    if ($event) {
      $event.preventDefault();
    }

    await this.auth.signOut();

    if (this.redirect) {
      await this.router.navigate(['/']);
    }
  }
}

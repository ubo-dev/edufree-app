import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import Instructor from '../models/instructor.model';
import Student from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private instructorCollection: AngularFirestoreCollection<Instructor>;
  private studentCollection: AngularFirestoreCollection<Student>;

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
  ) {
    this.instructorCollection = this.db.collection('instructors');
    this.studentCollection = this.db.collection('students');
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

}

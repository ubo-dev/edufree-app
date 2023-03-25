import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import IUser from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersCollection: AngularFirestoreCollection<IUser>;

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.usersCollection = this.db.collection('users');
  }

  public async createUser(userData: IUser) {
    if (!userData.password) {
      throw new Error('Password not provided.');
    }

    const userCred = await this.auth.createUserWithEmailAndPassword(
      userData.email as string,
      userData.password as string
    );
    if (!userCred.user) {
      throw new Error('User not created.');
    }

    await this.usersCollection.doc(userCred.user.uid).set({
      name: userData.name,
      lastName: userData.lastName,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
      isInstructor: userData.isInstructor
    });

    await userCred.user.updateProfile({
      displayName: userData.name,
    });
  }
}

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private db: AngularFirestore) {}

  getAllUsers() {
    return new Promise<any>((resolve) => {
      this.db
        .collection('users')
        .valueChanges({ idField: 'id' })
        .subscribe((users) => resolve(users));
    });
  }
}

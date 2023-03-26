import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private db: AngularFirestore) {}

  getAllInstructors() {
    return new Promise<any>((resolve) => {
      this.db
        .collection('instructors')
        .valueChanges({ idField: 'id' })
        .subscribe((instructors) => resolve(instructors));
    });
  }
}

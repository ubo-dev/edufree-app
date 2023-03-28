import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

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

  getDocumentByUid(uid: string): Observable<any> {
    const document: AngularFirestoreDocument<any> = this.db.collection('instructors').doc(uid);
    return document.snapshotChanges().pipe(
      map(action => {
        const data = action.payload.data();
        const id = action.payload.id;
        return { id, ...data };
      })
    );
  }
}

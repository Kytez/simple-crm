import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  getDoc,
  updateDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  userCollection = collection(this.firestore, 'users');

  constructor(private firestore: Firestore) {}

  addUser(userData: any) {
    addDoc(this.userCollection, userData);
  }

}

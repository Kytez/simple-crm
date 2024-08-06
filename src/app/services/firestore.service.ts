import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
  getDocs,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  userCollection = collection(this.firestore, 'users');
  allUsers: any[] = [];

  unsubUserList: any;

  constructor(private firestore: Firestore) {
    this.getUsers();
  }

  addUser(userData: any) {
    addDoc(this.userCollection, userData)
    .then((docRef) => {
      updateDoc(doc(this.userCollection, docRef.id), {
        userId: docRef.id
      });
    });
  }

  getUsers() {
    // const users = getDocs(this.userCollection);
    // (await users).forEach((user) => {
    //   this.allUsers.push(user.data());
    // });

    // collectionData(this.userCollection).subscribe((userData) => {
    //   this.allUsers = userData;
    // });

    this.unsubUserList = onSnapshot(this.userCollection, (userList) => {
      this.allUsers = [];
      userList.forEach(user => {
        this.allUsers.push(user.data());       
      });
      this.transformBirthDate();
      console.log(this.allUsers);
    });
    
  }

  ngOnDestroy() {
    this.unsubUserList();
  }



  transformBirthDate() {
    this.allUsers.forEach((user) => {
      let date = new Date(user['birthDate']);

      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();

      user['birthDate'] = `${day}.${month}.${year}`;
    })
  }
}

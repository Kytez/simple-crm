import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDatepickerModule, MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { User } from '../../models/user.class';
import {MatCardModule} from '@angular/material/card';
import { FirestoreService } from '../services/firestore.service';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  getDoc,
  updateDoc,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatDialogModule, MatDatepickerModule, MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {

  user = new User();
  allUsers: any[] = [];

  constructor(public dialog: MatDialog, private firestoreService: FirestoreService, private firestore: Firestore) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    collectionData(this.firestoreService.userCollection).subscribe((users: any) => {
      this.allUsers = users;      
    });    
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

}

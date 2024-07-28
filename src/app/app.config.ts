import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

const firebaseConfig = {
  projectId: 'simple-crm-e9d80',
  appId: '1:732314925388:web:7c674fd717932f609837e9',
  storageBucket: 'simple-crm-e9d80.appspot.com',
  apiKey: 'AIzaSyBtsIN0s0lAyvSYIfqY-02RdenNplYOIaQ',
  authDomain: 'simple-crm-e9d80.firebaseapp.com',
  messagingSenderId: '732314925388',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
  ],
};

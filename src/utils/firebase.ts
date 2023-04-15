import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyALEznJ2Wq68gbxXNUDxkqs67gYybNe9L8',
  authDomain: 'auto-expensive-tracker.firebaseapp.com',
  projectId: 'auto-expensive-tracker',
  storageBucket: 'auto-expensive-tracker.appspot.com',
  messagingSenderId: '91850912037',
  appId: '1:91850912037:web:8f70a6bc88b46653002acc',
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { createContext } from 'react';

export const FirebaseContext = createContext<{ dataBase: unknown } | null>(null);

export const useFirebaseConnect = () => {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
  };

  const app = initializeApp(firebaseConfig);
  const dataBase = getFirestore(app);

  return { dataBase };
};

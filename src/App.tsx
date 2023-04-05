import React from 'react';

import { FirebaseContext, useFirebaseConnect } from '@/utils';

import { AuthPage } from './pages/AuthPage';

export const App = () => {
  const { dataBase } = useFirebaseConnect();
  return (
    <FirebaseContext.Provider value={{ dataBase }}>
      <AuthPage />
    </FirebaseContext.Provider>
  );
};

import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { FirebaseContext, useFirebaseConnect } from '@/utils';

import { routes } from './pages';

export const App = () => {
  const { dataBase } = useFirebaseConnect();
  return (
    <FirebaseContext.Provider value={{ dataBase }}>
      <Suspense fallback={'Loading'}>
        <RouterProvider router={routes} />
      </Suspense>
    </FirebaseContext.Provider>
  );
};

import React, { Suspense, useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './pages';

export const App = () => {
  return (
    <Suspense fallback={'Loading'}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

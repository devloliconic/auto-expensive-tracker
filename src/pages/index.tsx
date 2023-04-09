import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

const AuthPage = React.lazy(() => import('./AuthPage'));

export const routes = createBrowserRouter([
  {
    path: 'login',
    element: <AuthPage />,
  },
  {
    path: '/',
    element: 'Loading',
  },
  {
    path: '*',
    element: <Navigate to={'/login'} />,
  },
]);

import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

const AuthPage = React.lazy(() => import('./AuthPage'));
const HomePage = React.lazy(() => import('./HomePage'));
const ProfilePage = React.lazy(() => import('./ProfilePage'));

export const router = createBrowserRouter([
  {
    path: 'login',
    element: <AuthPage />,
  },
  {
    path: 'profile',
    element: <ProfilePage />,
  },
  {
    path: '/',
    element: <HomePage />,
  },

  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);

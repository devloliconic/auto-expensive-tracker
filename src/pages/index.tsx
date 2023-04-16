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
    path: '/',
    element: <HomePage />,
  },
  {
    path: ':vim',
    element: <ProfilePage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);

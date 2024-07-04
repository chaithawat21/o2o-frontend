import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LoginForm from '../pages/LoginForm';
import RegisterForm from '../pages/RegisterForm';
import CartPage from '../pages/CartPage';
import ProfilePage from '../pages/ProfilePage';
import HomePage from '../pages/HomePage';

const main = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginForm /> },
      { path: 'register', element: <RegisterForm /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'cart', element: <CartPage /> }
    ]
  }
]);

function AppRouter() {
  return (
    <RouterProvider router={main} />
  );
}

export default AppRouter;
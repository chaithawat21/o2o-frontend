import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LoginForm from '../pages/LoginForm';
import RegisterForm from '../pages/RegisterForm';
import CartPage from '../pages/CartPage';
import ProfilePage from '../pages/ProfilePage';
import HomePage from '../pages/HomePage';
import SelectPage from '../pages/SelectPage';
import AboutPage from '../pages/AboutPage';
import SupportPage from '../pages/SupportPage';
import OrderConfirmed from '../pages/OrderConfirmed';
import LoanDetailPage from '../pages/LoanDetailPage';
import Checkout from '../pages/Checkout';
import AdminPage from '../pages/AdminPage';


const main = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginForm /> },
      { path: 'register', element: <RegisterForm /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'select', element: <SelectPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'support', element: <SupportPage /> },
      { path: 'orderconfirm', element: <OrderConfirmed/> },
      { path: 'loanDetail', element: <LoanDetailPage /> },
      { path: 'admin', element: <AdminPage/> },
      { path: 'success', element: <Checkout /> }    ]
  }
]);

function AppRouter() {
  return (
    <RouterProvider router={main} />
  );
}

export default AppRouter;
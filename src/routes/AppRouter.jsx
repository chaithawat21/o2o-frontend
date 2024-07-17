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
import ActivatedLayout from '../layouts/ActivatedLayout';
import UserActivation from '../pages/UserActivation';
import BorrowDetailPage from '../pages/BorrowDetailPage';
import BorrowRegisterForm from '../pages/BorrowRegisterForm';
import Repayment from '../pages/Repayment';

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
      { path: 'orderconfirm', element: <OrderConfirmed /> },
      { path: 'loanDetail', element: <LoanDetailPage /> },
      { path: 'admin', element: <AdminPage /> },
      { path: 'success', element: <Checkout /> },
      { path: 'activation', element: <UserActivation /> },
      { path: 'borrowDetail', element: <BorrowDetailPage />},
      { path: 'borrowRegister', element: <BorrowRegisterForm />},
      { path: 'repayment', element: <Repayment />},
    ],
  },
]);

// const loanDataByid = createBrowserRouter([
//   {
//     path: '/',
//     element: <SelectPage />,
//     children:[{path : '/:id' ,element: <LoanDetailPage />}]
//   }
// ])

const activated = createBrowserRouter([
  {
    path: '/',
    element: <ActivatedLayout />,
    children: [{ path: 'activation', element: <UserActivation /> }],
  },
]);

function AppRouter() {
  const pathname = window.location.pathname;
  return (
    <RouterProvider router={pathname === '/activation/' ? activated : main} />
  );
}

export default AppRouter;

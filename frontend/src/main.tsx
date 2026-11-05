import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';
import ItemsPage from './pages/ItemsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import VerifyEmailPage from './pages/VerifyEmailPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import VerifiedRoute from './components/auth/VerifiedRoute';

const router = createBrowserRouter([
  {
    path: '/login',
    Component: LoginPage,
  },
  {
    path: '/register',
    Component: RegisterPage,
  },
  {
    path: '/forgot-password',
    Component: ForgotPasswordPage,
  },
  // ログインが必要 (メール未認証でも可)
  {
    Component: ProtectedRoute,
    children: [
      { path: '/verify-email', Component: VerifyEmailPage },
      // ログイン+メール認証済みの状態が必要
      {
        Component: VerifiedRoute,
        children: [{ path: '/', Component: ItemsPage }],
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);

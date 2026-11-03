import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';
import ItemsPage from './pages/ItemsPage';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    Component: ItemsPage,
  },
  {
    path: '/login',
    Component: LoginPage,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import LoginPage from './pages/LoginPage';
import ItemsPage from './pages/ItemsPage';

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
    <RouterProvider router={router} />
  </StrictMode>,
);

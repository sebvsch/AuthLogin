import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './pages/Login.tsx'
import { Dashboard } from './pages/Dashboard.tsx'
import { AuthProvider } from './auth/AuthProvider.tsx'
import App from './App.tsx'
import PrivateRoutes from './routes/PrivateRoutes.tsx'

import './index.css'
import { Registrar } from './pages/Registrar.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/  ",
    element: <Registrar />,
  },
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

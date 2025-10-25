import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Root from './MainLayouts/MainLayout.jsx'
import { router } from './Routes/Routes.jsx'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './Context/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>

      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />

    </AuthProvider>


  </StrictMode>,
)

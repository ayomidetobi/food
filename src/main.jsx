import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Footer from './components/Footer.jsx'
import Profile from './Profile.jsx'
import Scan from './Scan-history.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Edit from './components/Edit.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ActivationSuccess from './ActivationSuccess.jsx'
import Userprofile from './Userprofile.jsx'
import RegSuccess from './RegSucess.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/footer",
    element: <Footer />
  },
  {
    path: "/profile/:userId/update",
    element: <Profile />
  },
  {
    path: "/scan-history",
    element: <Scan />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/edit",
    element: <Edit />
  },
  {
    path: "/activate/:uid/:token",
    element: <ActivationSuccess />
  },
  {
    path: "/profile/:userId",
    element: <Userprofile />
  },
  {
    path: "registration/confirm-email",
    element: <RegSuccess />
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
    </AuthProvider>
  </React.StrictMode>,
)

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

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
    path: "/profile",
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
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

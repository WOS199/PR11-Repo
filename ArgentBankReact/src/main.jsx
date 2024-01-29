import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/home/Home.jsx'
import SignIn from './pages/signIn/SignIn.jsx'
import User from './pages/user/User.jsx'

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "signIn",
    element: <SignIn />
  },
  {
    path: "user",
    element: <User />
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)

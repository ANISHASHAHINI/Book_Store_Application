import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routers/Router.jsx'
import AuthProviders from './contects/AuthProviders.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
        <RouterProvider router={Router} />
    </AuthProviders>
  </React.StrictMode>,
)

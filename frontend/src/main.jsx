import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import { LandingPage, RequestorDashboard, InvestorDashboard  } from './pages/index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />} >
      <Route path="" element={<LandingPage />} />
      <Route path="requestor-dashboard" element={<RequestorDashboard />} />
      <Route path="investor-dashboard" element={<InvestorDashboard />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
)

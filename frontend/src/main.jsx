import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import { LandingPage, Dashboard, CreateCampaign } from './pages/index.js'
import { Login, Signup } from './auth/index.js'

import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { StateContextProvider } from './context/index.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />} >
      <Route path="" element={<LandingPage />} />
      <Route path="dashboard" element={<Dashboard />} >
        <Route path="create-campaign" element={<CreateCampaign />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThirdwebProvider ChainId={84532}> {/* 84532 is the chainId of the Thirdweb network */}
      <StateContextProvider>
        <RouterProvider router={router} />
      </StateContextProvider>
    </ThirdwebProvider>
  </React.StrictMode>,
)

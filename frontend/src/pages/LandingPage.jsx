import React from 'react'
import { Footer, Navbar } from '../components/index.js'
import { Outlet } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default LandingPage

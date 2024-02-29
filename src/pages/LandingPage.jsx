import React from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RequestorDashboard from './RequestorDashboard/RequestorDashboard'
import InvestorDashboard from './InvestorDashboard/InvestorDashboard';
import Land from '../components/LandingItems/Land'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default LandingPage

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import RequestorDashboard from './pages/RequestorDashboard/RequestorDashboard.jsx';
import Profile from './pages/RequestorDashboard/DashboardItem/Profile.jsx';
import List from './pages/RequestorDashboard/DashboardItem/List.jsx';
import Progress from './pages/RequestorDashboard/DashboardItem/Progress.jsx';
import BuyBack from './pages/RequestorDashboard/DashboardItem/BuyBack.jsx';
import InvestorDashboard from './pages/InvestorDashboard/InvestorDashboard.jsx';
import Marketplace from './pages/InvestorDashboard/DashboardItem/Marketplace.jsx';
import Investments from './pages/InvestorDashboard/DashboardItem/Investments.jsx';
import InvestmentCard from './components/InvestorItems/InvestmentCard.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Land from './components/LandingItems/Land.jsx';
import './index.css';

const router= createBrowserRouter(
  createRoutesFromElements(
      <Route path="" element={<LandingPage />}>
        <Route path="/" element={<Land />} />
        <Route path="/InvestorDashboard" element={<InvestorDashboard />} >
          <Route path="/InvestorDashboard/" element={<Profile />} />
          <Route path="/InvestorDashboard/Profile" element={<Profile />} />
          <Route path="/InvestorDashboard/Marketplace" element={<Marketplace />} />
          <Route path="/InvestorDashboard/Investments" element={<Investments />} >
            <Route path="/InvestorDashboard/Investments/" element={<InvestmentCard />} />
            <Route path="/InvestorDashboard/Investments/All" element={<InvestmentCard />} />
            <Route path="/InvestorDashboard/Investments/Active" element={<InvestmentCard />} />
            <Route path="/InvestorDashboard/Investments/Exited" element={<InvestmentCard />} />
          </Route>
        </Route>
        <Route path="/RequestorDashboard" element={<RequestorDashboard />}>
          <Route path="/RequestorDashboard/" element={<Profile />} />
          <Route path="/RequestorDashboard/Profile" element={<Profile />} />
          <Route path="/RequestorDashboard/List" element={<List />} />
          <Route path="/RequestorDashboard/Progress" element={<Progress />} />
          <Route path="/RequestorDashboard/BuyBack" element={<BuyBack />} />
        </Route>
      </Route>
  )
)

ReactDOM.render(
<React.StrictMode>
<RouterProvider router={router}/>
</React.StrictMode>
,
  document.getElementById('root')
);

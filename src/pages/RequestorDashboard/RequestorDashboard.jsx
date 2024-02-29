import React from 'react';
import Sidebar from './DashboardItem/Sidebar';
import { Outlet } from 'react-router-dom';

const RequestorDashboard = () => {
  return (
    <>
    <div className="flex bg-[#121c24] border-t-2">
        <Sidebar />
        <Outlet/>
    </div>
    </>
  );
};

export default RequestorDashboard;
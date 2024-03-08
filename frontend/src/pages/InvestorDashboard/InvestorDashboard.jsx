import React from 'react';
import Sidebar2 from './DashboardItem/Sidebar2';
import { Outlet } from 'react-router-dom';

const RequestorDashboard = () => {
  return (
    <>
    <div className="flex bg-[#121c24] border-t-2">
        <Sidebar2 />
        <Outlet />
    </div>
    </>
  );
};

export default RequestorDashboard;
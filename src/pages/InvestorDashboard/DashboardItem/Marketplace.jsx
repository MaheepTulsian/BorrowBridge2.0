import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import SearchBar from '../../../components/SearchBar';
import PitchCard from '../../../components/InvestorItems/PitchCard';

const Marketplace = () => {
  const [hidePitchList, setHidePitchList] = useState(false);

  const handleLinkClick = () => {
    setHidePitchList(true);
  };

  return (
    <div className='h-lvh w-3/4 my-10'>
      <div className={`h-full w-full ${hidePitchList ? 'hidden' : 'flex'} flex-col items-center`} id='PitchList'>
        <SearchBar />
        <div className="w-11/12 mt-10 grid grid-cols-3 place-items-center gap-10">
          <Link to="/InvestorDashboard/Marketplace/id" onClick={handleLinkClick}>
            <PitchCard />
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Marketplace;

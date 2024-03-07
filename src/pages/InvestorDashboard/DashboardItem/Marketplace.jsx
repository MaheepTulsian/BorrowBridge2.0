
import { Link, Outlet } from 'react-router-dom';
import SearchBar from '../../../components/SearchBar';
import PitchCard from '../../../components/InvestorItems/PitchCard';

const Marketplace = () => {

  return (
    <div className='h-lvh w-3/4 my-10'>
      <div className={`h-full w-full flex flex-col items-center`} id='PitchList'>
        <SearchBar />
        <div className="w-11/12 mt-10 grid grid-cols-3 place-items-center gap-10">
          <Link to="/InvestorDashboard/Marketplace/id-1">
            <PitchCard />
          </Link>
          <Link to="/InvestorDashboard/Marketplace/id-2">
            <PitchCard />
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Marketplace;
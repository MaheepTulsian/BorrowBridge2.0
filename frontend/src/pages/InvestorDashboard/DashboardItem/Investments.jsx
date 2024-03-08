import React from 'react'
import { useLocation , Link, Outlet } from 'react-router-dom'
import InvestmentCard from '../../../components/InvestorItems/InvestmentCard';

const Investments = () => {
  const { pathname } = useLocation();
  const subpage = pathname.split("/InvestorDashboard/Investments/")?.[1];
  
  function Linkness(type) {
    let classes = "w-20 h-10 rounded-lg flex items-center justify-center hover:bg-[#29384d]";
    if (type === subpage) {
      classes += " bg-[#29384d]";
    }
    return classes;
  }

  return (
    <div className='h-lvh w-3/4 mt-10 flex flex-col items-center'> 
      <div className='w-3/4 mb-2 flex gap-2'>
        <h1 className='text-white text-3xl font-bold'>Your Investments</h1>
      </div>

      <div className='w-3/4 mt-2 flex flex-col items-center justify-center gap-8'>
        <div className='pb-2 flex items-center justify-start w-full gap-2 border-b-2'>
          <Link to="../Investments/All" className={Linkness("All")}>
            <p className='text-white text-sm lg:text-lg'>All</p>
          </Link>
          <Link to="../Investments/Active" className={Linkness("Active")}>
            <p className='text-white text-sm lg:text-lg'>Active</p>
          </Link>
          <Link to="../Investments/Exited" className={Linkness("Exited")}>
            <p className='text-white text-sm lg:text-lg'>Exited</p>
          </Link>
        </div>
        <div className='flex flex-col items-center justify-center w-full gap-4'>
          <InvestmentCard />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Investments

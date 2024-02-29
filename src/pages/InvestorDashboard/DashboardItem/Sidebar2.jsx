import React from 'react'
import { HomeIcon , UserCircleIcon , GlobeAltIcon , CurrencyDollarIcon} from '@heroicons/react/24/outline'
import { useLocation , Link } from 'react-router-dom'


const Sidebar2 = () => {
  const { pathname } = useLocation();
  const subpage = pathname.split("/InvestorDashboard/")?.[1];
  console.log(subpage);
  function Linkness(type) {
    let classes = "w-5/6 h-10 rounded-lg flex items-center justify-start hover:bg-[#29384d]";
    if (type === subpage) {
      classes += " bg-[#29384d]";
    }
    return classes;
  }

  return (
    <div className="py-10 pl-10 w-1/4 h-vh border-r-2 flex flex-col items-start justify-between gap-3">
        <div className="w-full flex flex-col items-start gap-3">
          <Link to="../" className={Linkness("Home")}>
            <HomeIcon className='ml-2 text-white h-6 w-auto' />
            <p className='ml-3 text-white text-sm lg:text-lg'>Home</p>
          </Link>
          <Link to="../InvestorDashboard/Profile" className={Linkness("Profile")}>
            <UserCircleIcon className='ml-2 text-white h-6 w-auto' />
            <p className='ml-3 text-white text-sm lg:text-lg'>Profile</p>
          </Link>
          <Link to="../InvestorDashboard/Marketplace" className={Linkness("Marketplace")}>
            <GlobeAltIcon className='ml-2 text-white h-6 w-auto' />
            <p className='ml-3 text-white text-sm lg:text-lg'>Marketplace</p>
          </Link>
          <Link to="../InvestorDashboard/Investments" className={Linkness("Investments")}>
            <CurrencyDollarIcon className='ml-2 text-white h-6 w-auto' />
            <p className='ml-3 text-white text-sm lg:text-lg'>Investments</p>
          </Link>
        </div>

        <div className='w-5/6 h-10 rounded-lg flex items-center justify-center bg-[#f5c754]'>
          <button className='text-black text-lg font-bold'>Connect Wallet</button>
        </div>
      </div>
  )
}

export default Sidebar2
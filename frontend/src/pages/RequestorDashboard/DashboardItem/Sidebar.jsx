import React from 'react'
import { HomeIcon , UserCircleIcon , PlusIcon , ArrowTrendingUpIcon , ReceiptRefundIcon} from '@heroicons/react/24/outline'
import { useLocation , Link } from 'react-router-dom'

const Sidebar = () => {
  const { pathname } = useLocation();
  const subpage = pathname.split("/RequestorDashboard/")?.[1];
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
          <Link to="../RequestorDashboard/Profile" className={Linkness("Profile")}>
            <UserCircleIcon className='ml-2 text-white h-6 w-auto' />
            <p className='ml-3 text-white text-sm lg:text-lg'>Profile</p>
          </Link>
          <Link to="../RequestorDashboard/List" className={Linkness("List")}>
            <PlusIcon className='ml-2 text-white h-6 w-auto' />
            <p className='ml-3 text-white text-sm lg:text-lg'>List your Business</p>
          </Link>
          <Link to="../RequestorDashboard/Progress" className={Linkness("Progress")}>
            <ArrowTrendingUpIcon className='ml-2 text-white h-6 w-auto' />
            <p className='ml-3 text-white text-sm lg:text-lg'>Funding Progress</p>
          </Link>
          <Link to="../RequestorDashboard/BuyBack" className={Linkness("BuyBack")}>
            <ReceiptRefundIcon className='ml-2 text-white h-6 w-auto' />
            <p className='ml-3 text-white text-sm lg:text-lg'>Buy-Back</p>
          </Link>
        </div>

        <button className='w-5/6 h-10 rounded-lg flex items-center justify-center bg-[#f5c754]'>
          <p className='text-black text-lg font-bold'>Connect Wallet</p>
        </button>
      </div>
  )
}

export default Sidebar
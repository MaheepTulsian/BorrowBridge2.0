import React from 'react'
import { PlusIcon, ArrowTrendingUpIcon, GlobeAltIcon , CurrencyDollarIcon, ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import useAuthStore from '../store/AuthStore.js'

const Sidebar = () => {
    const { user, setUser } = useAuthStore();
    

    const handleLogout = async () => {
        fetch('http://localhost:3000/api/auth/logout', {
            method: 'GET',
            credentials: 'include'
        }).then(() => {
            if (response.ok) {
                setUser(null);
                toast.success('Logged out successfully');
            } else {
                toast.error('Failed to logout');
                throw new Error('Failed to logout. Status: ' + response.status);
            }
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <div className="w-1/4 py-10 pl-10 border-r-2 flex flex-col items-start justify-between gap-3">
            <div className="w-full flex flex-col items-start gap-3">

                <NavLink to="./create-campaign" className={({ isActive }) => isActive ? 'w-5/6 h-10 rounded-lg flex items-center justify-start bg-[#29384d]' : 'w-5/6 h-10 rounded-lg flex items-center justify-start hover:bg-[#29384d]'}>
                    <PlusIcon className='ml-2 text-white h-6 w-auto' />
                    <p className='ml-3 text-white text-sm lg:text-lg'>Create Campaign</p>
                </NavLink>
                <NavLink to="/Marketplace" className={({ isActive }) => isActive ? 'w-5/6 h-10 rounded-lg flex items-center justify-start bg-[#29384d]' : 'w-5/6 h-10 rounded-lg flex items-center justify-start hover:bg-[#29384d]'}>
                    <GlobeAltIcon className='ml-2 text-white h-6 w-auto' />
                    <p className='ml-3 text-white text-sm lg:text-lg'>All Campaigns</p>
                </NavLink>
                <NavLink to="/Progress" className={({ isActive }) => isActive ? 'w-5/6 h-10 rounded-lg flex items-center justify-start bg-[#29384d]' : 'w-5/6 h-10 rounded-lg flex items-center justify-start hover:bg-[#29384d]'}>
                    <ArrowTrendingUpIcon className='ml-2 text-white h-6 w-auto' />
                    <p className='ml-3 text-white text-sm lg:text-lg'>Funding Progress</p>
                </NavLink>
                <NavLink to="/Investments" className={({ isActive }) => isActive ? 'w-5/6 h-10 rounded-lg flex items-center justify-start bg-[#29384d]' : 'w-5/6 h-10 rounded-lg flex items-center justify-start hover:bg-[#29384d]'}>
                    <CurrencyDollarIcon className='ml-2 text-white h-6 w-auto' />
                    <p className='ml-3 text-white text-sm lg:text-lg'> Donations</p>
                </NavLink>
            </div>

            <button onClick={handleLogout} className='w-5/6 h-10 rounded-lg font-bold flex items-center justify-center bg-red-500'> {/*  [#f5c754] */}
                <ArrowLeftEndOnRectangleIcon className=' text-black h-6 w-auto' />
                <p className='ml-3 text-black text-sm'>Logout</p>
            </button>
        </div>
    )
}

export default Sidebar
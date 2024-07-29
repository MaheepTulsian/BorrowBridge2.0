import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Disclosure } from '@headlessui/react'
import Logo from '../assets/logo.png';

const navigation = [
  { name: 'Requestor Dashboard', href: '/RequestorDashboard' },
  { name: 'Investor Dashboard', href: '/InvestorDashboard' },
]

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-[#121c24]">
    {({ open }) => (
      <nav className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="w-full flex items-center justify-between">
          <Link to="" className='flex items-center justify-center gap-2 text-white text-4xl '>
            <img
              className="h-10 w-auto"
              src={Logo}
              alt="Logo"
            />
            <h1 className="mt-3 bounce-animation">BorrowBridge</h1>
          </Link>
          <div className="hidden sm:block ml-4">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-gray-700 rounded-md px-3 py-2 text-sm font-medium"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    )}
    </Disclosure>
  );
};

export default Navbar;
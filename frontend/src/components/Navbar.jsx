import { Disclosure } from '@headlessui/react'
import React, { useState } from 'react';

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
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
          <div className="hidden sm:block ml-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    )}
    </Disclosure>
  );
};

export default Navbar;
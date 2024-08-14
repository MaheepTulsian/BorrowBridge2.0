import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import Logo from '../assets/logo.png';
import { useStateContext } from '../context/index';

const navigation = [
  { name: 'Requestor Dashboard', path: '/requestor-dashboard' },
  { name: 'Investor Dashboard', path: '/investor-dashboard' },
];

const Navbar = () => {
  const { connect, address } = useStateContext();

  const buttonClasses = `font-epilogue text-white bg-gray-700 rounded-md px-3 py-2 text-sm font-medium max-w-[150px] ${
    address ? 'bg-[#1dc071] truncate' : 'bg-[#8c6dfd]'
  }`;

  const handleClick = () => {
    if (address) navigate('create-campaign');
    else {
      connect();
      setWalletAddress(address);
    }
  };

  return (
    <Disclosure as="nav" className="bg-[#121c24]">
      {() => (
        <nav className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white text-4xl">
            <img className="h-10 w-auto" src={Logo} alt="Logo" />
            <h1 className="mt-3 bounce-animation">BorrowBridge</h1>
          </Link>
          <div className="hidden sm:flex items-center space-x-4 ml-4">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-white bg-gray-700 rounded-md px-3 py-2 text-sm font-medium'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                }
              >
                {item.name}
              </NavLink>
            ))}
            <button
              type="button"
              className={buttonClasses}
              onClick={handleClick}
            >
              {address ? address : 'Connect Wallet'}
            </button>
          </div>
        </nav>
      )}
    </Disclosure>
  );
};

export default Navbar;

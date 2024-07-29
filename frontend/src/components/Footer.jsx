import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#121c24] border-t-2 text-center text-neutral-200 p-6 md:text-left">
        <div className="md:flex md:justify-evenly md:items-center">
          <div className="flex justify-center mb-6 md:mb-0">
            <Link to="">
              <img
                className="h-10 w-auto"
                src={Logo}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="mt-6 mb-6 text-sm text-neutral-400 flex flex-col gap-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#8a9ebf] underline'
                  : 'hover:text-[#8a9ebf] hover:underline'
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#8a9ebf] underline'
                  : 'hover:text-[#8a9ebf] hover:underline'
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#8a9ebf] underline'
                  : 'hover:text-[#8a9ebf] hover:underline'
              }
            >
              Contact Us
            </NavLink>
          </div>
          <div className="mt-6 mb-6 text-sm text-neutral-400 flex flex-col gap-2">
            <NavLink
              to="/terms"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#8a9ebf] underline'
                  : 'hover:text-[#8a9ebf] hover:underline'
              }
            >
              Terms of use
            </NavLink>
            <NavLink
              to="/privacy"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#8a9ebf] underline'
                  : 'hover:text-[#8a9ebf] hover:underline'
              }
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#8a9ebf] underline'
                  : 'hover:text-[#8a9ebf] hover:underline'
              }
            >
              Help center
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
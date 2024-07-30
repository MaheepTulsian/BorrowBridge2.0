import React from 'react';
import { hero_img, Header_image } from '../assets/index.js';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTwitch } from "react-icons/fa";

import {Navbar, Footer} from '../components/index.js';

function LandingPage() {
  return (
    <>
    <Navbar />
    <div className='h-vh w-full bg-[#121c24] pb-10 flex flex-col items-center justify-center border-t-2'>
      <div className='w-full h-screen pb-32 pt-16 flex items-center justify-center'>
        <div className='w-1/2 h-44 flex items-center justify-center'>
          <div className='px-12 flex flex-col items-start justify-center gap-2'>
            <h1 className='text-7xl text-[#ccc] font-bold'>Empower</h1>
            <h3 className='text-5xl text-[#ccc] font-bold'>Dreams</h3>
            <br />
            <p className='text-xl text-[#ccc] font-semibold'>
              Fueling Local Growth: Invest in Small Businesses with BorrowBridge's Digital Tokens
            </p>
          </div>
        </div>
        <div className='h-full flex items-center justify-center pt-40'>
          <img src={Header_image} alt="Empowering Dreams" />
        </div>
      </div>

      <div className='w-full h-vh py-32 flex items-center justify-center'>
        <div className='w-1/2 h-44 flex items-center justify-center'>
          <img src={hero_img} alt="Our Vision" className='w-3/4 h-96 rounded-3xl shadow-black shadow-md' />
        </div>
        <div className='w-1/2 h-44 flex items-center justify-center'>
          <div className='px-12 flex flex-col items-start justify-center gap-8'>
            <h1 className='text-7xl text-[#ccc] font-bold'>Our Vision</h1>
            <p className='text-xl text-[#ccc] leading-8 font-semibold'>
              Join BorrowBridge in revolutionizing the way small businesses thrive by connecting them with urban investors through innovative digital tokens.
              Experience the power of blockchain technology ensuring transparency and security, creating a level playing field for all.
              Together, let's build a community where dreams flourish and success knows no bounds.
            </p>
          </div>
        </div>
      </div>

      <div className='w-full h-vh py-32 flex flex-col items-center justify-center gap-5'>
        <h1 className='text-7xl text-[#ccc] font-bold'>Tokenize Success</h1>
        <p className='text-3xl text-[#ccc] mb-5'>Discover the Benefits of BorrowBridge's Digital Token System</p>
        <div className='w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center rounded-3xl'>
          <div className='w-4/5 h-44 bg-gray-300 rounded-3xl flex flex-col items-center justify-center gap-4'>
            <h1 className='text-4xl text-black font-bold'>Empower</h1>
            <p className='text-center'>Empower small businesses to reach new heights with community support.</p>
          </div>
          <div className='w-4/5 h-44 bg-gray-300 rounded-3xl flex flex-col items-center justify-center gap-4'>
            <h1 className='text-4xl text-black font-bold'>Transparency</h1>
            <p className='text-center'>Transparent transactions through blockchain for trust and security.</p>
          </div>
          <div className='w-4/5 h-44 bg-gray-300 rounded-3xl flex flex-col items-center justify-center gap-4'>
            <h1 className='text-4xl text-black font-bold'>Opportunity</h1>
            <p className='text-center'>Unlock new investment opportunities and potential high returns.</p>
          </div>
          <div className='w-4/5 h-44 bg-gray-300 rounded-3xl flex flex-col items-center justify-center gap-4'>
            <h1 className='text-4xl text-black font-bold'>Innovation</h1>
            <p className='text-center'>Innovative use of technology for fair and inclusive growth.</p>
          </div>
          <div className='w-4/5 h-44 bg-gray-300 rounded-3xl flex flex-col items-center justify-center gap-4'>
            <h1 className='text-4xl text-black font-bold'>Community</h1>
            <p className='text-center'>Build a supportive community driving local business success.</p>
          </div>
          <div className='w-4/5 h-44 bg-gray-300 rounded-3xl flex flex-col items-center justify-center gap-4'>
            <h1 className='text-4xl text-black font-bold'>Prosperity</h1>
            <p className='text-center'>Foster prosperity for both investors and entrepreneurs with BorrowBridge.</p>
          </div>
        </div>
      </div>

      <div className='w-full h-vh py-32 bg-slate-100 flex flex-col items-center justify-center gap-5'>
        <h1 className='text-5xl text-[#121c24] font-bold'>Unleash the Power of Urban</h1>
        <h1 className='text-5xl text-[#121c24] font-bold'>Investing with BorrowBridge!</h1>
      </div>

      <div className='w-full py-32 flex items-center justify-center gap-5'>
        <div className="text-white rounded-lg p-8 text-center flex flex-col items-center">
          <img
            src="data:image/jpeg;base64,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"
            alt="User"
            className="h-32 w-32 rounded-full object-cover mb-4"
          />
          <p className="text-2xl text-[#ccc] mb-4">
            "BorrowBridge transformed my business! I'm now reaching new heights thanks to their innovative approach."
          </p>
          <p className="text-[#ccc]">
            - John Doe
          </p>
        </div>
      </div>

      <div className='w-full h-vh py-32 flex flex-col items-center justify-center gap-14'>
        <h1 className='text-6xl text-[#ccc] font-bold'>Stay Connected with Us</h1>
        <div className='flex items-center justify-center gap-8'>
          <FaFacebook className='text-[#fff] text-5xl' />
          <FaTwitter className='text-[#fff] text-5xl' />
          <FaInstagram className='text-[#fff] text-5xl' />
          <FaLinkedin className='text-[#fff] text-5xl' />
          <FaTwitch className='text-[#fff] text-5xl' />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default LandingPage;

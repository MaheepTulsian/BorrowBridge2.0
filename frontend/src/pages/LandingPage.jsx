import React from 'react';
import img from '../assets/hero_img.jpg';
import header_img from '../assets/Header_image.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTwitch } from "react-icons/fa";

function LandingPage() {
  return (
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
          <img src={header_img} alt="Empowering Dreams" />
        </div>
      </div>

      <div className='w-full h-vh py-32 flex items-center justify-center'>
        <div className='w-1/2 h-44 flex items-center justify-center'>
          <img src={img} alt="Our Vision" className='w-3/4 h-96 rounded-3xl shadow-black shadow-md' />
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

      <div className='w-full h-vh py-32 flex items-center justify-center gap-5'>
        <div className="text-white rounded-lg p-8 text-center flex flex-col items-center">
          <img
            src={img}
            alt="Empowering Businesses"
            className='w-3/4 h-96 rounded-3xl shadow-black shadow-md'
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

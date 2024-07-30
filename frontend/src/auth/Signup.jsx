import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { welcome, Logo_mobile } from '../assets/index.js';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";

function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(''));

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    const newOtp = [...otp];

    // Handle backspace
    if (value === '') {
      newOtp[index] = '';
      setOtp(newOtp);
      if (index > 0) {
        const prevInput = document.getElementById(`otp-${index - 1}`);
        if (prevInput) {
          prevInput.focus();
        }
      }
    } else if (/^[0-9]$/.test(value)) {
      // Only proceed if the input value is a number
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input field if available
      if (index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };



  const togglePasswordVisibility = () => {
    setPasswordVisible(prevVisible => !prevVisible);
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Simulate OTP sent logic
    setIsOtpSent(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // Add OTP verification logic here
    console.log('OTP entered:', otp);
  };

  return (
    <div className='h-screen w-full bg-[#121c24] text-white flex'>
      <div className='w-1/2 h-full border-8 border-[#121c24]'>
        <div className='w-full h-full border-2 rounded-xl'>
          <div className='h-1/2 w-full'>
            <div className='h-full w-full flex flex-col justify-center text-center'>
              <h1 className='text-5xl font-bold'>Start your</h1>
              <h1 className='text-5xl font-bold'>journey with us</h1>
            </div>
          </div>
          <div className='h-1/2 w-full flex-center'>
            <img src={welcome} alt="" className='h-full' />
          </div>
        </div>
      </div>

      <div className='w-1/2 h-full border-8 border-[#121c24] flex flex-col items-center justify-evenly'>
        <div className='w-full'>
          <Link to="/" className='w-full flex-center'>
            <img src={Logo_mobile} alt="" className='w-1/2' />
          </Link>
        </div>
        <div className='w-full flex-center flex-col gap-10'>
          {!isOtpSent ? (
            <div className='w-full flex-center flex-col gap-10'>
              <div className='w-full flex-center'>
                <h1 className='text-3xl font-semibold'>Signup</h1>
              </div>
              <div className='w-3/4'>
                <form className='flex-center flex-col gap-4' onSubmit={handleNext}>
                  <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="username" className='ml-1 text-[#8a9ebf] text-lg font-semibold'>Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder='Enter your username'
                      required
                      className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'
                    />
                  </div>

                  <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="email" className='ml-1 text-[#8a9ebf] text-lg font-semibold'>E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder='Enter your e-mail'
                      required
                      className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'
                    />
                  </div>

                  <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="password" className='ml-1 text-[#8a9ebf] text-lg font-semibold'>Password</label>
                    <div className="relative w-full">
                      <input
                        type={passwordVisible ? 'text' : 'password'}
                        id="password"
                        name="password"
                        placeholder="Enter your Password"
                        required
                        className="bg-[#29384d] py-2 pl-2 pr-12 rounded-xl text-[#8a9ebf] w-full"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-0 top-0 h-full bg-transparent px-4 py-2 text-[#8a9ebf] focus:outline-none"
                      >
                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>
                  <button type="submit" className='w-full p-2 m-2 bg-[#00bfa6] text-black font-semibold rounded-xl flex-center gap-2 hover:bg-[#009f8a] hover:shadow-lg active:bg-[#008f7a] active:shadow-sm active:scale-90 transition-transform duration-300'>
                    Next<GrLinkNext className='mt-1' />
                  </button>
                  <p className='text-lg'>Have an Account? <Link to="/login" className='underline text-[#8a9ebf]'>Login</Link> </p>
                </form>
              </div>
            </div>
          ) : (
            <div className='w-3/4'>
              <h1 className='text-3xl font-semibold mb-4'>Enter OTP</h1>
              <form className='flex-center flex-col gap-4' onSubmit={handleVerifyOtp}>
                <div className='flex gap-4'>
                  {Array(4).fill(0).map((_, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      inputMode="numeric"
                      maxLength="1"
                      className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf] text-center text-xl w-1/4'
                      value={otp[index] || ''}
                      onChange={(e) => handleOtpChange(e, index)}
                    />
                  ))}
                </div>
                <button type="submit" className='w-full p-2 m-2 bg-[#00bfa6] text-black font-semibold rounded-xl flex-center gap-2 hover:bg-[#009f8a] hover:shadow-lg active:bg-[#008f7a] active:shadow-sm active:scale-90 transition-transform duration-300'>
                  Verify
                </button>
                <p className='text-lg'>Didn't receive an OTP? <span className='underline text-[#8a9ebf] cursor-pointer'>Resend OTP</span></p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
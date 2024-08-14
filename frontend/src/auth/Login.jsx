import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { welcome, Logo_mobile } from '../assets/index.js'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuthStore from '../store/AuthStore.js'

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {setUser} = useAuthStore();

  const togglePasswordVisibility = () => {
    setPasswordVisible(prevVisible => !prevVisible);
  };


  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            username: values.username,
            password: values.password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {  
          const error = await response.json();
          console.error(error);
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className='h-screen w-full bg-[#121c24] text-white flex'>
      <div className='w-1/2 h-full border-8 border-[#121c24] '>
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
          <div className='w-full flex-center'>
            <h1 className='text-3xl font-semibold'>Login</h1>
          </div>
          <div className='w-3/4'>
            <form onSubmit={formik.handleSubmit} className='flex-center flex-col gap-4'>
              <div className='w-full flex flex-col gap-2'>
                <label htmlFor="username" className='ml-1 text-[#8a9ebf] text-lg font-semibold'>Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder='Enter your username'
                  required
                  onChange={formik.handleChange}
                  value={formik.values.username}
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
                    onChange={formik.handleChange}
                    value={formik.values.password}
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
                Login
              </button>
              <p className='text-lg'>Don't have an Account? <Link to="/signup" className='underline text-[#8a9ebf]'>Signup</Link> </p>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Login
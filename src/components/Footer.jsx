import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="w-full bg-[#121c24] border-t-2 text-center text-neutral-200 p-6 md:text-left">
      <div className="md:flex md:justify-evenly md:items-center">
        <div className="flex justify-center mb-6 md:mb-0">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <div className="mt-6 mb-6 text-sm text-neutral-400 flex flex-col gap-2">
          <a href="#" className='hover:text-[#8a9ebf] hover:underline'>About Us</a>
          <a href="#" className='hover:text-[#8a9ebf] hover:underline'>Services</a>
          <a href="#" className='hover:text-[#8a9ebf] hover:underline'>Contact Us</a>
        </div>
        <div className="mt-6 mb-6 text-sm text-neutral-400 flex flex-col gap-2">
          <a href="#" className='hover:text-[#8a9ebf] hover:underline'>Terms of use</a>
          <a href="#" className='hover:text-[#8a9ebf] hover:underline'>Privacy Policy</a>
          <a href="#" className='hover:text-[#8a9ebf] hover:underline'>Help center</a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
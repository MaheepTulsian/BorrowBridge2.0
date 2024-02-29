import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="w-full bg-[#121c24] border-t-2 text-center text-neutral-200 p-6 md:text-left">
      <div className="md:flex md:justify-between md:items-center">
        <div className="flex justify-center mb-6 md:mb-0">
          <span className="text-2xl font-bold">Your Brand</span>
        </div>

        <div className="md:w-2/5">
          <h6 className="text-lg font-semibold">Contact Us</h6>
          <p className="py-2 text-sm">
            New York, NY 10012, US
          </p>
          <p className="py-2 text-sm">
            <a href="mailto:info@example.com" className="text-neutral-200 hover:text-neutral-400">
              info@example.com
            </a>
          </p>
          <p className="py-2 text-sm">
            <a href="tel:+0123456788" className="text-neutral-200 hover:text-neutral-400">
              + 01 234 567 88
            </a>
          </p>
          <p className="py-2 text-sm">
            <a href="tel:+0123456789" className="text-neutral-200 hover:text-neutral-400">
              + 01 234 567 89
            </a>
          </p>
        </div>
      </div>

      <div className="mt-6 mb-6 text-sm text-neutral-400">
        Copyright &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
      </div>

      <div className="flex justify-center">
        {/* Add your desired social media icons here */}
      </div>
    </footer>
    </>
  )
}

export default Footer
    
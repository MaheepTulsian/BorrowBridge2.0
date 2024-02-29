import React from 'react'

const List = () => {
  return (
    <div className="mt-10 pl-40 pb-10 h-full w-3/4 flex flex-col gap-3">
        <h1 className='text-white text-3xl font-bold'>Business Profile</h1>
        <h3 className='text-[#8a9ebf] text-lg font-semibold'>Complete your profile to increase your trustworthiness and attract more investors.</h3>
        <div className='w-3/6 flex flex-col gap-2'>
          <p className='ml-1 text-[#8a9ebf]  text-lg'>First name</p>
          <input type="text"  placeholder='Enter your first name' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]' />
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <p className='ml-1 text-[#8a9ebf]  text-lg'>Last name</p>
          <input type="text"  placeholder='Enter your last name' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <p className='ml-1 text-[#8a9ebf]  text-lg'>E-mail</p>
          <input type="text"  placeholder='Enter your E-mail address' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <p className='ml-1 text-[#8a9ebf]  text-lg'>Phone number</p>
          <input type="text"  placeholder='Enter your phone number' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <p className='ml-1 text-[#8a9ebf]  text-lg'>Company name</p>
          <input type="text"  placeholder='Enter your company name' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <p className='ml-1 text-[#8a9ebf]  text-lg'>Company website</p>
          <input type="text"  placeholder='Enter your company website URL' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <p className='ml-1 text-[#8a9ebf]  text-lg'>Company description</p>
          <textarea rows={5} placeholder='Enter a brief description of your company' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <input type="file" accept="image/*" placeholder='Upload Image' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <p className='ml-1 text-[#8a9ebf]  text-lg'>About</p>
          <textarea rows={5} placeholder='Tell us about your business story and mission' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <p className='ml-1 text-[#8a9ebf]  text-lg'>Market Analysis</p>
          <textarea rows={5} placeholder='Detail the industry insights' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <p className='ml-1 text-[#8a9ebf]  text-lg'>Token Supply</p>
          <input type="number"  placeholder='Enter the token supply' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <p className='ml-1 text-[#8a9ebf]  text-lg'>Offering Price</p>
          <input type="text"  placeholder='Enter the offering price' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 h-10 rounded-lg flex items-center justify-center bg-[#f5c754]'>
          <button className='text-black text-lg font-bold'>Submit</button>
        </div>
    </div>
  )
}

export default List

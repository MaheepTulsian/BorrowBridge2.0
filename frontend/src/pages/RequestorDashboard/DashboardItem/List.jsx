import React, { useState } from 'react';

const List = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    companyWebsite: '',
    companyDescription: '',
    image: '',
    about: '',
    marketAnalysis: '',
    tokenSupply: '',
    offeringPrice: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 pl-40 pb-10 h-full w-3/4 flex flex-col gap-3">
      <h1 className='text-white text-3xl font-bold'>Business Profile</h1>
      <h3 className='text-[#8a9ebf] text-lg font-semibold'>Complete your profile to increase your trustworthiness and attract more investors.</h3>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="firstName" className='ml-1 text-[#8a9ebf] text-lg'>First name</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder='Enter your first name' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]' />
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="lastName" className='ml-1 text-[#8a9ebf] text-lg'>Last name</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Enter your last name' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="email" className='ml-1 text-[#8a9ebf] text-lg'>E-mail</label>
          <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='Enter your E-mail address' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="phoneNumber" className='ml-1 text-[#8a9ebf] text-lg'>Phone number</label>
          <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder='Enter your phone number' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="companyName" className='ml-1 text-[#8a9ebf] text-lg'>Company name</label>
          <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} placeholder='Enter your company name' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="companyWebsite" className='ml-1 text-[#8a9ebf] text-lg'>Company website</label>
          <input type="text" id="companyWebsite" name="companyWebsite" value={formData.companyWebsite} onChange={handleChange} placeholder='Enter your company website URL' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="companyDescription" className='ml-1 text-[#8a9ebf] text-lg'>Company description</label>
          <textarea id="companyDescription" name="companyDescription" rows={5} value={formData.companyDescription} onChange={handleChange} placeholder='Enter a brief description of your company' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="image" className='ml-1 text-[#8a9ebf] text-lg'>Upload Image</label>
          <input type="file" id="image" accept="image/*" name="image" onChange={handleChange} className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="about" className='ml-1 text-[#8a9ebf] text-lg'>About</label>
          <textarea id="about" name="about" rows={5} value={formData.about} onChange={handleChange} placeholder='Tell us about your business story and mission' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="marketAnalysis" className='ml-1 text-[#8a9ebf] text-lg'>Market Analysis</label>
          <textarea id="marketAnalysis" name="marketAnalysis" rows={5} value={formData.marketAnalysis} onChange={handleChange} placeholder='Detail the industry insights' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="tokenSupply" className='ml-1 text-[#8a9ebf] text-lg'>Token Supply</label>
          <input type="number" id="tokenSupply" name="tokenSupply" value={formData.tokenSupply} onChange={handleChange} placeholder='Enter the token supply' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="offeringPrice" className='ml-1 text-[#8a9ebf] text-lg'>Offering Price</label>
          <input type="text"  placeholder='Enter the offering price' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 h-10 rounded-lg flex items-center justify-center bg-[#f5c754]'>
          <button className='text-black text-lg font-bold'>Submit</button>
        </div>
    </form>
  )
}

export default List;
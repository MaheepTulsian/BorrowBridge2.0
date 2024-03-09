import React from 'react';
import { useFormik } from 'formik';

const List = () => {

  
  const formik = useFormik({
    initialValues: {
      firstName:'',
      lastName:'',
      email:'',
      phoneNumber:'',
      companyName: '',
      companyWebsite: '',
      companyDescription: '',
      image: '',
      marketAnalysis: '',
      tokenSupply: '',
      offeringPrice: ''
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch('http://localhost:3000/requestor/add/formdata', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            companyName: values.companyName,
            phoneNo: values.phoneNumber,
            website: values.companyWebsite,
            imageUrl: values.image,
            about: values.companyDescription,
            marketAnalysis: values.marketAnalysis,
            tokenSupply: values.tokenSupply,
            tokenValue: values.offeringPrice,
          }),
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        console.log('Form submitted successfully');
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form. Please try again.');
      }
    },    
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mt-10 pl-40 pb-10 h-full w-3/4 flex flex-col gap-3">
      <h1 className='text-white text-3xl font-bold'>Business Profile</h1>
      <h3 className='text-[#8a9ebf] text-lg font-semibold'>Complete your profile to increase your trustworthiness and attract more investors.</h3>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="firstName" className='ml-1 text-[#8a9ebf] text-lg'>First name</label>
          <input type="text" id="firstName" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} placeholder='Enter your first name' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]' />
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="lastName" className='ml-1 text-[#8a9ebf] text-lg'>Last name</label>
          <input type="text" id="lastName" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} placeholder='Enter your last name' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="email" className='ml-1 text-[#8a9ebf] text-lg'>E-mail</label>
          <input type="text" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} placeholder='Enter your E-mail address' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="phoneNumber" className='ml-1 text-[#8a9ebf] text-lg'>Phone number</label>
          <input type="text" id="phoneNumber" name="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange} placeholder='Enter your phone number' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="companyName" className='ml-1 text-[#8a9ebf] text-lg'>Company name</label>
          <input type="text" id="companyName" name="companyName" value={formik.values.companyName} onChange={formik.handleChange} placeholder='Enter your company name' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="companyWebsite" className='ml-1 text-[#8a9ebf] text-lg'>Company website</label>
          <input type="text" id="companyWebsite" name="companyWebsite" value={formik.values.companyWebsite} onChange={formik.handleChange} placeholder='Enter your company website URL' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="companyDescription" className='ml-1 text-[#8a9ebf] text-lg'>Company description</label>
          <textarea id="companyDescription" name="companyDescription" value={formik.values.companyDescription} onChange={formik.handleChange} rows={5} placeholder='Enter a brief description of your company' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="image" className='ml-1 text-[#8a9ebf] text-lg'>Upload Image</label>
          <input type="file" id="image" accept="image/*" name="image" value={formik.values.image} onChange={formik.handleChange} className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        {/* <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="about" className='ml-1 text-[#8a9ebf] text-lg'>About</label>
          <textarea id="about" name="about" rows={5} placeholder='Tell us about your business story and mission' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div> */}
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="marketAnalysis" className='ml-1 text-[#8a9ebf] text-lg'>Market Analysis</label>
          <textarea id="marketAnalysis" name="marketAnalysis" value={formik.values.marketAnalysis} onChange={formik.handleChange} rows={5} placeholder='Detail the industry insights' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="tokenSupply" className='ml-1 text-[#8a9ebf] text-lg'>Token Supply</label>
          <input type="number" id="tokenSupply" name="tokenSupply" value={formik.values.tokenSupply} onChange={formik.handleChange} placeholder='Enter the token supply' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <div className='w-3/6 flex flex-col gap-2'>
          <label htmlFor="offeringPrice" className='ml-1 text-[#8a9ebf] text-lg'>Offering Price</label>
          <input type="text" id="offeringPrice" name="offeringPrice" value={formik.values.offeringPrice} onChange={formik.handleChange} placeholder='Enter the offering price' className='bg-[#29384d] py-2 pl-2 rounded-xl text-[#8a9ebf]'/>
        </div>
        <button type="submit" className='w-3/6 h-10 rounded-lg flex items-center justify-center bg-[#f5c754]'>
          <p className='text-black text-lg font-bold'>Submit</p>
        </button>
    </form>
  )
}

export default List;

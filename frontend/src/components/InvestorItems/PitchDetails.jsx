import React from 'react'
import image from '../../assets/game.png'

const PitchDetails = () => {
  return (
    <div className='h-full w-3/4 mx-20'>
      
      <div className='w-full h-auto my-10 flex items-center justify-center'>
        <img src={image} alt="" className='w-3/4 h-auto rounded-xl border-2 border-gray-300' />
      </div>

      <div className='my-10'>
        <h1 className='text-3xl text-white font-bold mb-2'>About</h1>
        <p className='text-lg text-[#F7FAFA]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit. Dolor optio deserunt quod illo modi eveniet odit officia facere, nihil mollitia nesciunt odio non neque ratione. Molestias, natus. Nesciunt?
        Dignissimos itaque quo, ratione incidunt et, quisquam nihil aperiam laborum perferendis optio, ducimus veniam suscipit laboriosam sit earum deleniti quod autem. Nemo blanditiis fugit sint. Fugit nulla mollitia ab quas!
        Magnam ipsa modi quisquam minus, sit consectetur id exercitationem neque aperiam labore inventore voluptatibus esse quae ea autem non provident cum eligendi accusamus optio saepe nemo iure necessitatibus maxime. Earum!</p>
      </div>

      <div className='my-10'>
        <h1 className='text-3xl text-white font-bold mb-2'>Market Analysis</h1>
        <p className='text-lg text-[#F7FAFA]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perspiciatis dicta nostrum vero alias cumque ipsum voluptates quisquam mollitia corrupti tempora labore saepe quo eligendi a, natus magnam blanditiis sapiente?
        Earum laudantium dolore sit aperiam necessitatibus commodi dicta, vero ratione qui rerum iste optio numquam enim, minus praesentium suscipit! Quis ab natus provident id quam vitae error dignissimos unde officiis.
        Laudantium numquam, itaque ducimus laborum quas pariatur ipsum quibusdam commodi deserunt neque, reprehenderit rerum? Consequatur sequi quasi a alias expedita ipsa ea, explicabo aspernatur consequuntur quibusdam dolores eveniet corrupti nostrum.</p>
      </div>

      <div className='my-10'>
        <h1 className='text-3xl text-white font-bold mb-2'>Token Details</h1>
        <hr />
        <div className='flex items-center justify-between m-2'>
          <div>
            <h3 className='text-lg text-[#8A9EBF] font-bold mb-2'>Token Supply</h3>
            <p className='text-sm text-[#F7FAFA]'>1000000</p>
          </div>
          <div>
            <h3 className='text-lg text-[#8A9EBF] font-bold mb-1'>Offering Price</h3>
            <p className='text-sm text-[#F7FAFA]'>300 per Token</p>
          </div>
        </div>
        <hr />
        <div className='flex items-center justify-between m-2'>
          <div>
            <h3 className='text-lg text-[#8A9EBF] font-bold mb-2'>Token Type</h3>
            <p className='text-sm text-[#F7FAFA]'>ERC-20</p>
          </div>
          <div>
            <h3 className='text-lg text-[#8A9EBF] font-bold mb-2'>Issue Date</h3>
            <p className='text-sm text-[#F7FAFA]'> February 25, 2023</p>
          </div>
        </div>
        <hr />
      </div>

      <div>
        <h1 className='text-3xl text-white font-bold mb-6'>Quarterly Roadmap</h1>
    
        <ol class="relative border-s border-gray-200 dark:border-gray-700 mx-3">                  
            <li class="mb-10 ms-6">            
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <p className='text-xs font-bold text-white'>Q4</p>
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">v4.0.0 </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Details</p>
            </li>
            <li class="mb-10 ms-6">            
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <p className='text-xs font-bold text-white'>Q3</p>
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">v3.0.0 </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Details</p>
            </li>
            <li class="mb-10 ms-6">            
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <p className='text-xs font-bold text-white'>Q2</p>
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">v2.0.0 </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Details</p>
            </li>
            <li class="mb-10 ms-6">            
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <p className='text-xs font-bold text-white'>Q1</p>
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">v1.0.0 </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Details</p>
            </li>
        </ol>


      </div>
    </div>
  )
}

export default PitchDetails

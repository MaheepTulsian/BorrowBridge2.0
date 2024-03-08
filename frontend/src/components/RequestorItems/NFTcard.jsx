import React from 'react'

const NFTcard = () => {
  return (
    <div className='flex items-center justify-between w-3/4'>
        <div className="flex flex-shrink-0 items-center">
            <img
                className="h-14 w-14 rounded-lg"
                src="https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                alt=""
            />
            <div className='text-white ml-3'>
                <h3 className='text-lg font-bold'>Name of the NFT</h3>
                <p className='text-sm font-semibold text-[#8a9ebf]'>Quantity: 1000</p>
            </div>
        </div>
        <div>
            <button className='bg-[#29384d] text-white py-2 w-32 rounded-xl'>Select</button>
        </div>   
    </div>
  )
}

export default NFTcard

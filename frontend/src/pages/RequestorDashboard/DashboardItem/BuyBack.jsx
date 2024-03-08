import React from 'react'
import NFTcard from '../../../components/RequestorItems/NFTcard'
import InvestorCard from '../../../components/RequestorItems/InvestorCard'

const BuyBack = () => {
  return (
    <div className='h-screen w-3/4 flex flex-col items-center justify-center'> 
      <div className='w-full mb-8 flex flex-col items-center justify-center'>
        <div className='w-3/4 mb-5 flex flex-col gap-2'>
          <h1 className='text-white text-3xl font-bold'>Repurchase NFTs</h1>
          <p className='text-[#8a9ebf]'>You can repurchase NFTs from investors.</p>
        </div>
        <h3 className='text-white font-semibold w-3/4 mb-5 text-xl' >NFTs</h3>
        <div className='flex flex-col items-center justify-center w-full gap-2'>
          <NFTcard />
        </div>
      </div>

      <div className='w-full mt-8 flex flex-col items-center justify-center'>
        <h3 className='text-white font-semibold w-3/4 mb-5 text-xl' >Investors</h3>
        <div className='flex flex-col items-center justify-center w-full gap-2'>
          <InvestorCard />
          <InvestorCard />
          <InvestorCard />
          <InvestorCard />
          <InvestorCard />
        </div>
      </div>
    </div>
  )
}

export default BuyBack

import React from 'react'
import SearchBar from '../../../components/SearchBar'
import PitchCard from '../../../components/InvestorItems/PitchCard';

const Marketplace = () => {
  return (
    <div className='h-lvh w-3/4 mt-10 flex flex-col items-center' >
      <SearchBar />
      <div className="w-11/12 mt-10 grid grid-cols-3 place-items-center gap-10">
        <PitchCard />
        <PitchCard />
        <PitchCard />
        <PitchCard />
        <PitchCard />
        <PitchCard />
        <PitchCard />
      </div>
    </div>
  )
}

export default Marketplace

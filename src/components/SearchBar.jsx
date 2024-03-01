import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
const SearchBar = () => {

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="w-11/12 h-10 flex items-center bg-[#29384D] rounded-lg">

      <button className="w-10 h-full text-[#8A9EBF] mx-2 flex items-center justify-center">
        <MagnifyingGlassIcon className='w-3/4 h-3/4'/>
      </button>
      <input type="text" placeholder="Type your text here" onChange={handleSearch} className="w-full h-full focus:outline-none text-[#8A9EBF] bg-[#29384D] text-xl rounded-lg"/>

    </div>
  );
};

export default SearchBar;
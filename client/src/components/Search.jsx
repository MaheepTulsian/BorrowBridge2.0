import React from 'react'
import { Link } from 'react-router-dom'
// import {CgSearch} from 'react-icons/cg'

const Search = ({placeholder}) => {
  return (
    <div className='rounded-md w-full text-gray-text flex items-center pl-2'>
      <Link to="/" className="flex items-center gap-2 text-white text-4xl">
        <h1 className="mt-3 bounce-animation">BorrowBridge</h1>
      </Link>
    </div>
  )
}

export default Search
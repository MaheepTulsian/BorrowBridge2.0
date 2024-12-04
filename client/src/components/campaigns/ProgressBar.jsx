import React from 'react'
import { inPercent } from '../../utils'

const ProgressBar = ({goal, raisedAmount}) => {
  const percentage = inPercent(goal, raisedAmount)
  return (
    <div className='w-full rounded-lg h-2 bg-gray-border overflow-hidden'>
        <div style={{width: percentage + '%'}} className='bg-accent h-full min-w-[2px]' />
        {/* Display percentage in no. */}
        <div className='w-full h-full text-lg text-white ml-2'>
          <p>{percentage}%</p>
        </div>
    </div>
  )
}

export default ProgressBar
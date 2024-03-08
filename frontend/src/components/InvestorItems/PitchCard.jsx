import React from 'react'
import img1 from '../../assets/game.png'

const PitchCard = () => {
  return (
    <div className="w-72 h-54 shadow-lg rounded-lg overflow-hidden">
        <img src={img1} alt="" className="w-full h-32 object-cover" />
        <div className="p-2">
            <h3 className="text-white font-semibold text-lg">Game Zone</h3>
        </div>
    </div>
  )
}

export default PitchCard
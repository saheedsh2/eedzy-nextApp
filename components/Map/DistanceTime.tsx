import { DirectionDataContext } from '@/context/DirectionDataContext';
import React, { useContext } from 'react'

function DistanceTime() {
  const {directionData, setDirectionData} 
  = useContext(DirectionDataContext);

  return directionData?.routes&&(
    <div className='bg-purple-950 p-3'>
        {/* <h2 className='text-gray-500 text-[13px]'>
        Distance:<span className='font-medium text-black'>
            {(directionData.routes[0].distance*0.000621371192)
            .toFixed(2)} Miles</span>
        Duration:<span className='font-medium text-black'>
        {directionData.routes[0].duration/60} Min </span>
        </h2> */}

<h2 className='text-white opacity-80 text-[15px] font-bold'>
  Distance:<span> </span>
  <span className='font-bold mr-3 text-white'>
    {(directionData?.routes?.[0]?.distance * 0.000621371192).toFixed(2)} Miles
  </span>

  Duration:<span> </span>
  <span className='font-bold text-white'>
    {(() => {
      const durationSeconds = directionData?.routes?.[0]?.duration ?? 0;
      const hours = Math.floor(durationSeconds / 3600);
      const minutes = Math.floor((durationSeconds % 3600) / 60);

      if (hours === 0) return `${minutes} min`;
      return `${hours} hr ${minutes} min`;
    })()}
  </span>
</h2>

        
    </div>
  )
}

export default DistanceTime
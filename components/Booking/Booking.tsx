"use client"
import React, { useEffect, useState } from 'react'
import AutoCompleteAddress from './AutoCompleteAddress/AutoCompleteAddress'
import Cars from './Cars';
import Cards from './Cards';

function Booking() {
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    setScreenHeight(window.innerHeight * 0.72);
  }, []);

  return (
    <div className='p-5'>
      <h2 className='text-[20px] font-semibold'>Booking</h2>

      <div
        className='border-[1px] p-5 rounded-md'
        style={{ height: screenHeight }}
      >
        <AutoCompleteAddress />
        <Cars />
        <Cards />

        <button className='w-full bg-purple-600 p-1 rounded-md mt-4 text-white'>Book</button>
        
      </div>
    </div>
  );
}

export default Booking;

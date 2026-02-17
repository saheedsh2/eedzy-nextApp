"use client"
import React, { useContext, useEffect, useState } from 'react'
import AutoCompleteAddress from './AutoCompleteAddress/AutoCompleteAddress'
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import Cars from './Cars';
import Cards from './Cards';

import { useRouter } from "next/navigation";


function Booking() {
  const [screenHeight, setScreenHeight] = useState(0);
  const {carAmount,setCarAmount} = useContext(SelectedCarAmountContext)
  const router:any=useRouter()

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

        <button 
        className={`w-full bg-purple-600 p-1 
        rounded-md 
        mt-4 text-white ${!carAmount?'bg-gray-200':null}`}
        onClick={(() => router.push('/payment'))}
        // disabled={!carAmount}
        >Book</button>
        
      </div>
    </div>
  );
}

export default Booking;

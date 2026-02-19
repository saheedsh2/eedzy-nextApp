"use client"
import React, { useContext, useEffect, useState } from 'react'
import AutoCompleteAddress from './AutoCompleteAddress/AutoCompleteAddress'
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import Cars from './Cars';
import Cards from './Cards';
import { useRouter } from "next/navigation";

function Booking() {

  const [screenHeight, setScreenHeight] = useState(0);

  const { carAmount } = useContext(SelectedCarAmountContext);

  const router = useRouter();

  useEffect(() => {
    setScreenHeight(window.innerHeight * 0.72);
  }, []);

  const isDisabled = !carAmount || Number(carAmount) <= 0;

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
          disabled={isDisabled}
          onClick={() => router.push('/payment')}
          className={`
            w-full p-1 rounded-md mt-4 text-white transition-all
            ${
              isDisabled
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700 cursor-pointer'
            }
          `}
        >
          Book
        </button>

      </div>
    </div>
  );
}

export default Booking;

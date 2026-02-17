import { DirectionDataContext } from '@/context/DirectionDataContext';
import CarList from '@/data/CarList'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

function Cars() {
  const [selectedCar, setSelectedCar] = useState<number | null>(null);
const {directionData, setDirectionData} 
    = useContext(DirectionDataContext);

const getCost = (charges: number) => {
  const distance = directionData?.routes?.[0]?.distance ?? 0;

  return (charges * distance * 0.000621371192).toFixed(2);
};


  return (
    <div className='mt-3'>
      <h2 className='font-semibold'>Select Car/Van</h2>

      <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
        {CarList.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedCar(index)}
            className={`
              m-1 p-2 border-2 rounded-md cursor-pointer
              transition-all duration-200
              ${selectedCar === index
                ? 'border-purple-500 bg-purple-50 scale-105'
                : 'border-gray-200 hover:border-purple-400 hover:bg-purple-50'}
            `}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={75}
              height={90}
              className='w-full'
            />

            <h2 className='text-[12px] text-gray-500'>
              {item.name}
              <span className='float-right text-black font-medium'>
                £{getCost(item.charges)}
              </span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;

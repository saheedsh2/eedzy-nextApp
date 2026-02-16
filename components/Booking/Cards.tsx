import CardsList from '@/data/CardsList'
import Image from 'next/image'
import React, { useState } from 'react'

function Cards() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div>
      <h2 className='text-[14px] font-medium'>Payment Methods</h2>

      <div className='grid grid-cols-5 md:grid-cols-4 lg:grid-cols-5 mt-2 pl-2 gap-2'>
        {CardsList.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`
              w-[50px] h-[40px] flex items-center justify-center
              border-2 rounded-md cursor-pointer
              hover:scale-110 transition-all duration-150

              ${
                activeIndex === index
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-500 hover:scale-105'
              }
            `}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={30}
              height={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;

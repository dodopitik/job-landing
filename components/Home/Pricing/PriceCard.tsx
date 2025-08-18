import React from 'react'
import { BiCheck } from 'react-icons/bi';
import { DiVim } from 'react-icons/di';

    type Props={
        type:string;
        price:string;
    }

const PriceCard = ({price, type} : Props) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-10 rounded-lg relative">
      {/* type check */}
        {type=== "Standard" && (<div className=" absolute top-7 right-7 bg-green-400 rounded-full px-6 py-1.5 text-white text-xs">
              Recomended
        </div>)
        }
        {/* type */}
        <h1 className='mt-6 text-xl font-bold text-blue-900 dark:text-blue-200'>{type}</h1>
        {/* price */}
        <div className="flex gap-1 mt-2 ">
        <h1 className=' text-4xl font-bold text-blue-950 dark:text-gray-100'>${price}</h1>
        <p className='mt-3'>/Monthly</p>
        </div>

        {/* featured list */}
        <div className="mt-12">
        <div className="flex items-center mb-6 spaxe-x-1">
          <BiCheck className='w-7 h-7' />
          <span> 1 Job Posting</span>
        </div>
        <div className="flex items-center mb-6 spaxe-x-1">
          <BiCheck className='w-7 h-7' />
          <span> 0 Featured Job</span>
        </div>
        <div className="flex items-center mb-6 spaxe-x-1">
          <BiCheck className='w-7 h-7' />
          <span> Job displayed for 20 days</span>
        </div>
        <div className="flex items-center mb-6 spaxe-x-1">
          <BiCheck className='w-7 h-7' />
          <span> Job displayed for 20 days</span>
        </div>

        </div>
        <button className="bg-blue-600  w-full py-4 rounded-full hover:bg-blue-500 text-gray-300 hover:text-white flex items-center justify-center text-lg transition-all duration-200"> View Profile</button>
    </div>
  )
}

export default PriceCard

import Image from 'next/image';
import React from 'react'
import { GrLocation } from 'react-icons/gr';

 type Props = { 
            data: {
            id:number;
            image:string;
            name:string;
            location:string;
            position : string;
        }
        }

 
const CompanyCarousel = ({data}: Props) => {
  return (
         <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg m-3 ">
        <Image src={data.image} alt={data.name} width={80} height={80} className='object-cover mx-auto'/>
        <h1 className=' text-center mt-4 text-lg font-medium text-gray-800 dark:text-gray-200 '>{data.name}</h1>
        <div className='flex items-center justify-center '>
           <GrLocation className='w-4 h-4'/>
        <p className=' text-sm font-light text-gray-800 dark:text-gray-200 px-1 pt-1'>{data.location}</p>
         </div>
         <div className="flex items-center justify-center p-3 bg-blue-900 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-200 cursor-pointer rounded-lg mt-2">
          <p className='text-sm font-light text-blue-50 dark:text-gray-100'>{data.position} Open Position</p>
         </div>
         </div>
  )
}

export default CompanyCarousel

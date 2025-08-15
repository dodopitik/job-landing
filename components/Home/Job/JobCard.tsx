"use client"
import Image from 'next/image'
import React from 'react'
import { BiBriefcase } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'
import { GrLocation } from 'react-icons/gr'


         type Props = { 

           listjob: {
                id: number;
                image: string;
                title: string;
                location: string;
                jobType: string;
                urgency: string;
            }
            }

const JobCard = ({listjob} : Props ) => {
  return (
    <div className='border-[1.5px] border-gray-300 dark:border-gray-700 p-6 rounded-lg relative'>
       <div className=" w-7 h-7 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 flex items-center transition-all duration-200 justify-center rounded-full flex-col absolute top-4 right-4">
        <BsBookmark className='w-4 h-4 block lg:hidden md:hidden sm:block xl:block '/> 
       </div>
       <div className=" flex items-center space-x-4">
        <Image src={listjob.image} alt={listjob.title} width={50} height={50}/>
        <div >
        <h1 className='text-base font-medium'>{listjob.title}</h1>
       <div className="flex items-center space-x-6">
        <BiBriefcase className='w-5 h-5 '/>
        <p className='dark:text-gray-50 text-sm text-gray-800'> Segment </p>
       </div>
       <div className="flex items-center space-x-6">
        <GrLocation className='w-5 h-5'/>
        <p className='dark:text-gray-50 text-sm text-gray-800'> {listjob.location} </p>
       </div>
        </div>
       </div>
       <div className="flex item-center space-x-4 mt-3">
        <div className="px-4 py-1 bg-blue-600/30 dark:bg-blue-950/30 rounded full text-xs text-blue-700 dark:text-blue-300">
        {listjob.jobType}
        </div>
        <div className={ ` px-4 py-1 rounded-full text-xs ${listjob.urgency === 'Urgent'? "bg-red-600/30 dark:bg-red-300/30 text-red-700 dark:text-red-300":"bg-green-600/30 dark:bg-green-300/30 text-green-700 dark:text-green-300" } `} > {listjob.urgency}</div>
       </div>
    </div>
  )
}

export default JobCard

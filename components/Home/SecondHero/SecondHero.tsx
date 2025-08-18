import Image from 'next/image'
import React from 'react'
import { BsCheck } from 'react-icons/bs'

const SecondHero = () => {
  return (
   <div className="relative w-full h-screen flex justify-center flex-col -mt-15">
    <div className="w-[90%] lg:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10 ">
        {/* img content */}
        <div className=" mx-auto " data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="150">
          <Image src="/images/a.png" alt="hero" width={1200} height={900}/>
        </div>
            {/* text-content */}
        <div className=""data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="150">
            {/* heading */}
        <h1 className="text-3xl sm:text-5xl font-semibold"> Get applications from the world best talents. </h1>
        {/* subheading */}
        <p className=" mt-4 text-sm sm:text-lg font-base text-gray-800 dark:text-gray-300">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. </p>
        {/* jobsearchbar */}
       
        {/* popular search */}
        <div className="font-semibold text-gray-700 dark:text-gray-300 mt-6 flex items-center space-x-6">
          <div className=" flex flex-col gap-2 ">
           
            <p> <BsCheck className="w-7 h-10 text-pink-600 inline mr-2" />Bring to the table win-win survival
            </p>
               <p> <BsCheck className="w-7 h-10 text-pink-600 inline  mr-2" />Capitalize on low hanging fruit to identify
            </p>    <p> <BsCheck className="w-7 h-10 text-pink-600 inline  mr-2" />But I must explain to you how all this
            </p>
          </div>
         
              
        </div>
         <button className='bg-blue-800 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition-all duration-200 rounded-lg px-10 py-3 mt-7 cursor-pointer text-gray-200'>Post Job</button>
       </div>
      
    </div>
    </div>
  )
}

export default SecondHero

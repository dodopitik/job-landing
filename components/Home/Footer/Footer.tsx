import React from 'react'
import { LuNetwork } from 'react-icons/lu'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-200 dark:bg-gray-900'>
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 items-start">
      {/* 1st part */}
        <div className="xl:col-span-2">
            {/* logo */}
               <div className="flex items-center space-x-2">
                                <div className="w-10 h-10 bg-cyan-800 dark:bg-white  rounded-full flex items-center justify-center flex-col">
                                <LuNetwork className="w-5 h-5 text-white dark:text-black"/>
                                </div>
                    <h1 className="text-xl  sm:block md:text-2xl dark:text-cyan-200 text-cyan-800 font-bold">DevHire</h1>
                </div>
                <p className='mt-4 text-sm text-gray-600 dark:text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus animi, omnis ad beatae necessitatibus quaerat! Atque fugiat </p>
                {/* call */}
              <div className="mt-5">
                <h1 className='lg:text-xl text-base text-gray-700 dark:text-gray-300 font-medium'>Call us</h1>
                <p className='mt-1 text-gray-600 dark:text-gray-300 lg:text-lg text-base font-bold'>+62895363076706</p>
              </div>
              <p className='text-sm text-gray-700 dark:text-gray-300 font-light mt-4'> Bagus Rizky Aditama</p>
               <p className='text-sm text-gray-700 dark:text-gray-300 font-light mt-2'> Yogyakarta , Indonesia </p>
               <p className='text-sm text-gray-700 dark:text-gray-300 font-light mt-2'> brizkyaditama@gmail.com </p>  
        </div>
        {/* 2nd part */}
        <div className="space-y-6">
          <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            For Candidates
          </h1>
          <a href="" className='text-sm text-gray-700 dark:text-gray-300 font-light mt-1 block hover:text-blue-300'>Browse Jobs</a>
          <a href="" className='text-sm text-gray-700 dark:text-gray-300 font-light mt-1 block hover:text-blue-300'>Browse Categories</a>
          <a href="" className='text-sm text-gray-700 dark:text-gray-300 font-light mt-1 block hover:text-blue-300'>Candidate Dashboard</a>
          <a href="" className='text-sm text-gray-700 dark:text-gray-300 font-light mt-1 block hover:text-blue-300'>Job Alerts</a>
          <a href="" className='text-sm text-gray-700 dark:text-gray-300 font-light mt-1 block hover:text-blue-300'>My Bookmarks</a>
        </div>
         <div className="space-y-6">
          <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            For Employers
          </h1>
          <a href="" className='text-sm text-gray-700 dark:text-gray-300 font-light mt-1 block hover:text-blue-300'>Browse Candidates</a>
          <a href="" className='text-sm text-gray-700 dark:text-gray-300 font-light mt-1 block hover:text-blue-300'>Employer Dashboard</a>
          <a href="" className='text-sm text-gray-700 dark:text-gray-300 font-light mt-1 block hover:text-blue-300'>Candidate Dashboard</a>
          <a href="" className='text-sm text-gray-700 dark:text-gray-300 font-light mt-1 block hover:text-blue-300'>Job Packages</a>
        </div>
         <div className="space-y-6">
          <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            About Us
          </h1>
          <a href="" className='text-sm text-gray-700 dark:text-gray-300 font-light mt-1 block hover:text-blue-300'>Browse Candidates</a>
          <a href="" className='text-sm text-gray-700 dark:text-gray-300 font-light mt-1 block hover:text-blue-300'>Employer Dashboard</a>
          <a href="" className='text-sm text-gray-700 dark:text-gray-300 font-light mt-1 block hover:text-blue-300'>Candidate Dashboard</a>
          <a href="" className='text-sm text-gray-700 dark:text-gray-300 font-light mt-1 block hover:text-blue-300'>Job Packages</a>
        </div>
         <div className="space-y-6">
          <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">
           Helpful Resourses
          </h1>
          <a href="" className='text-sm text-gray-700 dark:text-gray-300 font-light mt-1 block hover:text-blue-300'>Browse Candidates</a>
       
          <a href="" className='text-sm text-gray-700 dark:text-gray-300 font-light mt-1 block hover:text-blue-300'>Candidate Dashboard</a>
          <a href="" className='text-sm text-gray-700 dark:text-gray-300 font-light mt-1 block hover:text-blue-300'>Job Packages</a>
        </div>
    </div>
    <div className="pt-6 mt-10 border-t w-[90%] mx-auto border-gray-300 dark:border-gray-800">
      <p className='text-gray-500'> © 2025 webdevwarriors. All Right Reserved.</p>
    </div>
    </div>
  )
}

export default Footer

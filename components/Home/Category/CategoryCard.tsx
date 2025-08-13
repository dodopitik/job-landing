"use client"
import React from 'react'
import Tilt from 'react-parallax-tilt'



     type Props = { 
            category: {
            id: number;
            categoryName: string;
            openPosition: number;
            icon: React.JSX.Element;
        }
        }

const CategoryCard = ({category}: Props) => {

  return (
    <Tilt scale={1.2} transitionSpeed={400}> 
    <div className="p-6 bg-gray-50 dark:bg-gray-900 shadow-md">
        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto flex items-center justify-center flex-col">
            {category.icon}
        </div>
        <h1 className='mx-auto flex items-center justify-center pt-5 text-base dar:text-white '>{category.categoryName}</h1>
        <span className='mx-auto flex items-center justify-center text-sm font-light dark:text-white'> ( {category.openPosition} Open position )</span>
    </div>
    </Tilt>
  )
}

export default CategoryCard

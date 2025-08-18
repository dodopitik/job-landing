import Image from 'next/image';
import React from 'react'

    type Props={
        image:string;
        title:string;
        username:string;
        userRole:string;
    }

const TestimonyCard = ({image, title , username , userRole} : Props ) => {
  return (
    <div className='items-center text-center'>
        <div className="w-[60%] mx-auto">
      <Image src={image} alt={title} width={80} height={80} className='rounded-full mx-auto'/>
      <h1 className='py-3 font-semibold text-lg text-white'>{title}</h1>
      <p className='text-base text-gray-400 pb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente vero laudantium dignissimos optio. Eius consectetur dolores soluta, ea assumenda quasi veniam ut id ad dolorem praesentium architecto? Autem, voluptatibus enim.</p>
      <h1 className='font-semibold text-lg text-white'>{username}</h1>
      <p className='text-sm text-gray-400'>{userRole} </p>
      </div>
    </div>
  )
}

export default TestimonyCard

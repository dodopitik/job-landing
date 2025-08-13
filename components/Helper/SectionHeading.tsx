import React from 'react'


    type Props = {
        heading : string
        subheading : string
    }


const SectionHeading = ({heading, subheading} : Props) => {
  return (
    <div>
      <h1 className='text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center'>{heading}</h1>
      <p className='text-sm font-light text-gray-400 text-center'>{subheading}</p>
    </div>
  )
}

export default SectionHeading

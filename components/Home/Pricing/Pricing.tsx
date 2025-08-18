import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import PriceCard from './PriceCard'

const Pricing = () => {
  return (
    <div className='pt-13 pb-13 '>
       <SectionHeading heading='Pricing Packages' subheading='Lorem ipsum dolor sit amet elit, sed do eiusmod tempor.'/>

        <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className=""data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="0">
            <PriceCard type="Basic" price="199"/> 
            </div>
            <div className="" data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
            <PriceCard type="Standard" price="399"/> 
            </div>
            <div className=""data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="400">
            <PriceCard type="Extended" price="499"/> 
            </div>

        </div>


    </div>
  )
}

export default Pricing

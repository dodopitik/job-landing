"use client"
import SectionHeading from '@/components/Helper/SectionHeading'
import Image from 'next/image';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonyCard from './TestimonyCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Testimony = () => {
  return (
    <div>
     <SectionHeading heading='Testimonials From Customers' subheading='Lorem ipsum dolor sit amet elit, sed do eiusmod tempo' />
        <div className="w-[80%] mx-auto mt-16">
            <Carousel 
              showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
            >
                  <TestimonyCard image="/images/u1.png" title="Great Quality" username="Bagus Rizky" userRole="App Development"/>
                    <TestimonyCard image="/images/u2.png" title="Awesome Work!" username="Ratri Yuliana" userRole="Web Development"/>
                      <TestimonyCard image="/images/u3.png" title="Best Work!" username="Stevanus" userRole="Game Development"/>
            </Carousel>
        </div>

    </div>
  )
}

export default Testimony

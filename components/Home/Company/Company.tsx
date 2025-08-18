"use client"
import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CompanyCarousel from './CompanyCarousel';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const CompanyData = [
  {
    id:1, 
    image:"/images/c1.png",
    name:"Udemy",
    location:"London, UK",
    position : "20",
  },
    {
    id:2, 
    image:"/images/c2.png",
    name:"Stripe",
    location:"Manchester, UK",
    position : "15",
  },
    {
    id:3, 
    image:"/images/c3.png",
    name:"Dropbox",
    location:"Washington, DC",
    position : "40",
  },
  {
    id:4, 
    image:"/images/c4.png",
    name:"Figma",
    location:"Dhaka, Bangladesh",
    position : "40",
  },

]



const Company = () => {
  return <div className=" pt-16 pb-16">
    <SectionHeading heading='Top Company Registered' subheading= "Some of the companies we've helped recruit excellent applicants over the years."/>
    <div className="w-[80%] mx-auto mt-16 ">
              <Carousel
               
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
              >
               {CompanyData.map((data) => {
                return <CompanyCarousel key={data.id} data={data}>
                  </CompanyCarousel>
                
               })}
              </Carousel>
    </div>
  </div>
}

export default Company

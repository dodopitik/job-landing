import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import JobCard from './JobCard'


     const jobsData = [

        {
            id:1, 
            image: "/images/j1.png",
            title: " Software Engineer",
            location: " London , Uk", 
            jobType: "Full Time",
            urgency: "Urgent",
        },
              {
            id:2, 
            image: "/images/j2.png",
            title: " Recruiting Coordinator",
            location: " Manchester , Uk", 
            jobType: "Part Time",
            urgency: "Urgent",
        },
              {
            id:3, 
            image: "/images/j3.png",
            title: " Product Manager , Studio",
            location: " Birmingham , Uk", 
            jobType: "Contract",
            urgency: "Private",
        },
              {
            id:4, 
            image: "/images/j4.png",
            title: " Senior Product Manager",
            location: " Bristol , Uk", 
            jobType: "Full Time",
            urgency: "Private",
        },
              {
            id:5, 
            image: "/images/j5.png",
            title: "  Product Manager , Risk",
            location: " Edinburgh , Uk", 
            jobType: "Contract",
            urgency: "Private",
        },
             {
            id:6, 
            image: "/images/j6.png",
            title: "  Technical Architect",
            location: " Leeds , Uk", 
            jobType: "Full Time",
            urgency: "Urgent",
        },
             {
            id:7, 
            image: "/images/j7.png",
            title: " Web Engineer",
            location: " Brighton , Uk", 
            jobType: "Full Time",
            urgency: "Urgent",
        },
           {
            id:8, 
            image: "/images/j8.png",
            title: "  Senior Product Designer",
            location: " London , Uk", 
            jobType: "Full Time",
            urgency: "Urgent",
        },
         {
            id:9, 
            image: "/images/j8.png",
            title: "  Senior BI Analyst",
            location: " London , Uk", 
            jobType: "Full Time",
            urgency: "Urgent",
        },
        

    ]




const Job = () => {

  return (
    <div className='pt-16 pb-16'>
     <SectionHeading heading="Featured Jobs" subheading='Know your worth and find the job that qualify your life'/>
       <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {jobsData.map((listjob) =>
            {
                return (
                <div key={listjob.id} >
                <JobCard listjob={listjob}/>
                
                </div>
                )
            })}
              
        </div>
        <div className="mt-10 text-center">
        <button className=" text-white rounded-lg px-10 py-4 bg-blue-700 mt-5 text-base cursor-pointer hover:bg-blue-800 transition-all duration-200 ">
              Load More Listing
        </button>
        </div>
    </div>
  )
}

export default Job

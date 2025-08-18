import JobSearchBar from "./JobSearchBar"
import Image from "next/image"

const Hero = () => {
  return  <div className="relative w-full h-screen flex justify-center flex-col ">
    <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
            {/* text-content */}
        <div className="order-2 xl:order-1" data-aos="fade-right" >
            {/* heading */}
        <h1 className="text-3xl sm:text-6xl font-bold"> Join us & Explore <br />Thousands of Jobs </h1>
        {/* subheading */}
        <p className=" mt-4 text-sm sm:text-lg font-medium">Find Jobs, Employment & Career Opportunities </p>
        {/* jobsearchbar */}
        <JobSearchBar/>
        {/* popular search */}
        <div className="text-base font-semibold text-gray-700 dark:text-gray-300 mt-6 flex items-center space-x-6">
            <span>Popular Search :</span>
            <span className="text-sm text-gray-700 dark:text-gray-300 font-light">
                Designer , Developer , Web , IOS , PHP , Senior , Engineer,
            </span>
        </div>
       </div>
        {/* img content */}
        <div className="order-1 xl:order-2 mx-auto " data-aos="fade-left" data-aos-delay="2000">
          <Image src="/images/hero.png" alt="hero" width={1200} height={900}/>
        </div>
    </div>
    </div>
  
}

export default Hero

"use client"
import { useEffect } from "react"
import Category from "./Category/Category"
import Company from "./Company/Company"
import Hero from "./Hero/Hero"
import Job from "./Job/Job"
import Pricing from "./Pricing/Pricing"
import SecondHero from "./SecondHero/SecondHero"
import Testimony from "./Testimony/Testimony"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {

      useEffect(() => {
        const initAOS = async()=> {
          await import('aos')
          AOS.init({
            duration: 1000,
            easing:'ease',
            once:true,
            anchorPlacement: "top-bottom",

          })
        }
        initAOS()
      },[])



  return (
    <div className="overflow-hidden min-h-screen pb-10">
     <Hero/>
     <Category/>
     <Job/>
     <Company/>
     <SecondHero/>
     <Pricing/>
     <Testimony/>
    </div>
  )
}

export default Home

"use client";
import { LuNetwork } from "react-icons/lu"
import { NavLinks } from "@/constant/constant"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { HiBars3BottomRight } from "react-icons/hi2"
import ThemeToggler from "@/components/Helper/ThemeToggler";




type props = {
  openNav:() => void;
   
}

const Nav = ({openNav}:props) => {

            const[navBg, setNavBg] = useState(false);

            useEffect(()=> {
              const handler =() => {
                if(window.scrollY >=90) setNavBg(true);
                if(window.scrollY <90 ) setNavBg(false)
              }
            window.addEventListener("scroll", handler)
            return ()=> window.removeEventListener("scroll", handler)
            },[])
            
  return (
    <div className={`transition-all ${navBg ? "bg-white dark:bg-gray-900 shadow-md" : "fixed"} duration-200 h-[12vh] z-[10000] fixed w-full` }>
        <div className="flex items-center h-full justify-between w-[92%] mx-auto">
            <div className="flex items-center sm:space-x-20">
            {/* LOGO */}
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-cyan-800 dark:bg-white  rounded-full flex items-center justify-center flex-col">
                    <LuNetwork className="w-5 h-5 text-white dark:text-black"/>
                    </div>
                    <h1 className="text-xl hidden sm:block md:text-2xl dark:text-cyan-200 text-cyan-800 font-bold">DevHire</h1>
                </div>

            {/* NavLink */}
            <div className="hidden lg:flex item-center space-x-10">
              {NavLinks.map((link)=>{
                return (
                  <Link key={link.id} 
                href={link.url}
                className="text-base hover:text-cyan-700 dark:hover:text-cyan-200 font-medium transition-all duration-200">
                  <p>{link.label}</p>
                </Link> )
              })}
            </div>
        </div>
        {/* BUTTON */}
        <div className="flex items-center space-x-4">
          {/* logn/register button */}
          <button className="px-8 py-2.5 text-xs sm:text-sm rounded-lg cursor-pointer dark:text-black bg-gray-100 dark:hover:bg-cyan-200 hover:bg-cyan-700 transition-all duration-300">Login / Register</button>
          {/* job post button */}
          <button className="px-8 py-2.5 text-sm hidden sm:block rounded-lg cursor-pointer bg-cyan-600 hover:bg-cyan-900 transition-all duration-300 text-white">Job Post</button>
          {/* darkmode/lightmode */}
                <ThemeToggler/>
          {/* burgermenu */}
          <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer dark:text-white text-black lg:hidden"/>
          <button></button>
        </div>
     </div>
    </div>
  )
}

export default Nav

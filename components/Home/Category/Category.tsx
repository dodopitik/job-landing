import SectionHeading from "@/components/Helper/SectionHeading"
import { FaLaptopCode } from "react-icons/fa"
import { GiTakeMyMoney } from "react-icons/gi"
import { IoMegaphone } from "react-icons/io5"
import { LiaCarSideSolid } from "react-icons/lia"
import { LuRocket } from "react-icons/lu"
import { MdOutlineMedicalServices } from "react-icons/md"
import { PiPaintBrush } from "react-icons/pi"
import { RiCustomerService2Fill } from "react-icons/ri"
import CategoryCard from "./CategoryCard"

const Category = () => {

    const categoryData = [
        {
            id:1,
            categoryName: "Accounting / Finance",
            openPosition:6,
            icon: <GiTakeMyMoney className="w-10 h-10 text-blue-700 dark:text-white"/>
        },
          {
            id:2,
            categoryName: "Marketing",
            openPosition:53,
            icon: <IoMegaphone className="w-10 h-10 text-blue-700 dark:text-white"/>
        },
          {
            id:3,
            categoryName: "Design",
            openPosition:42,
            icon: <PiPaintBrush className="w-10 h-10 text-blue-700 dark:text-white"/>
        },
          {
            id:4,
            categoryName: "Development",
            openPosition:22,
            icon: <FaLaptopCode className="w-10 h-10 text-blue-700 dark:text-white"/>
        },
          {
            id:5,
            categoryName: "Project Manager",
            openPosition:12,
            icon: <LuRocket className="w-10 h-10 text-blue-700 dark:text-white"/>
        },
          {
            id:6,
            categoryName: "Customer Service",
            openPosition:56,
            icon: <RiCustomerService2Fill className="w-10 h-10 text-blue-700 dark:text-white"/>
        },
          {
            id:7,
            categoryName: "Health and Care",
            openPosition:11,
            icon: <MdOutlineMedicalServices className="w-10 h-10 text-blue-700 dark:text-white"/>
        },
          {
            id:8,
            categoryName: "Automotive Jobs",
            openPosition:23,
            icon: <LiaCarSideSolid className="w-10 h-10 text-blue-700 dark:text-white"/>
        },
    ]



  return (
    <div className="pt-16 pb-16">
        <SectionHeading heading={"Popular Job Categories"} subheading={"2020 jobs live - 293 added today."}/>
        <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryData.map((category) =>
            {
                return <div key={category.id} >
                <CategoryCard category={category}/>
                
                </div>
            })}
              
        </div>
    </div>

  )
}

export default Category

import Category from "./Category/Category"
import Hero from "./Hero/Hero"
import Job from "./Job/Job"

const Home = () => {
  return (
    <div className="overflow-hidden h-[5000px]">
     <Hero/>
     <Category/>
     <Job/>
    </div>
  )
}

export default Home

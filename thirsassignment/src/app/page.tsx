import Image from "next/image"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import WorkManagment from "./components/WorkManag"

export default function Home(){
  return(
    <div>
      <Navbar />
      <Hero /><hr />
      <WorkManagment />
    </div>
  )
}
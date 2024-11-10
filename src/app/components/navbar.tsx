import Link from "next/link"

export default function Navbar(){


  return (
    
        <header className="text-white  bg-gray-600 body-font  rounded-2xl ml-8 mr-7  w-[1728px] h-[80px] justify-between">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center  ">
  
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0  ">

      <span className="ml-3 mr-20 text-xl font-bold " >My Portfolio</span>
    </a>
    
    <nav className="md:ml-8 md:mr-auto flex flex-wrap items-center font-bold lg:gap-5 justify-center ">
      <Link href="/" className=" mr-5  hover:text-gray-700 transform  hover:scale-110  transition  duration-500  ease-out ">Home</Link>
      <Link href="/about" className="mr-5 hover:text-gray-700 hover:scale-110  transition  duration-500  ease-out">About</Link>
      <Link href="/project" className="mr-5 hover:text-gray-700  transform  hover:scale-110  transition  duration-500  ease-out">Project</Link>
      <Link href="/skills" className="mr-5 hover:text-gray-700  transform  hover:scale-110  transition  duration-500  ease-out">Skills</Link>
      <Link href="/contact" className="mr-5 hover:text-gray-700  transform  hover:scale-110  transition  duration-500  ease-out">Contact</Link>

      
    </nav>
  </div>
  
</header>
) }
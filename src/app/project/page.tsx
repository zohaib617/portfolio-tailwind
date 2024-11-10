import { resolve } from "path";
import Navbar from "../components/navbar";

export default async function Project() {


 return (
    
<section className= " w-[1728px] h-[682px] border-4 border-black ml-8 p-5   flex justify-center content-center items-center bg-gray-950" >
    
    
    <div className="w-64 rounded-2xl bg-gray-100  border-4 border-customOrange ">
    <h1 className="text-center font-bold text-2xl text-customOrange mt-3">45 Asignment</h1>

    <a href="https://github.com/zohaib617/TypeScript-First-Assignment.git">
    <img src="/image/45.jpg"  className="  w-64 h-64 border-4 border-gray-800 transform hover:scale-110 transition duration-500 ease-out "  alt="project1" /> 
    </a>

    <p className=" text-center font-sans text-black "> I completed FOURTY FIVE assignment of TypeScript, consisting of fourty five tasks using TypeScript
    these are FOURTY FIVE assignment which giving by our Teachers. </p>
    
    
    </div>



   


    <div className="w-64 m-5 rounded-2xl bg-gray-100  border-4 border-customOrange">
    <h1 className="text-center font-bold text-2xl text-customOrange mt-3">Resume Builder</h1>

    <a href="https://hackathon-milestone-5-mauve.vercel.app/">
    <img src="/image/resume1.jpeg"  className="  w-64 h-64 border-4 border-gray-800 transform hover:scale-110 transition duration-500 ease-out"  alt="project2" /> 
    </a>

    <p className=" text-center font-sans text-black ">Using HTML CSS TypeScript, I construct a resume builder hackathone based on five milestones that can be ediable by user
         and shareable link for download as pdf </p>
    
    </div>

 
 
 
    <div className="w-64 rounded-2xl bg-gray-100  border-4 border-customOrange">
    <h1 className="text-center font-bold text-2xl text-customOrange mt-3">My PortFolio</h1>

    <a href="https://portfolio-51pe.vercel.app/">
    <img src="/image/cli.jpg"  className="  w-64 h-64 border-4 border-gray-800  transform hover:scale-110 transition duration-500 ease-out"  alt="project3" /> 
    </a>

    <div><p className=" text-center font-sans text-black ">
    i create my portfolio using html css javascript 
    chat bot 
    home page <br />
    about page <br />
    skill page <br />
    project page <br />
    conect page 

    </p>
    </div>
    </div>



</section>














 )   
}
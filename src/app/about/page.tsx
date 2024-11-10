import Navbar from "../components/navbar";





export default function Aboutpage (){
    return(
        


        <section className="w-[1728px] h-[682px]  ml-8  bg-gray-950 border-4 border-black flex justify-center justify-items-center p-10"  >
            
                        
            <div  className=" flex items-center text-left ml-8 w-[600px] h-[500px] mr-20">
                
            <p className=" text-white ml-5 text-4xl  text-left p-5 "> Hello! I’m a web developer driven by a passion 
                for building engaging and efficient websites.
                 I specialize in front-end development, with a strong command of HTML, CSS, JavaScript
                  and TypeScrpt.
                   Now i am student of GIAIC Q2 i have done my letest project
                    Company Portfolio which is given by sir Ameen Alam as a asignment. 
                    its only for desktop layout for Github link :[ https://github.com/zohaib617/company-portfolio] You can visit here click to the image     
            </p>
            
            </div>
            <div className=" flex items-center text-left ml-8 w-[600px] h-[500px] ">
            
            <a href="https://company-portfolio-pi-two.vercel.app/">    <img className="w-w-[600px] h-[500px] border-8 border-blue-500 transform hover:scale-110 transition duration-500 ease-out "  src="/image/portfolio.jpg" alt="Portfolio" />
            </a>
            </div>

        </section>
    )
}
  
import Navbar from "./components/navbar"


export default  function Homepage(){



  return(

<section className="bg-gray-900 w-[1728px] h-[682px]   border-2 sold to-blue-600 ml-8  flex justify-center justify-items-center" >

<div className="  w-[1000px] h-[682px]" >

  <h1 className="ml-8 mt-10 text-5xl font-sans text-white" >I am <span className="text-blue-500" >zohaib shah</span></h1>
    <h2 className="ml-8 mt-8 text-6xl font-sans font-bold  text-blue-500" >Web Devloper</h2>
    <p className=" text-white text-xl m-5  ml-10 mb-20 font-sans mt-10 text-justify"  >Welcome to my portfolio! I am a passionate web developer with a focus on creating clean, responsive, and user-friendly websites. With a solid foundation in HTML, CSS, and JavaScript, I build modern web solutions that are both visually appealing and highly functional. My experience ranges from crafting static websites to developing dynamic web applications that cater to various client needs.
            In my projects, I strive to combine creativity with practicality, ensuring that the design complements the user experience while maintaining strong performance. Whether it's front-end design, back-end functionality, or seamless integration of both, I am committed to delivering high-quality results.
            Feel free to explore my work and get in touch if you’re interested in collaborating or learning more about what I can offer. Let's create something amazing together!.
            
        </p>


</div>
<div className="w-[700px] h-[682px]  justify-center justify-items-center" >
  <img className="rounded-2xl w-[300px] h-[400px] mt-20 border-8 border-blue-500" src="image/zs1.jpg" alt="" />
</div>

</section>





  )
}
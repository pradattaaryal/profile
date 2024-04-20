// About.js
import React from 'react';
import y from './y.jpeg'
 import { IoDocumentTextOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";

const About = () => {
  return (
     <div id='about' className='h-screen w-full  '>
     <div  className='h-screen max-w-[1140px]  m-auto  '>
      <div className='  md:h-[25vh] sm:h-[25vh]  md:pt-16 sm:pt-8 flex flex-col  items-center'>
        <h1 className='p-2 pt-4  text-xl sm:text-3xl  md:text-5xl  xl:text-7xl tracking-wide font-semibold'>About Me</h1>
        <p className=' text-xl font-medium'>My Introduction</p>
      </div>

      
      <div className='  w-full   md:max-w-[1140px] max-h-[100vh] min-h-[70vh] md:p-6  flex  md:flex-row sm:justify-center items-center flex-col  md:justify-between'> 
      <div className='  w-[50%] flex items-center  justify-center mb-5 '><img className="rounded-3xl border-4 border-black shadow-2xl h-[180px] w-[160px]  sm:h-[280px] sm:w-[250px] md:h-[400px] md:w-[350px] " src={y} alt=""  /></div>
      <div className='  w-[95vw] md:w-[50%] flex flex-col justify-around gap-16 items-center  '>
        <div className=' w-full  flex justify-center gap-4  ml-2 '> 
         
        <div className=' border-2 h-[100px] border-black shadow-xl w-[30%]  p-4 flex flex-col rounded-xl justify-center items-center'>
          <span className='text-2xl '><MdOutlineMenuBook /></span>
          <h3 className=' text-lg font-bold'>currently</h3>
          <p className=' font-medium'>7th Sem</p>
        </div>
        <div className=' border-2 h-[100px] border-black shadow-xl w-[30%]  p-4 flex flex-col rounded-xl justify-center items-center'>
          <span className='text-2xl '><MdWorkOutline /></span>
          <h3 className=' text-lg font-bold'>Completed</h3>
          <p className=' font-medium'>5+ Projects</p>
        </div>
         
        </div>
        <p className=' text-wrap   w-[80vw] md:w-[100%]'>I'm a very ambitious student looking to gain experience in both backend and frontend development with the latest technologies.
I'm confident, naturally curious, and perpetually working on improving my skills and knowledge.</p>
        <div className='flex  text-white max-w-[180px] p-4 font-semibold text-xl rounded-xl text-center gap-1 shadow-2xl left-0 bg-black'> {/*<button onClick={() => window.open(cv,"_blank")} ></button >*/}Download CV <span className='pt-1'>< IoDocumentTextOutline /></span></div> 
      </div>
      </div>
     </div>
     </div>
  )
}

export default About;

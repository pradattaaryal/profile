import React from 'react'
import Marquee from "react-fast-marquee";
import { FaRegSadCry } from "react-icons/fa";

const Label = () => {
  return (
    <div className='border-y-4 border-double border-black mt-14'>
    <Marquee speed={200} loop={0} play={true}> 
    <div className='flex'>
      <h1 className={`font-fira font-extrabold text-[50px] sm:text-[80px] md:text-[10rem] xl:text-[200px]  text-white p-2 mb-8 `}> Hire me plz </h1><span className='text-black  font-extrabold text-[50px] sm:text-[80px] md:text-[10rem] xl:text-[200px] pt-6 sm:pt-10 md:pt-20 pl-8 '> <FaRegSadCry />
</span>
    </div></Marquee></div>
  )
}

export default Label
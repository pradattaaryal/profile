import React, { useState, useEffect } from 'react'; // Importing useState and useEffect
import './Landing.css'
import x from './x.png';
 const Landing = () => {
   
  return (
    <div className='h-screen w-full relative'id='home'> 
      <div className='max-w-[1140px] m-auto h-screen pt-16 flex justify-center items-center'> 
        <div className='h-full w-full relative'>
          <img src={x} className='absolute inset-0 w-full h-full object-cover ' alt="Background" />
          <div className=' text-transparent absolute inset-0 flex flex-col  items-center justify-center'>
             <h1 className={`  font-fira font-extrabold   text-white text-[80px] sm:text-[80px] md:text-[10rem]  xl:text-[200px]  p-2 pb-20 -z-10 `}>初学者</h1>
            <h1 className={`font-fira font-extrabold text-[50px] sm:text-[50px] md:text-[10rem] xl:text-[200px] text-white p-2 -z-10`}> 网页开发者</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;

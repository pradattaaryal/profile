import React from 'react';
import { PiSealCheckFill } from 'react-icons/pi';
 

const Skill = () => {
  const skillItems = [{skill:"HTML" },{skill:"CSS" },{skill:"React", },{skill:"tailwind" },{skill:"Js" },];
  const skillItem = [{skill:"JS" }, {skill:"Node" }, {skill:"Sql" }, {skill:"Mongoodb" }, {skill:"express" }];

  return (
    <div className='  w-full bg-white  ' id='skill'>
      <div className='max-w-[1140px] h-screen m-auto'>
        <div className='md:h-[25vh] sm:h-[25vh] md:pt-12 sm:pt-8 flex flex-col items-center'>
          <h1 className='p-2 pt-4 text-xl sm:text-3xl md:text-5xl xl:text-7xl tracking-wide font-semibold'>Skills</h1>
          <p className='text-xl mb-4 font-medium'>My technical level</p>
        </div>
        <div className='w-full flex flex-col md:flex-row justify-evenly md:max-w-[1140px] max-h-[100vh]  min-h-[70vh] p-8'>
          <div className='md:w-[45%] border-4 border-black shadow-2xl rounded-2xl p-2 md:p-6 flex flex-col justify-center  mb-2 '>
            <h1 className='text-center pb-8 text-2xl font-semibold'>Frontend Skill</h1>
            <div className='grid grid-cols-2 p-4 ml-6 md:ml-16'>
            {skillItems.map((item, index) => (
                
                <div key={index} className=' '>
                  <h2 className='flex items-center text-xl font-medium gap-2'>
                  <PiSealCheckFill/>
                    <span>{item.skill}</span>
                  </h2>
                  <p>Basic</p>
                </div>
              ))}
            </div>
          </div>
          <div className='md:w-[45%] border-4 border-black shadow-2xl rounded-2xl p-2 md:p-6 flex flex-col justify-center  mb-2 '>
            <h1 className='text-center pb-8 text-2xl font-semibold'>Backend Skill</h1>
            <div className='grid grid-cols-2 p-4 ml-6 md:ml-16'>
            {skillItem.map((item, index) => (
                
                <div key={index} className=' '>
                  <h2 className='flex items-center text-xl font-medium gap-2'>
                  <PiSealCheckFill/>
                    <span>{item.skill}</span>
                  </h2>
                  <p>Basic</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

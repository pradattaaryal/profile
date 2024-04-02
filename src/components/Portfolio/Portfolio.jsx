import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import data from './data';

const Portfolio = () => {
 const handleClick = (e, link1, link2) => {
    e.preventDefault();
    window.open(link1, '_blank');
    if (link2) {
      window.open(link2, '_blank');
    }
  };
  return (
    <div className='h-screen w-full mt-24 md:mt-0 ' id='portfolio'>
      <div className='max-w-[1140px] h-screen m-auto'>
        <div className='md:h-[25vh] sm:h-[25vh] md:pt-16 sm:pt-8 flex flex-col items-center'>
          <h1 className='p-2 pt-4 text-xl sm:text-3xl md:text-5xl xl:text-7xl tracking-wide font-semibold'>Projects</h1>
          <p className='text-xl font-medium'>Most recent work</p>
        </div>
        <div className='  grid col-span-3 w-full md:max-w-[1140px]   min-h-[70vh] md:p-6'>
          <div className='flex justify-center'>
            <button className='border-[3px] border-black p-2 border-solid font-bold text-xl rounded-l-2xl'>All Project</button>
            <button className='border-y-[3px] border-black p-2 border-solid font-bold text-xl'>Fullstack</button>
            <button className='border-[3px] border-black p-2 border-solid font-bold text-xl rounded-r-2xl'>Frontend</button>
          </div>
          <div className='w-full h-full  gap-2  md:pl-[140px] grid md:grid-cols-3  grid-cols-2  p-4'>
            {data.map((item, index) => (
              <a href={item.link}  onClick={(e) => handleClick(e, item.link, item.link2)}><div className='max-h-[200px] p-2 h-[200px] max-w-[200px] border-2 border-solid border-black hover:shadow-2xl hover:scale-105 hover:shadow-slate-950  mb-6 transition duration-600 shadow-lg rounded-md' key={index}>
                <div className='h-[120px] w-full'>
                  <img className='rounded-xl object-cover border-2 border-black' src={item.src} alt='' style={{ height: '100%', width: '100%' }} />
                </div>
                <h2>{item.title}</h2> {/* Access item.title */}
                <div className='flex text-center gap-2'>
                  <p>Demo</p>
                  <span className='pt-1'><FaArrowUpRightFromSquare /></span>
                </div>
              </div></a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import React from 'react'
import G3 from '../../assets/G3.gif'

import TypeWriter from '../TypeWriter'
// import ReactGA from "react-ga4";
import Slide from 'react-reveal/Slide';
// import { useEffect } from 'react';
 import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
 
// useEffect(()=>{
//   ReactGA.pageview(window.location.pathname);
//   },[]);

  const handlePageChange = () =>{
    navigate('/contact2');
  };
  return (
   
    <div className=' w-full  h-screen text-black font-[poppins] m-auto'>
        <div className='w-full grid md:grid-cols-2  max-w-[1000px] items-center justify-center  h-full m-auto '>
         <div className='m-auto md:pt-0 pt-20 '>  
         <Slide left>
         <img src={G3} alt="/" className='w-[300px] md:w-full' loading='lazy'/>
         </Slide>
         </div>
         
         <div className='w-full pb-[120px] '>
         <Slide right>
            <h1 className=' text-[14px] font-[LexendZetta] font-[100px] text-center md:text-start justify-center items-center text-white ' id='text-black'>Howdy, <br /> Godsent Oko-Ose here, i'm a</h1>
            <h1 className='text-[40px] md:text-[60px]  font-bold opacity-15 leading-none text-center py-3 md:text-start text-white font-[LexendZetta] ' id='text-black'>Software <br />Developer.</h1>

            <div className='font-[LexendZetta] font-bold text-blue-500 text-center md:text-start'    > 
            <TypeWriter/>
             </div>
             </Slide>

            <div className='mt-4 justify-center items-center m-auto text-center md:text-start'>
            <Slide right>
            <button className='border-2 border-blue-600 p-3 mt-3 font-semibold w-[300px] rounded bg-opacity-95 text-white cursor-pointer font-[LexendZetta] font-Light md:text-[14px] text-[11px] ' onClick={handlePageChange} id='text-black'>Lets Talk</button> 
            </Slide>           
            </div>
            
         </div>

        </div>

    </div>
  
  )
}

export default HomePage
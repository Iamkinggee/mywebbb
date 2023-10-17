import React from 'react'
import { FaCode, FaCogs, FaHandshake, FaPhotoFilm, FaPhotoVideo } from 'react-icons/fa'
import Fade from 'react-reveal/Fade';

function Services1() {
  return (
    <div id='Services' className='bg-neutral-800 w-full m-auto h-20vh '>

      <div>
      <h1 className='flex m-auto pt-20 text-gray-400  justify-center items-center text-center text-4xl font-bold font-mono  '>
<span className='opacity-40'>my</span>
<span className='text-white '>Services</span>
</h1>

<p className='text-neutral-300 text-center pt-2'>below are my services</p>



      </div>
    
      <div className=' gap-3 justify-center items-center m-auto grid grid-col-3 md:flex md:space-x-20 py-20 px-10'>

        

      <Fade left>
  
  
      <div className='bg-black rounded-[10px] hover:scale-105 duration-300 cursor-pointer '>
          <div className='flex  justify-center text-center mt-5  text-blue-700 text-4xl hover:scale-105 duration-300 cursor-pointer'>
          <FaCode size={50}/>
          </div>
          
          <div className='p-5 w-[280px] h-[210px] justify-center items-center m-auto  '>
            <h1 className='text-white text-center text-2xl font-bold font-mono'>Web <br /> Development</h1>
            <p className='text-neutral-300 pt-5 text-start font-light '>Need a personal or Business website? I will deliver premuim, sleek and scalable websites for you.   </p>
          </div> 
        </div>
        </Fade>



        <Fade>
        <div className='bg-black rounded-[10px]  hover:scale-105 duration-300 cursor-pointer '>
          <div className='flex  justify-center text-center mt-5  text-blue-700 text-4xl'>
          <FaCogs size={50}/>
          </div>
          
          <div className='p-5 w-[280px] h-[210px]'>
            <h1 className='text-white text-center text-2xl font-bold font-mono'>Mobile App. Development</h1>
            <p className='text-neutral-300 pt-5 text-start font-light pl-10'>I build Mobile Apps. for Andriod and ios. </p>
          </div> 
        </div>

        </Fade>
        <Fade right>
        <div className='bg-black rounded-[10px] hover:scale-105 duration-300 cursor-pointer'>
          <div className='flex  justify-center text-center mt-5  text-blue-700 text-4xl'>
          <FaHandshake size={50}/>
          </div>
          
          <div className='p-5 w-[280px] h-[210px]'>
            <h1 className='text-white text-center text-2xl font-bold font-mono'>Open for Collaborations</h1>
            <p className='text-neutral-300 pt-5 text-start font-light'>Need some help with a gig or idea? Book a consultation session with me. </p>
          </div> 
        </div>
        </Fade>








      </div>
    </div>
  )
}

export default Services1;
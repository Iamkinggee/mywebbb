import React from 'react'
import MyPhoto2 from '../assets/images/MyPhoto2.png'
import Bubbles from './Bubble/Bubbles'
import Slide from 'react-reveal/Slide';

function About1() {
  return (
 
    <div id='about' className=' w-full bg-neutral-900 text-teal-50  py-16 px-4 m-auto justify-center items-center'>
    <div className='max-w-[1024px] mx-auto grid md:grid-cols-2'>
     
       
          
          <div>
            <Slide left>
            <Bubbles />
            </Slide>
          
          </div>

        
      




        <div className='flex flex-col '>
          {/* <h1 className='md:text-6xl  sm:text-1xl text-6xl font-bold font-mono md:text-start text-center py-2 mt-3 '>Meet Me</h1> */}
        
          <Slide right>
          <p className='text-neutral-300 mt-15 pt-10  p-2 md:text-[17px] sm:text-[16px] text-[15px] '>
{/* 
          Hey! I am Godsent Oko-Ose Based in Nigeria. Okay, here's a sneak peak about me. 
          My creative journey started as early as age 6 - from drawing caricature images to human portrait pencil drawing to deep diving into Graphic Design, then transitioning to developing software products; building web and cross-platform mobile Apps. (Andriod and ios).  I am a Meta certified Software Engineer. I enjoy singing and playing the piano-keyboard and Drums in my free time.  */}

           
          Hey! I am Godsent Oko-Ose Based in Nigeria. I'm a front-end software Developer and cross-platform mobile app Developer with a flair for crafting stunning, user friendly websites and applications that harmoniously blend aesthetics and functionality. My passion for design fuels my dedication to delivering exceptional digital experiences. I am ready to collaborate with you , turning your ideas into a remarkable reality.






          </p>
          </Slide>
        
        
         


  <div className='p-3'>
  
  <button className='border border-blue-700  rounded mt-5 w-40 h-15 p-3  hover:scale-110 transition text-teal-50 text-[15px] font-mono'>
   see my Resume
 </button> 

  </div>









        </div>
       
    </div>

</div>
  )
}

export default About1
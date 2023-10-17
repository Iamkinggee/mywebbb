import React from 'react'

import Slide from 'react-reveal/Slide';

import CSS from '../assets/images/CSS.png'
import FIGMA from  '../assets/images/FIGMA.png'
import HTML from '../assets/images/HTML.png'
import GIT2 from '../assets/images/GIT2.png'
import NODE2 from '../assets/images/NODE2.png'
import REACT from '../assets/images/REACT.png'
import JS from '../assets/images/JS.jpg'
import PHOT from '../assets/images/PHOT.png'
import AI from '../assets/images/AI.png'
import GITHUB2 from '../assets/images/GITHUB2.png'
import tailwind from '../assets/images/tailwind.png'
import wordpress1 from '../assets/images/wordpress1.png'






const TechStack = () => {
  return (
    <div id='stack' className='bg-black w-full  '>

      <div className='max-w-[1024px] justify-center items-center m-auto grid md:grid-cols-2'>

        <div  className='items-center justify-center m-auto p-10'>

        <Slide left>
          <h1 className='text-white text-5xl font-bold  font-mono pt-10'>Tech  <br /><span className='opacity-60'>Stack</span></h1>
          </Slide>
          <p className='text-neutral-300 text-start  mt-5 '>I am Proficient in <br /> these Technologies.</p>



       
        
        </div>






        <div>
          {/* form here */}
          <Slide right>
         


          <div className='text-white  w-15 justify-center '>


          <div className='flex  h-10  gap-4 mt-10 '>
      <img src={HTML} alt="cssIcon " className='hover:scale-110  transition' />
        <img src={CSS} alt="cssIcon" className='hover:scale-110  transition'/>
        <img src={JS} alt="cssIcon" className='hover:scale-110  transition'/>
        <img  src={REACT} alt="cssIcon" className='hover:scale-110  transition' />
        <img  src={NODE2} alt="cssIcon" className='hover:scale-110  transition' />
        <img src={GIT2} alt="cssIcon " className='text-white hover:scale-110  transition' />
      </div>
        

        <div className='flex h-10 gap-4 mt-5 '>
     
        <img src={GITHUB2} alt="cssIcon " className='text-white hover:scale-110  transition' />
        <img src={FIGMA} alt="cssIcon" className='hover:scale-110  transition' />    
        <img src={PHOT} alt="cssIcon" className='hover:scale-110  transition' />    
        <img src={AI} alt="cssIcon" className='hover:scale-110  transition' />    
        <img src={wordpress1} alt="cssIcon" className='hover:scale-110  transition' /> 
        
        <img src={tailwind} alt="cssIcon"  className='hover:scale-110  transition ' />   
        

        
          
        </div>    



        <div className='flex  pt-10 gap-10 pb-5' >
            <div >
            
                <li>HTML</li>    
                <li>CSS</li>
                <li>Javascript</li>
                <li>React JS</li>
                <li>React Native</li>
                <li>Tailwind CSS</li>
                
                
                
            
            </div>

            <div>
               <li>Figma</li>
                <li>Git And GitHub</li>
                <li>Wordpress</li>
                <li>BootStrap</li>
                <li>Photoshop</li>
                <li>Adobe Illustrator</li>
               
            </div>
        </div>

                

          </div>
          </Slide>
        </div>









      </div>
    
    </div>
  )
}

export default  TechStack
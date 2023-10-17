import React from 'react'
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



const MyStack = () => {
  return (

  <div className='block items-center justify-center w-[850px] h-100vh pt-10  m-auto mt-85 p-5 h-[400px] border-slate-900 border-4 rounded-[20px] '>
    
      <div>
    <h1 className='block text-gray-400 justify-center items-center text-center text-6xl font-bold font-mono '>
    <span className='opacity-40'>tech</span>
<span className='text-white '>Stack</span> 
    </h1>
      </div>
      <p className='text-white mt-5 text-center'>I am proficient in several Technologies <br />which includes the following:</p>


    <div >
      <div className='flex w-15 h-10 justify-center gap-8 mt-10 '>
      <img src={HTML} alt="cssIcon " className='hover:scale-110  transition' />
        <img src={CSS} alt="cssIcon" className='hover:scale-110  transition'/>
        <img src={JS} alt="cssIcon" className='hover:scale-110  transition'/>
        <img  src={REACT} alt="cssIcon" className='hover:scale-110  transition' />
        <img  src={NODE2} alt="cssIcon" className='hover:scale-110  transition' />
        <img src={GIT2} alt="cssIcon " className='text-white hover:scale-110  transition' />
      </div>
        

        <div className='flex w-15 h-10 justify-center gap-8 mt-10 '>
        <img src={GITHUB2} alt="cssIcon " className='text-white hover:scale-110  transition' />
        <img src={FIGMA} alt="cssIcon" className='hover:scale-110  transition' />    
        <img src={PHOT} alt="cssIcon" className='hover:scale-110  transition' />    
        <img src={AI} alt="cssIcon" className='hover:scale-110  transition' />    
        <img src={wordpress1} alt="cssIcon" className='hover:scale-110  transition' />    
        <img src={tailwind} alt="cssIcon" className='hover:scale-110  transition' />
          
        </div>    



        <div>
          <p>Hello</p>
        </div>



    </div>
  </div>
  )
}

export default MyStack

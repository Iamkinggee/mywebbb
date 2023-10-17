import React from 'react'
import './Bubbles.css'
import JS from '../Bubble/images/JS.jpg'
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaWhatsapp
} from 'react-icons/fa'

import blue from '../Bubble/images/blue.png'




const Bubbles = () => {
  return (
    <div className='bub '>
        <div class="wrapper">
 


<img className="w-[500px] h-[200px]" src={blue} alt="cssIcon"/>
     </div>
        
     <div className='flex flex-col '>
          <h1 className='md:text-6xl  sm:text-1xl  font-bold font-mono md:text-start text-center  text-white m-auto '>
            
            
            <span className='text-4xl'>meet</span><span className='opacity-60 text-4xl'>Me</span></h1>

          
         



          <p className=' text-start m-auto justify-center text-neutral-400 '>a Sneak peak about me</p>
          </div>





    </div>
  )
}

export default Bubbles;
import React from 'react'
import {
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope
} from 'react-icons/fa'
import {Link} from 'react-scroll'
import Form1 from './Form1'
import Slide from 'react-reveal/Slide';
import ValForm from './ValForm';




const Footer1 = () => {
  return (
    <div id='contact' className='bg-black w-full  '>

      <div className='max-w-[1024px] justify-center items-center m-auto grid md:grid-cols-2'>

        <div  className='items-center justify-center m-auto p-10'>

        <Slide left>
          <h1 className='text-white text-5xl font-bold  font-mono pt-10'>Let's  <br /><span className='opacity-60'>Talk</span></h1>
          </Slide>
          <p className='text-neutral-300 text-start  mt-5 '>Got a great Idea, a job <br /> or a project you need  <br />help with? Shot me a <br /> line and let's Talk.</p>

         



         
          <div>
            <ul className='flex mr-10 space-x-4 cursor-pointer  text-gray-300 pt-2'>
           
         <div className='text-2xl text-blue-700 hover:scale-110 transition'><a href="https://www.linkedin.com/in/godsent-oko-ose-0aab62277" target='_blank'><FaLinkedin/></a></div>

      


         <div className='text-2xl text-blue-700 hover:scale-110 transition'><a href='mailto:iamgodsentt@gmail.com'><FaEnvelope/></a></div>






         <div className='text-2xl text-blue-700 hover:scale-110 transition'><a href="https://wa.me/+2348137906873" target='_blank'><FaWhatsapp/></a></div>
                   
            </ul>
            </div>






        </div>






        <div clasasName="" >
          {/* form here */}
          <Slide right>
         


          <ValForm/>
          </Slide>
        </div>









      </div>
    
    </div>
  )
}

export default Footer1
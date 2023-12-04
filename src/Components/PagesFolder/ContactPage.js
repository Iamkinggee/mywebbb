
import React from 'react'
import Slide from 'react-reveal/Slide';

import MyPhoto3 from '../../assets/MyPhoto3.png'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {FaLinkedin,FaEnvelope,FaWhatsapp} from 'react-icons/fa'
import Form from '../Form'





const ContactPage = () => {
  const navigate = useNavigate();

  const handlePageChange = () =>{
    navigate('/contact');
  };



  return (
   <>
    <div id='contact' className=' w-full  h-screen pb-[50px]  overflow-auto font-mono py-16 px-4 m-auto '>
        <div className=' max-w-[1000px]  items-center justify-center  mx-auto '>

         <div>
       
   
         <h1 className='  font-bold  text-neutral-500 
    text-[30px] sm:text-center md:text-[50px]   text-center md:text-center 
    mt-[30px] font-[LexendZetta]
    ' id='text-title'>Contact</h1>

         <p className='pb-5 font-[LexendZetta] py-2 text-center font-light md:text-[15px] text-[10px] text-white'>Got an Idea, Job or gig?<br /> Shoot me some lines.</p>

         <div className='grid md:grid-cols-2 w-full  items-center justify-center   '>

<div className=' md:w-full w-60'>
<Slide left>
 <Form/>
</Slide>
</div>



<div >


<div className='   pb-5 font-[LexendZetta] font-semibold text-[15px] text-white ' >
 <Slide right>
<p className='md:text-[15px] text-[10px] font-light font-[LexendZetta] text-center text-blue-500'><span  className='text-white ' id='text-blue'>EMAIL: 
<br />
</span> iamgodsentt@gmail.com</p>

<div className='p-5' id='text-black'>
<hr className='opacity-10'  />
</div>

  

<div className=' w-full '>
   <ul className='flex mr-10 space-x-10 cursor-pointer  text-gray-300 pt-5 justify-center items-center' >
  
<div className='text-2xl text-white hover:scale-110 transition' id='text-blue'><a href="https://www.linkedin.com/in/godsent-oko-ose-0aab62277" target='_blank'><FaLinkedin/></a></div>

<div className='text-2xl text-white hover:scale-110 transition' id='text-blue'><a href='mailto:iamgodsentt@gmail.com'><FaEnvelope/></a></div>

<div className='text-2xl text-white hover:scale-110 transition' id='text-blue'><a href="https://wa.me/+2348137906873" target='_blank'><FaWhatsapp/></a></div>
          
   </ul>
   </div>
   </Slide>
</div>


   
</div>

</div>
     
           
         </div>
         
        </div>
        

    </div>
    </>
  )
}

export default ContactPage
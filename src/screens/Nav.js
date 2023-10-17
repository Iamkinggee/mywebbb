import React from 'react'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
 import {
   FaLinkedin,
   FaWhatsapp,
   FaEnvelope
 } from 'react-icons/fa'
 
import {Link} from 'react-scroll'
import './Nav.css'






const Navbar = () => {

    const[nav, setNav] = useState(false);

    const handleNav=()=>{
        setNav(!nav)
    }

  return (
    <div className=' flex justify-between items-center h-24 text-white w-full max-w-[1024px] mx-auto px-4 top-0 sticky z-20' >



      <Link  to="hero" spy={true} smooth={true} offset={-100} duration={500}>

      <h1 className='font-mono text-3xl font-bold cursor-pointer'>Godsent<span className=' text-3xl text-blue-700' >.</span></h1>

      </Link>


        <div className='hidden md:flex cursor-pointer '>
        <div className='flex gap-20'>
             <div >
             <ul className='flex space-x-2'>
                 

                 <li className='nav-item  hover:border-b-4 p-2 hover:border-blue-800'>
                  <Link to="about" spy={true} smooth={true} offset={-100} duration={500} >
                   Me </Link></li>
                 <li className='nav-item  hover:border-b-4 p-2 hover:border-blue-800'>
                  <Link to="stack" spy={true} smooth={true} offset={-100} duration={500} >
                   Tech Stack </Link></li>
                 <li className='nav-item hover:border-b-4 p-2 hover:border-blue-800'>
                  <Link to="Services" spy={true} smooth={true} offset={-15} duration={500} >Services
                  </Link></li>
                 <li className='nav-item hover:border-b-4 p-2 hover:border-blue-800' >
                  <Link to="Portfolio" spy={true} smooth={true} offset={-15} duration={500} >Portfolio</Link></li>
                 <li className='nav-item hover:border-b-4 p-2 hover:border-blue-800'><Link to="contact" spy={true} smooth={true} offset={-100} duration={500} >Contact</Link></li>           
            </ul>
             </div>

            <div>
            <ul className='flex mr-10 space-x-4 cursor-pointer  text-gray-300 pt-2'>
           
         <div className='text-2xl text-blue-700 hover:scale-110 transition'><a href="https://www.linkedin.com/in/godsent-oko-ose-0aab62277" target='_blank'><FaLinkedin/></a></div>


         {/* <div className='text-2xl text-blue-700 hover:scale-110 transition'><Link  to="contact" spy={true} smooth={true} offset={-100} duration={500}><FaEnvelope/></Link></div> */}


         <div className='text-2xl text-blue-700 hover:scale-110 transition'><a href='mailto:iamgodsentt@gmail.com'><FaEnvelope/></a></div>


         <div className='text-2xl text-blue-700 hover:scale-110 transition'><a href="https://wa.me/+2348137906873" target='_blank'><FaWhatsapp/></a></div>
                   
            </ul>

           
            </div>
            

          
         </div>
        </div>  
        {/* //className='block md:hidden */}
        <div onClick={handleNav} className='block md:hidden' >
            
            {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/> }
            
        </div>

        

        
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='p-10 logo text-3xl font-bold'>Godsent<span className='text-blue-700' >.</span></h1>

           


            <ul className='p-4 border-b border-gray-600  cursor-pointer'>
            <li className='hover:border-b-4 p-2 '><Link  to="hero" spy={true} smooth={true} offset={-100} duration={500} >Home</Link></li>
                
            
            <li className='nav-item  hover:border-b-1 p-2 '>
                  <Link to="about" spy={true} smooth={true} offset={-110} duration={500} >
                   Me </Link></li>
                   <li className='nav-item  hover:border-b-4 p-2 hover:border-blue-800'>
                  <Link to="stack" spy={true} smooth={true} offset={-100} duration={500} >
                   Tech Stack </Link></li>
                 <li className='nav-item hover:border-b-4 p-2 '>
                  <Link to="Services" spy={true} smooth={true} offset={-100} duration={500} >Services
                  </Link></li>
                 <li className='nav-item hover:border-b-4 p-2 ' >
                  <Link to="Portfolio" spy={true} smooth={true} offset={-100} duration={500} >Portfolio</Link></li>
                 <li className='nav-item hover:border-b-4 p-2 '><Link to="contact" spy={true} smooth={true} offset={-200} duration={500} >Contact</Link></li>    
                 <li className='nav-item hover:border-b-4 p-2 '><Link to="about" spy={true} smooth={true} offset={-100} duration={500} href="">See my Resume</Link></li>  

            </ul>

            <div>
            <ul className='flex mr-10 space-x-4 cursor-pointer  text-gray-300 pt-5 p-8'>
           
           <div className='text-2xl text-blue-700 hover:scale-110 transition'><a href="https://www.linkedin.com/in/godsent-oko-ose-0aab62277" target='_blank'><FaLinkedin/></a></div>
         
           <div className='text-2xl text-blue-700 hover:scale-110 transition'><a href='mailto:iamgodsentt@gmail.com'><FaEnvelope/></a></div>


           <div className='text-2xl text-blue-700 hover:scale-110 transition'><a href="https://wa.me/+2348137906873" target='_blank'><FaWhatsapp/></a></div>
                     
              </ul>

            </div>
        </div>
    </div>
  )
}

export default Navbar


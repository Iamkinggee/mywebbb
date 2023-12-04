import React from 'react'
import Slide from 'react-reveal/Slide';

import MyPhoto3 from '../../assets/MyPhoto3.png'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
// import useState from 'react'
// import ContactPage from '../PagesFolder/ContactPage'




const About = () => {
  const navigate = useNavigate();

  const handlePageChange = () =>{
    navigate('/contact');
  };



  return (
   <>
    <div id='home' className=' w-full h-screen  overflow-auto font-[LexendZetta] py-16 px-4 m-auto mt-10'>
        <div className='grid md:grid-cols-2 max-w-[1000px]  items-center justify-center  mx-auto '>

         <div className='mx-auto text-white'>
        <Slide left>
         <img src={MyPhoto3} alt="/" className='w-[400px] ' loading='lazy'/>
         </Slide>
         </div>
         <div className='  pb-[100px] font-mono'>
        <Slide right>
       
         <h1 className='text-[40px] sm:text-center md:text-[50px]  font-bold text-center md:text-start text-neutral-500 font-[LexendZetta]' id='text-title'>AboutMe</h1>
       
         <h1 className=' text-[15px] md:text-xl   text-center md:text-start justify-center items-center  sm:text-center text-white font-[LexendZetta] font-semibold ' id='text-black'>Software<span className='text-blue-600 font-[LexendZetta] font-semibold'  id='text-blue'>Developer</span></h1>

            <p className='pb-5 py-4 pt-10 text-white text-[13px] md:text-[15px] font-[poppins] font-light tracking-wider'>Hey! I am Godsent Oko-Ose; a software Developer with a flair for crafting stunning, user friendly websites and mobile applications that harmoniously blend aesthetics and functionality. My passion for design fuels my dedication to delivering exceptional digital experiences. I am ready to collaborate with you, turning your ideas into a remarkable reality.</p>
            
           
           <button className='w-[300px] font-[LexendZetta] font-semibold border-2 border-blue-700 p-3 justify-center items-center m-auto flex rounded md:flex-none  md:items-start md:m-0 text-white md:text-[14px] text-[11px] cursor-pointer' onClick={handlePageChange} id='text-black'>Hire Me</button>

            
            
        
            </Slide>
         </div>
         
        </div>
        

    </div>
    </>
  )
}

export default About
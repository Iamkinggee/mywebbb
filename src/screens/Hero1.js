import React from 'react'
import MyPhoto3 from '../assets/images/MyPhoto3.png'
import TypeWriter from '../Components/TypeWriter'
import {Link} from 'react-scroll'
import ArrowCircleDown from './ArrowCircleDown'
import LightSpeed from 'react-reveal/LightSpeed';
import Slide from 'react-reveal/Slide';

const Hero1 = () => {
  return (
    <div id='hero' className=' w-full bg-neutral-900 text-black py-16 px-4 m-auto justify-center items-center'>
        <div className='max-w-[1024px] mx-auto grid md:grid-cols-2'>

           <Slide left>
            <img src={MyPhoto3} alt="myself" className='w-[400px]  mx-auto  ' />
            </Slide>


            <div className='flex flex-col justify-start'>
              <Slide right>
              <h1 className='md:text-7xl sm:text-4xl  text-white text-5xl font-mono font-bold text-center py-2 mt-2 '>#Build<br />Something</h1>
             


              <p className='text-center mt-2   p-2
              
              md:text-1xl sm:text-xl text-[15px] text-neutral-300 '>Howdy, I'm Godsent Oko-ose; <br /> 
                I'm a Software Engineer </p>

            
              <h2 className=' text-center justify-center items-center'> <TypeWriter/> </h2>
             

              <div className='flex mx-auto'>
                <Link  to="contact" spy={true} smooth={true} offset={-100} duration={500} >

                      <button className='bg-blue-700 font-bold rounded mt-7 w-40 h-15 p-3 hover:scale-110 transition text-black text-[20px] font-mono'>
                        Let's Talk
                      </button> 


                </Link>
               



     
      </div>
      </Slide>

            </div>
           
        </div>

    </div>
  )
}

export default Hero1;
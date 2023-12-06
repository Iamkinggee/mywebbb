import React from 'react'
import G2 from '../../assets/G2.gif'
import Slide from 'react-reveal/Slide';
// import MyPhoto3 from '.../'


const Skills = () => {
  return (
   <>
    <div className=' w-full  h-screen text-black font-mono overflow-auto'>
        <div className='w-full grid md:grid-cols-2  max-w-[1000px] items-center justify-center  h-full m-auto '>

         <div className='m-auto  '>
            <Slide left><img src={G2} loading='lazy' alt="pc-two gif" className='w-[300px] md:w-full pt-20 ' /></Slide> 
         </div>
         <div className='  pb-[120px] '>
            <Slide right>
         <h1 className='    text-neutral-500 
         
         text-[30px] sm:text-center md:text-[50px]  font-bold text-center md:text-start font-[LexendZetta] 
         pt-20
         ' id='text-title'>TechStack</h1>
     
            <p className='pb-5 py-2 text-start  text-white font-[LexendZetta] md:text-[15px] text-[10px]'>I'm Proficient in but, <br /> not limited to these   Technologies.</p>
            </Slide>
        <div className='flex  pt-10 gap-10 pb-5 font-[LexendZetta]  font-light  text-blue-500 text-[15px] ' id='text-blue' >
            <div >
            <Slide right>
                <li>HTML</li>    
                <li>CSS</li>
                <li>Javascript</li>
                <li>React JS</li>
                <li>React Native</li>
                <li>Tailwind CSS</li>
                <li>Figma</li>
                <li>Git & GitHub</li>
                <li>Wordpress</li>
                <li>BootStrap</li>
                <li>Photoshop</li>
                <li>Adobe Illustrator</li> </Slide>       
            </div>
        </div>
                
         </div>
        </div>
    </div>
    </>
  )
}

export default Skills
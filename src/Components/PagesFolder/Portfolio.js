import React from 'react'
import Port from '../../assets/Port.mp4'
import Slide from 'react-reveal/Slide';
import TD from '../../assets/TD.png'
import DP from '../../assets/DP.png'
import { Link } from 'react-router-dom';




const Portfolio = () => {
  return (
   <div className='w-full h-screen overflow-auto font-[LexendZetta] pb-[100px]'>
    <div className=' max-w-[1000px]  font-mono text-black m-auto '>


    
    <h1 className='font-bold  text-neutral-500 
    
    text-[30px] sm:text-center md:text-[50px] font-[LexendZetta]  text-center md:text-center 
    pt-20  'id='text-title'>Portfolio</h1>
    <p className='pb-20  text-center font-light md:text-[12px] text-[10px] text-white font-[LexendZetta]'>These are some of my latest Projects.</p>


{/* first Project */}
        <div className='grid md:grid-cols-2 w-full max-w-[1000px] items-center justify-center  h-full m-auto pb-[50px]'>

         <div className='m-auto    '>
       
         <Slide left>
         <video className='object-cover h-[250px] w-[350px] md:h-[300px] md:w-[400px] ' autoPlay loop muted src={Port} loading='lazy'/>
         </Slide>

         </div>
         <div className='   first-line: p-5 justify-center items-center m-auto shadow-md bg-opacity-100 rounded '>
        
         <Slide right>
            <h1 className='text-xl md:text-4xl font-semibold  text-center md:text-start justify-center items-center pt-5 text-white font-[LexendZetta]' id='text-black' >Portfolio Website - <br /><span className='text-xl font-[LexendZetta] font-light text-white' id='text-black '>1st iteration</span></h1>
            <p className='pb-5 py-4 text-white font-[poppins] font-light '>This was my first approach or version of a personal portfolio web page.</p>
            <p className='text-[14px] text-text-blue-200 font-[LexendZetta] font-light text-neutral-300 mt-3'>Technologies Used:</p>
            <p className='font-[poppins]  font-semibold text-blue-500' id='text-blue'> React.js, Javascript, Tailwind CSS </p>


            <div className='mt-4 text-center md:text-start justify-center items-center'>
              <Link to='https://www.iamkinggee.github.io/MYPORTFOLIO-WEBSITE/'  target='_blank'>
              <button className='border-2 border-blue-700 p-3  font-[LexendZetta] font-semibold w-[300px] bg-blue-600 text-white md:text-[14px] text-[11px]'>Discover</button>
              </Link>
  
            </div>
            </Slide>
         </div>
         

        </div>
         {/* line */}
        <div className='bg-blue-700 text-blue-700 w-full max-w-[1000px] justify-center m-auto opacity-20 items-center'>
        <hr className="bg-blue-700"/>
        </div>








        {/* secound */}


        <div className='grid md:grid-cols-2 w-full max-w-[1000px] items-center justify-center  h-full m-auto pb-[50px]'>

         <div className='m-auto    '>
       
         <Slide left>
         <img loading='lazy' src={TD} alt="/" className='object-cover h-[250px] w-[350px] md:h-[300px] md:w-[400px]' />
         </Slide>

         </div>
         <div className='   first-line: p-5 justify-center items-center m-auto shadow-md bg-opacity-100 rounded '>
        
         <Slide right>
            <h1 className=' text-xl md:text-4xl font-[LexendZetta] font-semibold  text-center md:text-start justify-center items-center  text-white' id='text-black' >To-do App </h1>
            <p className='pb-5 py-4 text-white font-[poppins] '>A simple productivity To-do App built for keeping track of activities and helping users to manage and maximize their day.</p>
            <p className='text-[14px] text-text-blue-200 font-[LexendZetta] font-light text-neutral-300 mt-3'>Technologies Used:</p>
            <p className='font-[poppins]  font-semibold  text-blue-500' id='text-blue'> React.js, Javascript,Tailwind CSS </p>


            <div className='mt-4 text-center md:text-start justify-center items-center'>
              <Link to='https://www.iamkinggee.github.io/TODO-APP/'  target='_blank'>
              <button className='  p-3 font-[LexendZetta] font-semibold w-[300px] bg-blue-600 text-white md:text-[14px] text-[11px]'>Discover</button>            
              </Link>


            

              <button className='border-2 border-blue-600 p-3 mt-3 font-bold w-[300px] font-[LexendZetta] text-white md:text-[14px] text-[11px]' id='text-black'>View Code</button>
            </div>
            </Slide>
         </div>
         

        </div>
         {/* line */}
        <div className='bg-blue-700 text-blue-700 w-full max-w-[1000px] justify-center m-auto opacity-20 items-center'>
        <hr className="bg-blue-700"/>
        </div>

  

        {/* project 3 */}

        {/*  
        <div className='grid md:grid-cols-2 w-full max-w-[1000px] items-center justify-center  h-full m-auto pb-[50px]'>

         <div className='m-auto    '>
       
         <Slide left>
         <img loading='lazy' src={TD} alt="/" className='object-cover h-[250px] w-[350px] md:h-[300px] md:w-[400px]' />
         </Slide>

         </div>
         <div className='   first-line: p-5 justify-center items-center m-auto shadow-md bg-opacity-100 rounded '>
        
         <Slide right>
            <h1 className=' text-xl md:text-4xl font-[LexendZetta] font-semibold  text-center md:text-start justify-center items-center  text-white' id='text-black' >Netflix Clone </h1>
            <p className='text-red-500 bg-white rounded-2xl mt-5 text-center'>Site will be LIVE soon</p>

            <p className='pb-5 py-4 text-white font-[poppins] '>A Netflix clone website; where users can watch movies for FREE. Built With "The movie database" API, using firebase for the back-end functionalities</p>
            <p className='text-[14px] text-text-blue-200 font-[LexendZetta] font-light text-neutral-300 mt-3'>Technologies Used:</p>
            <p className='font-[poppins]  font-semibold  text-blue-500' id='text-blue'> React.js, Firebase, API's, Javascript, Tailwind CSS </p>


            <div className='mt-4 text-center md:text-start justify-center items-center'>
              <Link to='https://www.iamkinggee.github.io/TODO-APP/'>
              <button className='  p-3 font-[LexendZetta] font-semibold w-[300px] bg-blue-600 text-white md:text-[14px] text-[11px]'>Discover</button>            
              </Link>


            

              <button className='border-2 border-blue-600 p-3 mt-3 font-bold w-[300px] font-[LexendZetta] text-white md:text-[14px] text-[11px]' id='text-black'>View Code</button>
            </div>
            </Slide>
         </div>
         

        </div>
       
        <div className='bg-blue-700 text-blue-700 w-full max-w-[1000px] justify-center m-auto opacity-20 items-center'>
        <hr className="bg-blue-700"/>
        </div>

      */}


<div className='grid md:grid-cols-2 w-full max-w-[1000px] items-center justify-center  m-auto pt-10 md:pt-0  pb-50'>

<div className='m-auto '>
<Slide left> 

<img src={DP} loading='lazy' alt="/" className='object-cover h-[250px] w-[350px] md:h-[300px] md:w-[400px] ' />
</Slide>
</div>
 <div className=' w-full pb-[120px]  first-line: p-5 justify-center items-center m-auto shadow-md rounded bg-opacity-100 '>
      
         <Slide right>


          
         <h1 className='text-xl md:text-4xl font-semibold  text-center md:text-start justify-center items-center pt-5 text-white font-[LexendZetta]' id='text-black' >Defi</h1>
            <p className='pb-5 py-4 text-white font-[poppins] font-light '>A Simple Landing Page for a Defi Company.</p>
            <p className='text-[14px] text-text-blue-200 font-[LexendZetta] font-light text-neutral-300 mt-3'>Technologies Used:</p>
            <p className='font-[poppins]  font-semibold text-blue-500' id='text-blue'> React.js, Javascript, Tailwind CSS </p>


            <div className='mt-4 text-center md:text-start justify-center items-center'>
              <Link to='https://www.iamkinggee.github.io/MYPORTFOLIO-WEBSITE/' target='_blank'> 
              <button className='border-2 border-blue-700 p-3  font-[LexendZetta] font-semibold w-[300px] bg-blue-600 text-white md:text-[14px] text-[11px]'>Discover</button>
              </Link>
</div>

            </Slide>
         </div>

</div>
    </div>
    </div>
  )
}

export default Portfolio